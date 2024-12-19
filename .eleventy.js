const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const yaml = require("js-yaml");
const md = require("markdown-it")({
  html: true,
  breaks: false,
  linkify: false,
  typographer: true,
  quotes: "””’’",
}).use(require('markdown-it-anchor'), {
    level: 2
}).use(require('markdown-it-attrs'));
const rss = require("@11ty/eleventy-plugin-rss");
const cheerio = require('cheerio');


module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addPlugin(rss);

    eleventyConfig.addDataExtension("yaml", yaml.load);
    eleventyConfig.addFilter("markdownify", (x) => {
        return md.renderInline(x);
    });
    eleventyConfig.addFilter("markdown", (x) => {
        return md.render(x);
    });
    eleventyConfig.setLibrary("md", md);

    eleventyConfig.addFilter("splitCards", function(content) {
        const $ = cheerio.load(content, null, false);
        const sections = [];
        $('h2').each(function() {
            const section = $('<div></div>');
            section.append($(this).clone());

            let sibling = $(this).next();
            while(sibling.length && !sibling.is('h2')) {
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
                    '<div class="col-xs-12"><div class="card border-info p-2 my-3 shadow"><div class"card-body">'
            );
            const trailer = '</div></div></div>';
            const $ = cheerio.load(header + section + trailer, null, false);
            $('h2').addClass('card-title');
            $('p').addClass('card-text');
            sections[i] = $.html();
        }
        const result = sections.join('\n');
        console.log(result);
        return result;
    });

  ["default", "page", "seiskat", "valmennus"].map((layout) => {
    eleventyConfig.addLayoutAlias(layout, `${layout}.html`);
  });

  [
    "js",
    "css",
    "font",
    "kuvat",
    "favicon.ico",
    "robots.txt",
    "*.png",
    "*.pdf",
    "BingSiteAuth.xml",
    "CNAME",
    "seiskat/manifest.json",
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
