import { createContext, useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import es from '../locales/es.json';
import en from '../locales/en.json';
import { SITE } from '../content/site';

const LanguageContext = createContext();

const translationsByLanguage = { es, en };

const languageFromPathname = (pathname) =>
  pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'es';

const pathForLanguage = (pathname, targetLanguage) => {
  const currentLanguage = languageFromPathname(pathname);
  if (currentLanguage === targetLanguage) return pathname;

  if (targetLanguage === 'en') {
    // Escritos pieces have no English version (R6) — send the toggle to
    // the English listing instead of a route that doesn't exist.
    if (/^\/escritos\/[^/]+/.test(pathname)) return '/en/escritos';
    return pathname === '/' ? '/en/' : `/en${pathname}`;
  }

  const stripped = pathname.replace(/^\/en/, '');
  return stripped === '' ? '/' : stripped;
};

/**
 * LanguageProvider - Manages i18n state and translations
 * The active language is derived from the URL (`/` = es, `/en/*` = en),
 * not from local component state, so it can be pre-rendered per route.
 */
export const LanguageProvider = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const language = languageFromPathname(location.pathname);
  const translations = translationsByLanguage[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = SITE.title[language] ?? SITE.title.es;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', SITE.description[language] ?? SITE.description.es);
    }
  }, [language]);

  /**
   * Translation function - navigates nested translation objects
   * @param {string} key - Dot-notation key (e.g., 'hero.title')
   * @returns {string} - Translated text or key if not found
   */
  const t = (key) => {
    const keys = key.split('.');
    let result = translations;

    for (const k of keys) {
      if (result && typeof result === 'object') {
        result = result[k];
      } else {
        return key; // Return key if translation not found
      }
    }

    return result || key;
  };

  const setLanguage = (targetLanguage) => {
    navigate(pathForLanguage(location.pathname, targetLanguage));
  };

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  const value = {
    language,
    setLanguage,
    toggleLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

/**
 * Custom hook to use language context
 */
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
