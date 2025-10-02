import { useLanguage } from '../../contexts/LanguageContext';
import Button from '../common/Button';
import Card from '../common/Card';
import styles from './Hero.module.css';

/**
 * Hero Section - Landing section with main CTA
 */
const Hero = () => {
  const { t, language } = useLanguage();

  // Calculate number of projects dynamically from translations
  const projectsCount = Object.keys(t('portfolio.projects')).length;

  // Calculate unique sectors from projects
  const calculateSectors = () => {
    try {
      const projects = t('portfolio.projects');
      if (!projects || typeof projects !== 'object') return 6;
      
      const sectors = new Set();
      
      Object.values(projects).forEach(project => {
        if (!project || !project.impact) return;
        const impact = project.impact.toLowerCase();
        
        if (impact.includes('salud') || impact.includes('health') || impact.includes('eps')) {
          sectors.add('health');
        }
        if (impact.includes('educación') || impact.includes('education') || impact.includes('puj')) {
          sectors.add('education');
        }
        if (impact.includes('industrial') || impact.includes('manufactur')) {
          sectors.add('industrial');
        }
        if (impact.includes('comercial') || impact.includes('commercial') || impact.includes('finance')) {
          sectors.add('commercial');
        }
        if (impact.includes('público') || impact.includes('public') || impact.includes('government')) {
          sectors.add('public');
        }
        if (impact.includes('cloud') || impact.includes('aws') || impact.includes('devops') || impact.includes('ci/cd')) {
          sectors.add('technology');
        }
      });
      
      return sectors.size || 6;
    } catch (error) {
      console.error('Error calculating sectors:', error);
      return 6; // Fallback value
    }
  };

  const sectorsCount = calculateSectors();

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
              <span className={styles.statNumber}>{projectsCount}</span>
              <span className={styles.statLabel}>{t('about.experience.projectsLabel')}</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>{sectorsCount}</span>
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
