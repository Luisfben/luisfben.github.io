import { useLanguage } from '../../contexts/LanguageContext';
import SectionTitle from '../common/SectionTitle';
import Card from '../common/Card';
import styles from './About.module.css';

/**
 * About Section - Professional background and expertise
 */
const About = () => {
  const { t } = useLanguage();

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

  const expertiseItems = [
    t('about.expertise.item1'),
    t('about.expertise.item2'),
    t('about.expertise.item3'),
    t('about.expertise.item4'),
    t('about.expertise.item5'),
    t('about.expertise.item6'),
  ];

  return (
    <section className={styles.about} id="about">
      <div className="container">
        <SectionTitle 
          subtitle={t('about.subtitle')}
          title={t('about.title')}
        />

        <div className={styles.content}>
          {/* Introduction */}
          <div className={styles.intro}>
            <p className={styles.introText}>{t('about.intro')}</p>
          </div>

          {/* Education & Experience Cards */}
          <div className={styles.cards}>
            <Card className={styles.card}>
              <div className={styles.cardIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
              </div>
              <h3 className={styles.cardTitle}>{t('about.education.title')}</h3>
              <p className={styles.cardText}>{t('about.education.degree')}</p>
              <p className={styles.cardSubtext}>{t('about.education.institution')}</p>
            </Card>

            <Card className={styles.card}>
              <div className={styles.cardIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                </svg>
              </div>
              <h3 className={styles.cardTitle}>{t('about.experience.title')}</h3>
              <p className={styles.cardText}>
                <span className={styles.highlight}>{t('about.experience.years')}</span> {t('about.experience.yearsLabel')}
              </p>
              <p className={styles.cardSubtext}>
                {projectsCount} {t('about.experience.projectsLabel')} • {sectorsCount} {t('about.experience.sectorsLabel')}
              </p>
            </Card>
          </div>

          {/* Expertise Grid */}
          <div className={styles.expertise}>
            <h3 className={styles.expertiseTitle}>{t('about.expertise.title')}</h3>
            <div className={styles.expertiseGrid}>
              {expertiseItems.map((item, index) => (
                <div key={index} className={styles.expertiseItem}>
                  <div className={styles.expertiseIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
