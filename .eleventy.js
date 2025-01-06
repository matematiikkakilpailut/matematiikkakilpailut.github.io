import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import yaml from "js-yaml";
import markdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";
import markdownItAttrs from "markdown-it-attrs";
import rss from "@11ty/eleventy-plugin-rss";
import * as cheerio from 'cheerio';
import { promises as fs } from 'node:fs';
import { join } from 'node:path';
import { PurgeCSS } from 'purgecss';
import postcss from 'postcss';
import cssnano from 'cssnano';

const md = markdownIt({
  html: true,
  breaks: false,
  linkify: false,
  typographer: true,
  quotes: "””’’",
}).use(markdownItAnchor, {
    level: 2
}).use(markdownItAttrs);

export default function(eleventyConfig) {
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
    "js",
    "css",
    "font",
    "kuvat",
    "favicon.ico",
    "robots.txt",
    "*.png",
    "*.pdf",
    "BingSiteAuth.xml",
    "feed.xsl",
    "CNAME",
    "seiskat/manifest.json",
    "BW2006",
    "BW2016",
    "{Baltian_tie,EGMO,IGO,IMO,Kappa,MAOL,PM,aiheet,aikataulu,english,kaytanto,kerhot,kilpailut,kirjallisuus,kokoukset,pythagoras,seiskat,tietosuoja,valmennus,valmentajat,uutiset}/**/*.{pdf,png,svg,ico,ps,tex,tex.gz,dvi,sty,cls,tgz,css}",
  ].map((file) => {
    eleventyConfig.addPassthroughCopy(file);
  });

  eleventyConfig.on('eleventy.after', async () => {
    try {
        // Concatenate Bootstrap and local styles
        const bootstrapPath = join(process.cwd(), 'css/bootstrap.css');
        const localStylesPath = join(process.cwd(), 'css/style.css');
        const bootstrapRebootPath = join(process.cwd(), 'css/bootstrap-reboot.css');
        const [bootstrapCSS, localCSS, rebootCSS] = await Promise.all([
            fs.readFile(bootstrapPath, 'utf8'),
            fs.readFile(localStylesPath, 'utf8'),
            fs.readFile(bootstrapRebootPath, 'utf8'),
        ]);
        const combinedCSS = bootstrapCSS + '\n' + localCSS;

        // Execute PurgeCSS against all HTML files
        const purgecssResult = await new PurgeCSS().purge({
            content: ['_site/**/*.html'],
            css: [{ raw: combinedCSS }],
            safelist: {
                standard: [/^modal-/, /^show$/, /^active$/, /^collaps/],
                deep: [/^dropdown/],
                greedy: [/^nav-/]
            }
        });

        const withReboot = rebootCSS + '\n' + purgecssResult[0].css;

        // Optimize through PostCSS/cssnano
        const minified = await postcss([cssnano({
            preset: ['default', {
                discardComments: { removeAll: true }
            }]
        })]).process(withReboot, { from: undefined });

        // Write optimized CSS to the distribution directory
        await fs.writeFile(
            join(process.cwd(), '_site/css/optimized.css'),
            minified.css
        );

    } catch (error) {
        console.error('CSS optimization failed:', error);
    }
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
