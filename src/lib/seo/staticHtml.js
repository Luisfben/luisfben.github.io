import { SITE, urlForLanguage } from '../../content/site.js';
import { buildPersonJsonLd } from './personJsonLd.js';

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
 */
export const renderSeoHead = (language) => {
  const url = urlForLanguage(language);
  const title = SITE.title[language] ?? SITE.title.es;
  const description = SITE.description[language] ?? SITE.description.es;
  const ogImage = `${SITE.url}${SITE.ogImage}`;
  const ogImageAlt = SITE.ogImageAlt[language] ?? SITE.ogImageAlt.es;
  const locale = language === 'en' ? 'en_US' : 'es_ES';
  const localeAlternate = language === 'en' ? 'es_ES' : 'en_US';
  const jsonLd = JSON.stringify(buildPersonJsonLd(language));

  return `<title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}" />
    <link rel="canonical" href="${url}" />
    <link rel="alternate" hreflang="es" href="${urlForLanguage('es')}" />
    <link rel="alternate" hreflang="en" href="${urlForLanguage('en')}" />
    <link rel="alternate" hreflang="x-default" href="${urlForLanguage('es')}" />

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
 * Regenerates the <noscript> fallback summary for a given language.
 */
export const renderNoscript = (language) => {
  const isEnglish = language === 'en';
  const heading = `${SITE.name} — ${SITE.jobTitle[language] ?? SITE.jobTitle.es}`;
  const description = SITE.description[language] ?? SITE.description.es;
  const contactLabel = isEnglish ? 'Contact' : 'Contacto';
  const jsNotice = isEnglish
    ? 'To see the full site, please enable JavaScript in your browser.'
    : 'Para ver el sitio completo, activa JavaScript en tu navegador.';

  return `<div style="max-width: 640px; margin: 40px auto; padding: 0 20px; font-family: sans-serif; line-height: 1.6; color: #1c2130;">
        <h1>${escapeHtml(heading)}</h1>
        <p>${escapeHtml(description)}</p>
        <p>${contactLabel}: <a href="mailto:lfbenavides@gmail.com">lfbenavides@gmail.com</a> · <a href="${SITE.sameAs[0]}">LinkedIn</a> · <a href="${SITE.sameAs[1]}">GitHub</a></p>
        <p>${escapeHtml(jsNotice)}</p>
      </div>`;
};
