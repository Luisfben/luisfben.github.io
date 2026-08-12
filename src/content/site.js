/**
 * Canonical site data — single source of truth for SEO metadata
 * (title tags, meta description, Open Graph, JSON-LD). Component
 * copy lives in src/locales/*.json; this file exists so the
 * generated <head> tags can never drift from what's actually shown.
 */
export const SITE = {
  url: 'https://luisfben.github.io',
  name: 'Luis Fernando Benavides Rengifo',

  title: {
    es: 'Luis Fernando Benavides Rengifo — Ingeniero de Software, adopción de IA en equipos',
    en: 'Luis Fernando Benavides Rengifo — Software Engineer, AI adoption in engineering teams',
  },

  jobTitle: {
    es: 'Ingeniero de Software Senior',
    en: 'Senior Software Engineer',
  },

  description: {
    es: 'Ingeniero de Sistemas y Máster en Ingeniería de Software con 23 años de experiencia. Especializado en backend con Java, Kotlin y Node.js. Lidero la adopción de desarrollo asistido por IA en equipos de ingeniería.',
    en: "Systems Engineer with a Master's in Software Engineering and 23 years of experience. Specialized in backend development with Java, Kotlin, and Node.js. I lead the adoption of AI-assisted development in engineering teams.",
  },

  escritosListTitle: {
    es: 'Escritos — Luis Fernando Benavides Rengifo',
    en: 'Writing (in Spanish) — Luis Fernando Benavides Rengifo',
  },

  escritosListDescription: {
    es: 'Casos reales de cómo aplico IA en el trabajo — criterio técnico, resultados, y lo que no funcionó a la primera.',
    en: 'Real cases of how I apply AI at work — technical judgment and results. Written in Spanish.',
  },

  ogImage: '/og-image.jpg',
  ogImageAlt: {
    es: 'Luis Fernando Benavides Rengifo — Ingeniero de Software Senior, 23 años de experiencia, adopción de IA en equipos de ingeniería',
    en: 'Luis Fernando Benavides Rengifo — Senior Software Engineer, 23 years of experience, AI adoption in engineering teams',
  },

  alumniOf: 'Pontificia Universidad Javeriana Cali',

  sameAs: [
    'https://www.linkedin.com/in/luis-fernando-benavides-rengifo',
    'https://github.com/Luisfben',
  ],

  knowsAbout: [
    'Java',
    'Kotlin',
    'Node.js',
    'Spring Boot',
    'Microservicios',
    'AWS',
    'Kafka',
    'Docker',
    'Claude Code',
    'Desarrollo asistido por IA',
  ],
};

export const urlForLanguage = (language) =>
  language === 'en' ? `${SITE.url}/en/` : `${SITE.url}/`;
