import { useLanguage } from '../../contexts/LanguageContext';
import SectionTitle from '../common/SectionTitle';
import Card from '../common/Card';
import styles from './TechStack.module.css';

/**
 * TechStack Section - Technologies and tools showcase
 */
const TechStack = () => {
  const { t } = useLanguage();

  const techCategories = [
    {
      key: 'backend',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6"/>
          <polyline points="8 6 2 12 8 18"/>
        </svg>
      ),
      color: 'var(--primary)',
      technologies: ['Java', 'Kotlin', 'Spring Boot', 'Node.js', 'Python']
    },
    {
      key: 'cloud',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
        </svg>
      ),
      color: 'var(--primary-2)',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'GitLab', 'Azure DevOps']
    },
    {
      key: 'databases',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="5" rx="9" ry="3"/>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
        </svg>
      ),
      color: 'var(--accent)',
      technologies: ['PostgreSQL', 'MySQL', 'DynamoDB', 'Redis', 'Kafka']
    },
    {
      key: 'observability',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
      ),
      color: 'var(--primary)',
      technologies: ['Grafana', 'Splunk', 'New Relic', 'Kibana', 'SonarQube']
    }
  ];

  return (
    <section className={styles.techStack} id="techstack">
      <div className="container">
        <SectionTitle 
          subtitle={t('techStack.subtitle')}
          title={t('techStack.title')}
        />

        <div className={styles.categoriesGrid}>
          {techCategories.map((category, index) => (
            <Card 
              key={category.key}
              className={styles.categoryCard}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={styles.categoryHeader}>
                <div 
                  className={styles.categoryIcon}
                  style={{ color: category.color }}
                >
                  {category.icon}
                </div>
                <h3 className={styles.categoryTitle}>
                  {t(`techStack.categories.${category.key}.title`)}
                </h3>
              </div>

              <div className={styles.technologiesGrid}>
                {category.technologies.map((tech) => (
                  <div key={tech} className={styles.techBadge}>
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
