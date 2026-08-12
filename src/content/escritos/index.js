import { marked } from 'marked';
import { parseFrontmatter } from './parseFrontmatter.js';

// Discovered at build time. Order = filename order (the numeric prefix
// controls display order — most compelling piece first, not chronological,
// per R2: no dates ever shown in the listing itself).
const files = import.meta.glob('./*.md', { query: '?raw', import: 'default', eager: true });

export const escritos = Object.keys(files)
  .sort()
  .map((path) => {
    const { data, body } = parseFrontmatter(files[path]);
    return {
      slug: data.slug,
      title: data.title,
      summary: data.summary,
      date: data.date,
      keywords: data.keywords ?? [],
      tags: data.tags ?? [],
      type: data.type ?? 'escrito',
      html: marked.parse(body),
    };
  });

export const getEscritoBySlug = (slug) => escritos.find((escrito) => escrito.slug === slug);
