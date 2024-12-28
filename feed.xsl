<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:atom="http://www.w3.org/2005/Atom">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes" />
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="fi">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title><xsl:value-of select="/atom:feed/atom:title" /> - Atom Feed</title>
        <style>
          body {
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
          font-family: system-ui, -apple-system, sans-serif;
          line-height: 1.5;
          color: #1a1a1a;
          background: #f9f9f9;
          }
          header {
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid #ddd;
          }
          h1 {
          margin: 0 0 0.5rem 0;
          font-size: 1.8rem;
          font-weight: 600;
          }
          h2 {
          margin: 0 0 1rem 0;
          font-size: 1.2rem;
          font-weight: normal;
          color: #666;
          }
          .subtitle {
          font-style: italic;
          color: #666;
          }
          .meta {
          color: #666;
          font-size: 0.9rem;
          }
          article {
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid #eee;
          }
          article h3 {
          margin: 0 0 0.5rem 0;
          font-size: 1.4rem;
          }
          article time {
          color: #666;
          font-size: 0.9rem;
          }
          a {
          color: #005eb8;
          text-decoration: none;
          }
          a:hover {
          text-decoration: underline;
          }
          .feed-info {
          margin-top: 3rem;
          padding-top: 1rem;
          border-top: 1px solid #ddd;
          font-size: 0.9rem;
          color: #666;
          }
          @media (max-width: 600px) {
          body {
          padding: 1rem;
          }
          }
        </style>
      </head>
      <body>
        <header>
          <h1>
            <xsl:value-of select="/atom:feed/atom:title" />
          </h1>
        </header>

        <main>
          <xsl:for-each select="/atom:feed/atom:entry[position() > last() - 10]">
            <xsl:sort select="atom:updated" order="descending" />
            <article>
              <h3>
                <a href="{atom:link/@href}">
                  <xsl:value-of select="atom:title" />
                </a>
              </h3>
              <time datetime="{atom:updated}">
                <xsl:value-of select="substring(atom:updated, 1, 10)" />
              </time>
              <div>
                <xsl:value-of select="atom:content" disable-output-escaping="yes" />
              </div>
            </article>
          </xsl:for-each>
        </main>

        <footer class="feed-info">
          <p> Viimeksi päivitetty: <xsl:value-of select="substring(/atom:feed/atom:updated, 1, 10)" />
            <br />
  Syötteen URL: <a href="{/atom:feed/atom:link[@rel='self']/@href}">
              <xsl:value-of select="/atom:feed/atom:link[@rel='self']/@href" />
            </a>
            <br />
  Sivusto: <a href="{/atom:feed/atom:link[not(@rel='self')]/@href}">
              <xsl:value-of select="/atom:feed/atom:link[not(@rel='self')]/@href" />
            </a>
          </p>
        </footer>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>