import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import yaml from "js-yaml";
import markdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";
import markdownItAttrs from "markdown-it-attrs";
import rss from "@11ty/eleventy-plugin-rss";
import * as cheerio from 'cheerio';
import { readFileSync, mkdirSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import browserslist from 'browserslist';
import { transform, browserslistToTargets } from 'lightningcss';

let targets = browserslistToTargets(browserslist('defaults'));

const tyyliMin = () => {
  const { code } = transform({
    filename: 'css/tyyli.css',
    code: readFileSync("css/tyyli.css"),
    targets,
    minify: true,
    sourceMap: false,
  });
  return {
    css: code,
    nimi: `tyyli.${createHash("md5").update(code).digest("hex").slice(0, 8)}.min.css`
  };
};

const md = markdownIt({
  html: true,
  breaks: false,
  linkify: false,
  typographer: true,
  quotes: "””’’",
}).use(markdownItAnchor, {
  level: 2
}).use(markdownItAttrs)

export default function (eleventyConfig) {
  // Validate pdf-redirects.json (hand-edited, fetched client-side by the 404 page).
  let pdfRedirects;
  try {
    pdfRedirects = JSON.parse(readFileSync("pdf-redirects.json", "utf8"));
  } catch (e) {
    throw new Error(`pdf-redirects.json is not valid JSON: ${e.message}`);
  }
  if (
    !pdfRedirects ||
    typeof pdfRedirects !== "object" ||
    Array.isArray(pdfRedirects) ||
    !Object.entries(pdfRedirects).every(
      ([k, v]) => typeof k === "string" && typeof v === "string"
    )
  ) {
    throw new Error(
      "pdf-redirects.json must be a plain object mapping string paths to string file IDs"
    );
  }

  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(rss);

  eleventyConfig.addGlobalData("tyyliCss", () => `/css/${tyyliMin().nimi}`);
  eleventyConfig.on("eleventy.before", ({ directories }) => {
    const { css, nimi } = tyyliMin();
    mkdirSync(`${directories.output}css`, { recursive: true });
    writeFileSync(`${directories.output}css/${nimi}`, css);
  });
  eleventyConfig.addWatchTarget("css/tyyli.css");

  eleventyConfig.addDataExtension("yaml", yaml.load);
  eleventyConfig.addFilter("markdownify", (x) => {
    return md.renderInline(x);
  });
  eleventyConfig.addFilter("markdown", (x) => {
    return md.render(x);
  });
  eleventyConfig.setLibrary("md", md);

  eleventyConfig.addFilter("splitCards", function (content) {
    const $ = cheerio.load(content, null, false);
    const sections = [];
    $('h2').each(function () {
      const section = $('<div></div>');
      section.append($(this).clone());

      let sibling = $(this).next();
      while (sibling.length && !sibling.is('h2')) {
        section.append(sibling.clone());
        sibling = sibling.next();
      }
      sections.push(section.html());
    });
    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      const header = (
        i < sections.length - 1 ?
          '<div class="col-md-6 col-xl-4 my-3"><div class="card h-100 shadow"><div class="card-body">' :
          '<div class="col-xs-12"><div class="card border-info p-2 my-3 shadow"><div class="card-body">'
      );
      const trailer = '</div></div></div>';
      const $ = cheerio.load(header + section + trailer, null, false);
      $('h2').addClass('card-title');
      $('p').addClass('card-text');
      sections[i] = $.html();
    }
    const result = sections.join('\n');
    return result;
  });

  ["default", "page", "seiskat", "valmennus"].map((layout) => {
    eleventyConfig.addLayoutAlias(layout, `${layout}.html`);
  });


  [
    "js/*.js",
    "css/*.min.css",
    "font",
    "kuvat",
    "favicon.ico",
    "robots.txt",
    "pdf-redirects.json",
    "*.png",
    "*.pdf",
    "BingSiteAuth.xml",
    "feed.xsl",
    "CNAME",
    "seiskat/manifest.json",
    { "uutis-redir": "uutiset" },
    "BW2006",
    "BW2016",
    "{Baltian_tie,EGMO,IGO,IMO,Kappa,MAOL,PM,aiheet,aikataulu,english,kaytanto,kerhot,kilpailut,kirjallisuus,kokoukset,pythagoras,seiskat,tietosuoja,valmennus,valmentajat,uutiset}/**/*.{pdf,png,svg,ico,ps,tex,tex.gz,dvi,sty,cls,tgz,css}",
  ].map((file) => {
    eleventyConfig.addPassthroughCopy(file);
  });

  return {
    dir: {
      input: "./",
      output: "./_site",
    },
    passthroughFileCopy: true,
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
