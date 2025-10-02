import { useLanguage } from '../../contexts/LanguageContext';
import styles from './LanguageToggle.module.css';

/**
 * LanguageToggle Component - Switch between ES/EN
 */
const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button 
      className={styles.toggle} 
      onClick={toggleLanguage}
      aria-label="Toggle language"
      title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
    >
      <span className={`${styles.lang} ${language === 'es' ? styles.active : ''}`}>
        ES
      </span>
      <span className={styles.separator}>/</span>
      <span className={`${styles.lang} ${language === 'en' ? styles.active : ''}`}>
        EN
      </span>
    </button>
  );
};

export default LanguageToggle;
