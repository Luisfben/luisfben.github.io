import { SITE, urlForLanguage } from '../../content/site.js';

/**
 * Builds the Person JSON-LD object for a given language.
 * Used both for the client-side head update and, later, by the
 * static prerender script — same data, same shape, no duplication.
 */
export const buildPersonJsonLd = (language = 'es') => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: SITE.name,
  jobTitle: SITE.jobTitle[language] ?? SITE.jobTitle.es,
  description: SITE.description[language] ?? SITE.description.es,
  knowsAbout: SITE.knowsAbout,
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: SITE.alumniOf,
  },
  sameAs: SITE.sameAs,
  url: urlForLanguage(language),
});
