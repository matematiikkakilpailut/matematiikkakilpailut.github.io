/**
 * Schedule data fetcher for the aikataulu page.
 *
 * Fetches schedule data from a Google Sheets CSV at build time,
 * transforms it to the format expected by the template, and
 * auto-generates year/season section headers.
 *
 * CSV columns expected:
 *   - start_date: ISO format (YYYY-MM-DD)
 *   - end_date: ISO format (YYYY-MM-DD), optional
 *   - title: Event title (plain text)
 *   - description: Event description (markdown allowed)
 *   - url: Optional URL for registration or more info
 *   - display_override: Optional manual date display string
 */

import { parse } from 'csv-parse/sync';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  parseISODate,
  formatFinnishDateRange,
  isPastEvent,
  getSeasonKey,
  getYearSeason
} from '../_utils/dates.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const CACHE_FILE = path.join(__dirname, 'schedule-cache.csv');

// Google Sheets published CSV URL
// To set up: Open your Google Sheet > File > Share > Publish to web
// Select the sheet tab, choose "Comma-separated values (.csv)", copy the URL
const SHEET_URL = process.env.SCHEDULE_CSV_URL || '';

/**
 * Fetch CSV data from URL.
 * @param {string} url - URL to fetch
 * @param {number} timeout - Timeout in ms
 * @returns {Promise<string>} CSV content
 */
async function fetchCSV(url, timeout = 10000) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    return await response.text();
  } finally {
    clearTimeout(timeoutId);
  }
}

/**
 * Save CSV content to cache file for fallback.
 * @param {string} csvContent - CSV content to cache
 */
function saveToCache(csvContent) {
  try {
    fs.writeFileSync(CACHE_FILE, csvContent, 'utf-8');
  } catch (err) {
    console.warn('Could not save schedule cache:', err.message);
  }
}

/**
 * Load CSV content from cache file.
 * @returns {string|null} Cached CSV content or null
 */
function loadFromCache() {
  try {
    if (fs.existsSync(CACHE_FILE)) {
      return fs.readFileSync(CACHE_FILE, 'utf-8');
    }
  } catch (err) {
    console.warn('Could not load schedule cache:', err.message);
  }
  return null;
}

/**
 * Transform a CSV row to an event object.
 * @param {object} row - Parsed CSV row
 * @returns {object} Event object matching template expectations
 */
function transformRow(row) {
  const startDate = row.start_date?.trim();
  const endDate = row.end_date?.trim() || startDate;
  const title = row.title?.trim() || '';
  const description = row.description?.trim() || '';
  const url = row.url?.trim() || '';
  const displayOverride = row.display_override?.trim() || '';

  // Build the tapahtuma (event description) field
  // This matches the existing YAML format with markdown
  let tapahtuma = title;

  if (description) {
    tapahtuma += `. ${description}`;
  }

  // Add registration button if URL is provided
  if (url) {
    // Check if it's a registration link (contains common patterns)
    const isRegistration = url.includes('ilmoittaudu') ||
                          url.includes('paivola.fi/kurssit') ||
                          url.includes('eventbrite');

    if (isRegistration) {
      tapahtuma += `\n[Ilmoittaudu](${url}){.btn .btn-primary .btn-sm .align-baseline role="button"}`;
    } else {
      // Just add the URL as a link in the title
      tapahtuma = `[${title}](${url})`;
      if (description) {
        tapahtuma += `. ${description}`;
      }
    }
  }

  return {
    pvm: formatFinnishDateRange(startDate, endDate, displayOverride),
    tapahtuma,
    isPast: isPastEvent(endDate),
    startDate,
    endDate,
    title,
    description,
    url
  };
}

/**
 * Group events by year/season and insert section headers.
 * @param {object[]} events - Array of event objects
 * @returns {object[]} Events with section headers inserted
 */
function groupAndAddHeaders(events) {
  // Sort events by start date (newest first for display)
  const sorted = [...events].sort((a, b) => {
    const dateA = parseISODate(a.startDate);
    const dateB = parseISODate(b.startDate);
    if (!dateA || !dateB) return 0;
    return dateA - dateB; // Chronological order within sections
  });

  // Group by season key
  const groups = new Map();
  for (const event of sorted) {
    const date = parseISODate(event.startDate);
    if (!date) continue;

    const key = getSeasonKey(date);
    if (!groups.has(key)) {
      groups.set(key, []);
    }
    groups.get(key).push(event);
  }

  // Convert to array with headers, sorted by key (newest first)
  const result = [];
  const sortedKeys = [...groups.keys()].sort().reverse();

  for (const key of sortedKeys) {
    const events = groups.get(key);
    if (events.length === 0) continue;

    // Get year/season info from first event
    const firstEvent = events[0];
    const date = parseISODate(firstEvent.startDate);
    const { year, season } = getYearSeason(date);

    // Add section header
    result.push({
      pvm: String(year),
      tapahtuma: season,
      otsikko: true
    });

    // Add events in chronological order within the season
    result.push(...events);
  }

  return result;
}

/**
 * Main data export function.
 * Called by Eleventy at build time.
 */
export default async function () {
  let csvContent = null;
  let source = 'live';

  // Try to fetch from Google Sheets
  if (SHEET_URL) {
    try {
      console.log('Fetching schedule from Google Sheets...');
      csvContent = await fetchCSV(SHEET_URL);
      saveToCache(csvContent);
      console.log('Schedule fetched successfully.');
    } catch (err) {
      console.warn(`Failed to fetch schedule: ${err.message}`);
      console.warn('Trying to use cached data...');
    }
  } else {
    console.log('No SCHEDULE_CSV_URL set, using cached data.');
  }

  // Fall back to cache if fetch failed
  if (!csvContent) {
    csvContent = loadFromCache();
    if (csvContent) {
      source = 'cache';
      console.log('Using cached schedule data.');
    } else {
      console.warn('No cached schedule data available. Schedule will be empty.');
      return {
        aikataulu: [],
        source: 'empty'
      };
    }
  }

  // Parse CSV
  const rows = parse(csvContent, {
    columns: true,
    skip_empty_lines: true,
    trim: true,
    relax_column_count: true
  });

  // Transform rows to events
  const events = rows
    .filter(row => row.start_date) // Skip rows without start date
    .map(transformRow);

  // Group by year/season and add headers
  const aikataulu = groupAndAddHeaders(events);

  return {
    aikataulu,
    source
  };
}
