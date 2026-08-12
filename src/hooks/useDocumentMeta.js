import { useEffect } from 'react';

/**
 * Sets document.title and the meta description content for the
 * lifetime of the calling page — needed because LanguageContext only
 * updates these on a *language* change, not on route/page changes
 * that keep the same language (Home -> Escritos, same idioma).
 */
export const useDocumentMeta = (title, description) => {
  useEffect(() => {
    if (title) document.title = title;

    if (description) {
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute('content', description);
    }
  }, [title, description]);
};
