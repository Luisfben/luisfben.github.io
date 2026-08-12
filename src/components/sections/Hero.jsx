import { useLanguage } from '../../contexts/LanguageContext';
import Button from '../common/Button';
import Card from '../common/Card';
import styles from './Hero.module.css';

/**
 * Hero Section - Landing section with main CTA
 */
const Hero = () => {
  const { t, language } = useLanguage();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.hero} id="hero">
      <div className="container">
        <div className={styles.heroContent}>
          {/* Main Content */}
          <div className={styles.textContent}>
            <p className={styles.greeting}>{t('hero.greeting')}</p>
            <h1 className={styles.title}>
              <span className="text-gradient">{t('hero.title')}</span>
              <br />
              <span className={styles.titleHighlight}>{t('hero.titleHighlight')}</span>
            </h1>
            <p className={styles.subtitle}>{t('hero.subtitle')}</p>
            
            <div className={styles.cta}>
              <Button variant="primary" size="lg" onClick={scrollToPortfolio}>
                {t('hero.cta')}
              </Button>
              <Button variant="outline" size="lg" onClick={scrollToContact}>
                {t('hero.ctaSecondary')}
              </Button>
            </div>
          </div>

          {/* Stats Card */}
          <Card glass className={styles.statsCard}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>{t('about.experience.years')}</span>
              <span className={styles.statLabel}>{t('about.experience.yearsLabel')}</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>{t('about.experience.sectorsCount')}</span>
              <span className={styles.statLabel}>{t('about.experience.sectorsLabel')}</span>
            </div>
          </Card>
        </div>

        {/* Scroll Indicator */}
        <div className={styles.scrollIndicator}>
          <div className={styles.mouse}>
            <div className={styles.wheel}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
