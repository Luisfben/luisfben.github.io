import { SITE } from '../../content/site.js';

/**
 * Article JSON-LD for a single escrito, author pointing back to the
 * site's Person.
 */
export const buildArticleJsonLd = (escrito) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: escrito.title,
  description: escrito.summary,
  datePublished: escrito.date,
  inLanguage: 'es',
  keywords: escrito.keywords.join(', '),
  author: {
    '@type': 'Person',
    name: SITE.name,
    url: SITE.url,
  },
  publisher: {
    '@type': 'Person',
    name: SITE.name,
  },
  mainEntityOfPage: `${SITE.url}/escritos/${escrito.slug}/`,
});

/**
 * ItemList JSON-LD for the escritos listing page, linking each Article.
 */
export const buildEscritosListJsonLd = (escritos) => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: escritos.map((escrito, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    url: `${SITE.url}/escritos/${escrito.slug}/`,
    name: escrito.title,
  })),
});
