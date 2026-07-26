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
    return typeof x === "string" ? md.renderInline(x) : "";
  });
  eleventyConfig.addFilter("markdown", (x) => {
    return typeof x === "string" ? md.render(x) : "";
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

    const kortit = [];
    const artikkelit = [];

    for (const section of sections) {
      const $c = cheerio.load('<article class="mk-kortti">' + section + '</article>', null, false);
      const card = $c('article');
      const heading = card.find('h2').first();

      if (heading.hasClass('artikkeli')) {
        heading.removeClass('artikkeli');
        artikkelit.push(card.html());
        continue;
      }

      for (const [luokka, korttiLuokka] of [['nosto', 'mk-kortti--nosto'], ['laaja', 'mk-kortti--laaja'], ['uutinen', 'mk-kortti--uutinen']]) {
        if (heading.hasClass(luokka)) {
          heading.removeClass(luokka);
          card.addClass(korttiLuokka);
        }
      }

      const ylaotsikko = card.find('p.ylaotsikko').first();
      if (ylaotsikko.length) {
        ylaotsikko.removeClass('ylaotsikko').addClass('mk-ylaotsikko');
        heading.before(ylaotsikko);
      }
      const jalki = card.find('p.jalki').first().remove();
      const body = $c('<div class="mk-kortti-teksti"></div>');
      heading.nextAll().each(function () { body.append($c(this).clone()); });
      heading.nextAll().remove();
      heading.after(body);

      const link = heading.find('a').first();
      if (jalki.length) {
        card.append('<div class="mk-kortti-jalki">' + jalki.html() + '</div>');
      } else if (link.length) {
        const jalkiLinkki = $c('<a>Lue lisää</a>').attr('href', link.attr('href'));
        card.append($c('<div class="mk-kortti-jalki"></div>').append(jalkiLinkki));
      }
      kortit.push($c.html());
    }

    let out = '';
    if (kortit.length) out += '<div class="mk-kortit">\n' + kortit.join('\n') + '\n</div>';
    if (artikkelit.length) out += '\n<div class="mk-artikkeli mt-5">\n' + artikkelit.join('\n') + '\n</div>';
    return out;
  });

  eleventyConfig.addFilter("uutiskuva", (html) => {
    const img = cheerio.load(html ?? "", null, false)('img').first();
    if (!img.length) return null;
    const src = img.attr('src');
    return {
      src: /googleusercontent\.com\/d\//.test(src) ? `${src}=w300` : src,
      alt: img.attr('alt') ?? "",
    };
  });

  eleventyConfig.addFilter("ilmanVuosiliitetta", (otsikko) => {
    return String(otsikko ?? "").replace(/\s*\(\d{4}\)$/, "");
  });

  eleventyConfig.addFilter("uutisnayte", (html) => {
    const $ = cheerio.load(String(html ?? "").split(/<!--\s*tiivistelma\s*-->/)[0], null, false);
    $('figure, img').remove();
    return $.html();
  });

  // Aikataulu: tulevat tapahtumat etusivun tapahtumapalkkiin aikajärjestyksessä.
  // Vaatii tapahtumalta alkaa-kentän (ISO 8601, esim. alkaa: 2026-08-28).
  const isoPaiva = (d) => new Date(d).toISOString().slice(0, 10);
  const tanaanHelsinki = () => new Date().toLocaleDateString("sv", { timeZone: "Europe/Helsinki" });
  const paattymisPaiva = (t) => isoPaiva(t.paattyy ?? t.alkaa);
  eleventyConfig.addFilter("isoPaiva", (d) => d ? isoPaiva(d) : "");
  eleventyConfig.addFilter("tulevatTapahtumat", (tapahtumat) => {
    if (!Array.isArray(tapahtumat)) return [];
    const tanaan = tanaanHelsinki();
    return tapahtumat
      .filter((t) => t && !t.otsikko && t.alkaa && t.etusivulle)
      .filter((t) => paattymisPaiva(t) >= tanaan)
      .map((t) => ({
        ...t,
        nimi: t.nimi ?? t.tapahtuma,
        iso: isoPaiva(t.alkaa),
        isoLoppu: paattymisPaiva(t),
      }))
      .sort((a, b) => a.iso.localeCompare(b.iso));
  });

  // Aikataulurivin tila: "kaynnissa", "seuraava", "mennyt" tai tyhjä.
  eleventyConfig.addFilter("tapahtumanTila", function (tapahtuma) {
    if (!tapahtuma || !tapahtuma.alkaa) return "";
    const tanaan = tanaanHelsinki();
    if (paattymisPaiva(tapahtuma) < tanaan) return "mennyt";
    if (isoPaiva(tapahtuma.alkaa) <= tanaan) return "kaynnissa";
    const kaikki = (this.ctx?.aikataulu?.aikataulu) ?? [];
    const seuraava = kaikki
      .filter((t) => t && !t.otsikko && t.alkaa && isoPaiva(t.alkaa) > tanaan)
      .sort((a, b) => isoPaiva(a.alkaa).localeCompare(isoPaiva(b.alkaa)))[0];
    return seuraava === tapahtuma ? "seuraava" : "";
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
