// Internal link checker. Run via `npm test` (builds the site into _test-site first).
// Walks every generated .html file and verifies that internal href/src targets
// exist in the built output, and that same-page #fragment links resolve to an id.
import { readdirSync, readFileSync, existsSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as cheerio from "cheerio";

const SITE = fileURLToPath(new URL("../_test-site/", import.meta.url));
const EXCLUDE = ["BW2006", "BW2016", "kokoukset", "vanhaset"];
const SKIP_PROTO = /^(https?:|mailto:|tel:|javascript:|data:|\/\/)/i;
const pdfRedirects = JSON.parse(
  readFileSync(new URL("../pdf-redirects.json", import.meta.url), "utf8")
);

function* htmlFiles(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (EXCLUDE.includes(path.relative(SITE, full))) continue;
    if (entry.isDirectory()) yield* htmlFiles(full);
    else if (entry.name.endsWith(".html")) yield full;
  }
}

function targetExists(fsPath) {
  if (!existsSync(fsPath)) return false;
  if (statSync(fsPath).isDirectory()) return existsSync(path.join(fsPath, "index.html"));
  return true;
}

const errors = [];
let files = 0, links = 0;

for (const file of htmlFiles(SITE)) {
  files++;
  const $ = cheerio.load(readFileSync(file, "utf8"));
  const rel = path.relative(SITE, file);
  const base = $("base[href]").attr("href");
  const dir = base ? path.join(SITE, base) : path.dirname(file);

  $("[href], [src]").each((_, el) => {
    const url = $(el).attr("href") ?? $(el).attr("src");
    if (!url || SKIP_PROTO.test(url)) return;
    links++;

    const [pathPart, fragment] = url.split("#", 2);

    if (pathPart === "") {
      if (fragment && $(`[id="${fragment}"]`).length === 0) {
        errors.push(`${rel}: broken fragment #${fragment}`);
      }
      return;
    }

    const clean = decodeURIComponent(pathPart.split("?")[0]);
    const fsPath = clean.startsWith("/")
      ? path.join(SITE, clean)
      : path.resolve(dir, clean);
    const sitePath = "/" + path.relative(SITE, fsPath);
    if (!targetExists(fsPath) && !(sitePath in pdfRedirects)) {
      errors.push(`${rel}: broken link ${url}`);
    }
  });
}

console.log(`Checked ${links} internal links in ${files} HTML files.`);
if (errors.length > 0) {
  console.error(`\n${errors.length} broken link(s):`);
  for (const e of errors) console.error(`  ${e}`);
  process.exit(1);
}
console.log("All internal links OK.");
