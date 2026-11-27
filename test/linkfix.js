// Lists broken links from a lychee JSON report as tab-separated
// "status, url, source file:line:col" lines for fzf (see `just linkfix`).
// With --ignore <url>, adds that url's site to .lycheeignore instead.
import { readFileSync, appendFileSync, existsSync } from "node:fs";
import { execFileSync } from "node:child_process";

const REPORT = "_linkcheck.json";
const IGNORE = ".lycheeignore";

function hostPattern(url) {
  const host = new URL(url).host.replace(/^www\./, "");
  return `^https?://([^/]*\\.)?${host.replaceAll(".", "\\.")}/`;
}

const URL_CHAR = /[\w\/.~%?#=&+:;@!$*,'()-]/;

function gitGrep(needle) {
  try {
    return execFileSync("git", ["grep", "-n", "-F", "-e", needle], { encoding: "utf8" }).trim().split("\n");
  } catch {
    return []; // git grep exits 1 when nothing matches
  }
}

// Whole-URL matches only, so "https://x.org/" does not match "https://x.org/a".
function sourceLocations(url) {
  const locations = new Set();
  for (const needle of new Set([url, url.replace(/\/$/, ""), url.replaceAll("&", "&amp;"), decodeURI(url)])) {
    for (const rivi of gitGrep(needle)) {
      const [, file, line, text] = rivi.match(/^(.+?):(\d+):(.*)$/);
      for (let i = text.indexOf(needle); i >= 0; i = text.indexOf(needle, i + 1)) {
        const next = text[i + needle.length] ?? " ";
        if (next === ")" || next === "'" || !URL_CHAR.test(next)) {
          locations.add(`${file}:${line}:${i + 1}`);
          break;
        }
      }
    }
  }
  return [...locations];
}

if (process.argv[2] === "--ignore") {
  appendFileSync(IGNORE, hostPattern(process.argv[3]) + "\n");
  process.exit();
}

const ignored = existsSync(IGNORE)
  ? readFileSync(IGNORE, "utf8").split("\n").filter((rivi) => rivi.trim() && !rivi.startsWith("#")).map((rivi) => new RegExp(rivi))
  : [];
const report = JSON.parse(readFileSync(REPORT, "utf8"));
const seen = new Set();
for (const [map, timedOut] of [[report.error_map, false], [report.timeout_map, true]]) {
  for (const [builtFile, entries] of Object.entries(map ?? {})) {
    for (const { url, status, span } of entries) {
      if (seen.has(url) || ignored.some((re) => re.test(url))) continue;
      seen.add(url);
      const label = timedOut ? "TIMEOUT" : String(status.code ?? "ERR");
      const sources = sourceLocations(url);
      for (const where of sources.length ? sources : [`${builtFile}:${span.line}:${span.column}`]) {
        console.log(`${label}\t${url}\t${where}`);
      }
    }
  }
}
