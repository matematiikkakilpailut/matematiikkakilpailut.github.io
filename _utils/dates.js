/**
 * Date formatting utilities for Finnish date display and calendar generation.
 */

/**
 * Parse an ISO date string to a Date object.
 * Uses local timezone to ensure consistent behavior regardless of build environment.
 * @param {string} isoString - Date in ISO format (YYYY-MM-DD)
 * @returns {Date|null} Parsed date or null if invalid
 */
export function parseISODate(isoString) {
  if (!isoString) return null;
  const match = isoString.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) {
    console.warn(`Invalid ISO date format: "${isoString}"`);
    return null;
  }
  const [, year, month, day] = match;
  const date = new Date(Number(year), Number(month) - 1, Number(day));
  if (isNaN(date.getTime())) {
    console.warn(`Invalid ISO date: "${isoString}"`);
    return null;
  }
  return date;
}

/**
 * Format a date range in Finnish style.
 * Examples:
 *   - Single day: "9.1."
 *   - Same month: "9.–11.1."
 *   - Different months: "9.1.–3.2."
 *   - Year boundary: "30.12.–2.1."
 *
 * @param {string} startISO - Start date in ISO format
 * @param {string} endISO - End date in ISO format (optional, defaults to start)
 * @param {string} displayOverride - Optional manual override for display
 * @returns {string} Formatted Finnish date string
 */
export function formatFinnishDateRange(startISO, endISO, displayOverride) {
  if (displayOverride) return displayOverride;

  const start = parseISODate(startISO);
  const end = endISO ? parseISODate(endISO) : start;

  if (!start) return startISO || '';
  if (!end) return formatSingleDate(start);

  const startDay = start.getDate();
  const startMonth = start.getMonth() + 1;
  const endDay = end.getDate();
  const endMonth = end.getMonth() + 1;

  // Single day event
  if (start.getTime() === end.getTime()) {
    return `${startDay}.${startMonth}.`;
  }

  // Same month
  if (startMonth === endMonth && start.getFullYear() === end.getFullYear()) {
    return `${startDay}.–${endDay}.${endMonth}.`;
  }

  // Different months
  return `${startDay}.${startMonth}.–${endDay}.${endMonth}.`;
}

/**
 * Format a single date in Finnish style.
 * @param {Date} date
 * @returns {string} e.g., "9.1."
 */
function formatSingleDate(date) {
  return `${date.getDate()}.${date.getMonth() + 1}.`;
}

/**
 * Check if an event's end date is in the past.
 * @param {string} endISO - End date in ISO format
 * @returns {boolean} True if the event has ended
 */
export function isPastEvent(endISO) {
  const end = parseISODate(endISO);
  if (!end) return false;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return end < today;
}

/**
 * Get the season name for a given date.
 * Spring: Jan-May, Autumn: Aug-Dec
 * (Summer months are grouped with spring for "Kevät ja kesä")
 *
 * @param {Date} date
 * @returns {string} Season name in Finnish
 */
export function getSeasonName(date) {
  const month = date.getMonth() + 1; // 1-12

  if (month >= 1 && month <= 7) {
    return 'Kevät ja kesä';
  }
  return 'Syksy';
}

/**
 * Get the year and season from a date.
 * @param {Date} date
 * @returns {{year: number, season: string}} Year and season
 */
export function getYearSeason(date) {
  return {
    year: date.getFullYear(),
    season: getSeasonName(date)
  };
}

/**
 * Get a unique key for grouping events by year/season.
 * @param {Date} date
 * @returns {string} Key like "2026-1" for spring or "2026-2" for autumn
 */
export function getSeasonKey(date) {
  const month = date.getMonth() + 1;
  const seasonNum = month <= 7 ? 1 : 2;
  return `${date.getFullYear()}-${seasonNum}`;
}

/**
 * Format a date for iCal (YYYYMMDD format).
 * @param {string} isoDate - Date in ISO format, or empty for current date
 * @returns {string} Date in iCal format (e.g., "20260109")
 */
export function formatICalDate(isoDate) {
  if (!isoDate) {
    // Return current date/time in iCal format for DTSTAMP
    const now = new Date();
    return now.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  }
  return isoDate.replace(/-/g, '');
}

/**
 * Get the exclusive end date for iCal (actual end + 1 day).
 * iCal uses exclusive end dates for all-day events.
 * @param {string} isoDate - End date in ISO format
 * @returns {string} Next day in iCal format (YYYYMMDD)
 */
export function getICalExclusiveEnd(isoDate) {
  const date = parseISODate(isoDate);
  if (!date) return '';
  date.setDate(date.getDate() + 1);
  // Use local date parts to avoid timezone issues
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}${month}${day}`;
}

/**
 * Generate a unique ID for an iCal event.
 * @param {string} startDate - Start date ISO
 * @param {string} title - Event title
 * @returns {string} UID for iCal
 */
export function generateEventUID(startDate, title) {
  const slug = title
    .toLowerCase()
    .replace(/[äå]/g, 'a')
    .replace(/ö/g, 'o')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .substring(0, 50);
  return `${startDate}-${slug}@matematiikkakilpailut.fi`;
}

/**
 * Escape text for iCal format (handle newlines, commas, etc.).
 * Also handles common HTML entities and provides line folding per RFC 5545.
 * @param {string} text - Text to escape
 * @returns {string} Escaped text suitable for iCal, with lines folded at 75 octets
 */
export function escapeICalText(text) {
  if (!text) return '';

  let result = text
    // First, decode HTML entities
    .replace(/&shy;/g, '')      // Remove soft hyphens
    .replace(/&ndash;/g, '–')
    .replace(/&mdash;/g, '—')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    // Strip HTML tags
    .replace(/<[^>]*>/g, '')
    // Escape special iCal characters (in order: backslash, semicolon, comma)
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,')
    .replace(/\n/g, '\\n');

  return result;
}

/**
 * Fold a content line according to RFC 5545 (at 75 octets).
 * Lines are folded by inserting CRLF followed by a single space.
 * Ensures we never split within a UTF-8 multi-byte character sequence.
 * @param {string} name - Property name (e.g., "DESCRIPTION")
 * @param {string} value - Property value (already escaped)
 * @returns {string} Folded line suitable for iCal
 */
export function foldICalLine(name, value) {
  const line = `${name}:${value}`;
  const encoder = new TextEncoder();
  const bytes = encoder.encode(line);

  // No folding needed if line is 75 octets or less
  if (bytes.length <= 75) {
    return line;
  }

  // Fold at 75 octets, working with the byte array to avoid splitting UTF-8 sequences
  const result = [];
  let byteOffset = 0;

  while (byteOffset < bytes.length) {
    let segmentLength = Math.min(75, bytes.length - byteOffset);

    // If this is a continuation line, reserve 1 byte for the leading space
    if (byteOffset > 0) {
      segmentLength = Math.min(74, bytes.length - byteOffset);
    }

    // Find a valid UTF-8 character boundary at or before segmentLength
    // UTF-8 continuation bytes start with bits 10xxxxxx (0x80-0xBF)
    while (segmentLength > 0 && (bytes[byteOffset + segmentLength] & 0xC0) === 0x80) {
      segmentLength--;
    }

    // Decode the segment
    const segment = new TextDecoder().decode(bytes.slice(byteOffset, byteOffset + segmentLength));

    if (byteOffset === 0) {
      result.push(segment);
    } else {
      result.push(' ' + segment);
    }

    byteOffset += segmentLength;
  }

  return result.join('\r\n');
}
