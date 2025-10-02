import styles from './SectionTitle.module.css';

/**
 * SectionTitle Component - Consistent section headers
 * @param {string} title - Main title
 * @param {string} subtitle - Optional subtitle
 * @param {string} align - 'left' | 'center' | 'right'
 */
const SectionTitle = ({ title, subtitle, align = 'center' }) => {
  return (
    <div className={`${styles.sectionTitle} ${styles[align]}`}>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.divider}></div>
    </div>
  );
};

export default SectionTitle;
