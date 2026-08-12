import { SITE, urlForLanguage } from '../../content/site.js';
import { buildPersonJsonLd } from './personJsonLd.js';
import { buildArticleJsonLd } from './articleJsonLd.js';

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

/**
 * Regenerates the SEO <head> block (title, description, canonical,
 * hreflang, Open Graph, Twitter Card, JSON-LD) for a given language.
 * Used by scripts/prerender.mjs to replace the SEO:START/SEO:END
 * section of the built index.html for each route.
 *
 * `overrides` lets a route (e.g. the escritos list) supply its own
 * title/description/url/jsonLd instead of the site-wide Person
 * defaults, without duplicating the whole OG/Twitter block per route.
 */
export const renderSeoHead = (language, overrides = {}) => {
  const url = overrides.url ?? urlForLanguage(language);
  const title = overrides.title ?? (SITE.title[language] ?? SITE.title.es);
  const description = overrides.description ?? (SITE.description[language] ?? SITE.description.es);
  const ogImage = `${SITE.url}${SITE.ogImage}`;
  const ogImageAlt = SITE.ogImageAlt[language] ?? SITE.ogImageAlt.es;
  const locale = language === 'en' ? 'en_US' : 'es_ES';
  const localeAlternate = language === 'en' ? 'es_ES' : 'en_US';
  const jsonLd = overrides.jsonLd ?? JSON.stringify(buildPersonJsonLd(language));
  const hreflangEs = overrides.hreflangEs ?? urlForLanguage('es');
  const hreflangEn = overrides.hreflangEn ?? urlForLanguage('en');

  return `<title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}" />
    <link rel="canonical" href="${url}" />
    <link rel="alternate" hreflang="es" href="${hreflangEs}" />
    <link rel="alternate" hreflang="en" href="${hreflangEn}" />
    <link rel="alternate" hreflang="x-default" href="${hreflangEs}" />

    <!-- Open Graph -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${url}" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:image" content="${ogImage}" />
    <meta property="og:image:width" content="1212" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="${escapeHtml(ogImageAlt)}" />
    <meta property="og:locale" content="${locale}" />
    <meta property="og:locale:alternate" content="${localeAlternate}" />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <meta name="twitter:image" content="${ogImage}" />

    <script type="application/ld+json">
      ${jsonLd}
    </script>`;
};

/**
 * SEO <head> block for a single escrito's own page. Always Spanish
 * (R6 — the section itself is Spanish-only), og:type "article",
 * Article JSON-LD instead of Person.
 */
export const renderArticleHead = (escrito) => {
  const url = `${SITE.url}/escritos/${escrito.slug}/`;
  const title = `${escrito.title} — ${SITE.name}`;
  const ogImage = `${SITE.url}${SITE.ogImage}`;
  const jsonLd = JSON.stringify(buildArticleJsonLd(escrito));

  return `<title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(escrito.summary)}" />
    <link rel="canonical" href="${url}" />

    <!-- Open Graph -->
    <meta property="og:type" content="article" />
    <meta property="og:url" content="${url}" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(escrito.summary)}" />
    <meta property="og:image" content="${ogImage}" />
    <meta property="og:image:width" content="1212" />
    <meta property="og:image:height" content="630" />
    <meta property="og:locale" content="es_ES" />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(escrito.summary)}" />
    <meta name="twitter:image" content="${ogImage}" />

    <script type="application/ld+json">
      ${jsonLd}
    </script>`;
};
