export default {
  layout: "page",
  tags: "uutinen",
  permalink: "uutiset/{{page.date.toISOString().substring(0,10)}}-{{page.fileSlug}}.html",
  eleventyComputed: {
    // Deduplicate recurring news titles ("Helmikuun valmennuskirje julkaistu")
    title: (data) => {
      const title = data.title;
      if (!title || !/\/\d{4}-\d{2}-\d{2}-[^/]+$/.test(data.page.inputPath)) {
        return title;
      }
      if (/\b20\d\d\b/.test(title)) {
        return title;
      }
      return `${title} (${data.page.date.getUTCFullYear()})`;
    },
  },
};
