import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

/**
 * LanguageProvider - Manages i18n state and translations
 * Dynamically imports translation files based on selected language
 */
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es');
  const [translations, setTranslations] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // Load translations when language changes
  useEffect(() => {
    setIsLoading(true);
    import(`../locales/${language}.json`)
      .then((module) => {
        setTranslations(module.default);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(`Error loading translations for ${language}:`, error);
        setIsLoading(false);
      });
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

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'es' ? 'en' : 'es'));
  };

  const value = {
    language,
    setLanguage,
    toggleLanguage,
    t,
    isLoading,
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
