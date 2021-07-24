const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const yaml = require("js-yaml");
const md = require("markdown-it")({
  html: true,
  breaks: false,
  linkify: false,
  typographer: true,
  quotes: "””’’",
});
const sitemap = require("@quasibit/eleventy-plugin-sitemap");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(sitemap, {
    sitemap: {
      hostname: "https://matematiikkakilpailut.fi",
    },
  });

  eleventyConfig.addDataExtension("yaml", yaml.load);
  eleventyConfig.addFilter("markdownify", (x) => {
    return md.render(x);
  });
  eleventyConfig.setLibrary("md", md);

  ["default", "page", "seiskat", "valmennus"].map((layout) => {
    eleventyConfig.addLayoutAlias(layout, `${layout}.html`);
  });

  [
    "js",
    "css",
    "font",
    "kuvat",
    "robots.txt",
    "*.png",
    "*.pdf",
    "BingSiteAuth.xml",
    "CNAME",
    "seiskat/kuvake",
    "seiskat/manifest.json",
    "BW2006",
    "BW2016",
    "{Baltian_tie,EGMO,IGO,IMO,Kappa,MAOL,PM,aiheet,aikataulu,english,kaytanto,kerhot,kilpailut,kirjallisuus,kokoukset,pythagoras,seiskat,tietosuoja,valmennus,valmentajat}/**/*.{pdf,png,svg,ico,ps,tex,dvi,sty,cls,tgz,css}",
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
