import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { render } from '../dist-ssr/entry-server.js';
import { SITE, urlForLanguage } from '../src/content/site.js';
import { renderSeoHead, renderNoscript } from '../src/lib/seo/staticHtml.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const distDir = path.join(root, 'dist');

// One entry per pre-rendered route. Extend this list (and only this
// list) when new static routes are added — e.g. /escritos/ later.
const ROUTES = [
  { path: '/', language: 'es', outFile: path.join(distDir, 'index.html') },
  { path: '/en/', language: 'en', outFile: path.join(distDir, 'en', 'index.html') },
];

const template = readFileSync(path.join(distDir, 'index.html'), 'utf-8');

for (const route of ROUTES) {
  const appHtml = render(route.path);
  const seoHead = renderSeoHead(route.language);
  const noscript = renderNoscript(route.language);

  const html = template
    .replace(
      /<!-- SEO:START -->[\s\S]*?<!-- SEO:END -->/,
      `<!-- SEO:START -->\n    ${seoHead}\n    <!-- SEO:END -->`,
    )
    .replace(
      /<!-- NOSCRIPT:START -->[\s\S]*?<!-- NOSCRIPT:END -->/,
      `<!-- NOSCRIPT:START -->\n    <noscript>\n      ${noscript}\n    </noscript>\n    <!-- NOSCRIPT:END -->`,
    )
    .replace('<html lang="es"', `<html lang="${route.language}"`)
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  mkdirSync(path.dirname(route.outFile), { recursive: true });
  writeFileSync(route.outFile, html);
  console.log(`prerendered ${route.path} -> ${path.relative(root, route.outFile)}`);
}

const sitemapUrls = ROUTES.map(
  (route) => `  <url>
    <loc>${urlForLanguage(route.language)}</loc>
${ROUTES.map((alt) => `    <xhtml:link rel="alternate" hreflang="${alt.language}" href="${urlForLanguage(alt.language)}" />`).join('\n')}
  </url>`,
).join('\n');

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
