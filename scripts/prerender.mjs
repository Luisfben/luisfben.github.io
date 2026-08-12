import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { render, escritos } from '../dist-ssr/entry-server.js';
import { SITE, urlForLanguage } from '../src/content/site.js';
import { renderSeoHead, renderArticleHead } from '../src/lib/seo/staticHtml.js';
import { buildEscritosListJsonLd } from '../src/lib/seo/articleJsonLd.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const distDir = path.join(root, 'dist');

const escritosListUrl = (language) =>
  language === 'en' ? `${SITE.url}/en/escritos/` : `${SITE.url}/escritos/`;

// One entry per pre-rendered route. Extend this list (and only this
// list) when new static routes are added. `hreflangGroup` controls
// which routes get reciprocal <xhtml:link> tags in the sitemap —
// escrito pieces have no EN counterpart, so they get none.
const ROUTES = [
  { path: '/', language: 'es', outFile: path.join(distDir, 'index.html'), loc: urlForLanguage('es'), hreflangGroup: 'home' },
  { path: '/en/', language: 'en', outFile: path.join(distDir, 'en', 'index.html'), loc: urlForLanguage('en'), hreflangGroup: 'home' },
  {
    path: '/escritos/',
    language: 'es',
    outFile: path.join(distDir, 'escritos', 'index.html'),
    loc: escritosListUrl('es'),
    kind: 'escritos-list',
    hreflangGroup: 'escritos-list',
  },
  {
    path: '/en/escritos/',
    language: 'en',
    outFile: path.join(distDir, 'en', 'escritos', 'index.html'),
    loc: escritosListUrl('en'),
    kind: 'escritos-list',
    hreflangGroup: 'escritos-list',
  },
  ...escritos.map((escrito) => ({
    path: `/escritos/${escrito.slug}/`,
    language: 'es',
    outFile: path.join(distDir, 'escritos', escrito.slug, 'index.html'),
    loc: `${SITE.url}/escritos/${escrito.slug}/`,
    kind: 'escrito',
    escrito,
    hreflangGroup: null,
  })),
];

const template = readFileSync(path.join(distDir, 'index.html'), 'utf-8');
const escritosListJsonLd = JSON.stringify(buildEscritosListJsonLd(escritos));

for (const route of ROUTES) {
  const appHtml = render(route.path);

  let seoHead;
  if (route.kind === 'escrito') {
    seoHead = renderArticleHead(route.escrito);
  } else if (route.kind === 'escritos-list') {
    seoHead = renderSeoHead(route.language, {
      url: route.loc,
      title: SITE.escritosListTitle[route.language],
      description: SITE.escritosListDescription[route.language],
      jsonLd: escritosListJsonLd,
      hreflangEs: escritosListUrl('es'),
      hreflangEn: escritosListUrl('en'),
    });
  } else {
    seoHead = renderSeoHead(route.language);
  }

  const html = template
    .replace(
      /<!-- SEO:START -->[\s\S]*?<!-- SEO:END -->/,
      `<!-- SEO:START -->\n    ${seoHead}\n    <!-- SEO:END -->`,
    )
    .replace('<html lang="es"', `<html lang="${route.language}"`)
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  mkdirSync(path.dirname(route.outFile), { recursive: true });
  writeFileSync(route.outFile, html);
  console.log(`prerendered ${route.path} -> ${path.relative(root, route.outFile)}`);
}

const sitemapUrls = ROUTES.map((route) => {
  if (!route.hreflangGroup) {
    return `  <url>\n    <loc>${route.loc}</loc>\n  </url>`;
  }
  const siblings = ROUTES.filter((r) => r.hreflangGroup === route.hreflangGroup);
  const links = siblings
    .map((s) => `    <xhtml:link rel="alternate" hreflang="${s.language}" href="${s.loc}" />`)
    .join('\n');
  return `  <url>\n    <loc>${route.loc}</loc>\n${links}\n  </url>`;
}).join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${sitemapUrls}
</urlset>
`;

writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap);
console.log('wrote dist/sitemap.xml');

const robots = `User-agent: *
Allow: /

Sitemap: ${SITE.url}/sitemap.xml
`;

writeFileSync(path.join(distDir, 'robots.txt'), robots);
console.log('wrote dist/robots.txt');

// Build-only artifact, never deployed (only ./dist is uploaded to Pages).
rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true });
