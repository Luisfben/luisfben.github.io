import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import SectionTitle from '../common/SectionTitle';
import Card from '../common/Card';
import styles from './Portfolio.module.css';

/**
 * Portfolio Section - Featured projects showcase with category tabs
 */
const Portfolio = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('all');

  const projects = [
    {
      key: 'lowcode',
      category: 'education',
      tech: ['Low-Code', 'Research', 'Architecture', 'PUJ'],
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      link: 'https://luisfernandobenavidesrengifo.blogspot.com/2020/01/estudio-de-factibilidad-para-la.html',
      featured: true
    },
    {
      key: 'freedcamp',
      category: 'fintech',
      tech: ['Spring Boot', 'Java', 'REST API', 'Freedcamp'],
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      link: 'https://luisfernandobenavidesrengifo.blogspot.com/2020/01/implementacion-proyecto-web-con.html',
      featured: true
    },
    {
      key: 'apirest',
      category: 'fintech',
      tech: ['Spring Boot', 'Java', 'REST API', 'Backend'],
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      link: 'https://luisfernandobenavidesrengifo.blogspot.com/2019/12/implementacion-proyecto-api-rest-con.html',
      featured: true
    },
    {
      key: 'bootstrap',
      category: 'fintech',
      tech: ['Spring Boot', 'Bootstrap', 'Java', 'Web'],
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      link: 'https://luisfernandobenavidesrengifo.blogspot.com/2019/11/implementacion-proyecto-web-con.html',
      featured: false
    },
    {
      key: 'lambda',
      category: 'cloud',
      tech: ['AWS Lambda', 'Serverless', 'REST API', 'Cloud'],
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      link: 'https://luisfernandobenavidesrengifo.blogspot.com/2019/11/implementacion-de-servicios-api-rest.html',
      featured: true
    },
    {
      key: 'sms',
      category: 'health',
      tech: ['SMS', 'Java', 'Healthcare', 'EPS'],
      gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
      link: 'https://luisfernandobenavidesrengifo.blogspot.com/2019/08/implementacion-de-envio-de-mensajes-sms.html',
      featured: false
    },
    {
      key: 'ci',
      category: 'cloud',
      tech: ['CI/CD', 'Testing', 'DevOps', 'Jenkins'],
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      link: 'https://luisfernandobenavidesrengifo.blogspot.com/2019/01/implementacion-de-integracion-continua.html',
      featured: true
    },
    {
      key: 'patrones',
      category: 'cloud',
      tech: ['Design Patterns', 'Architecture', 'Java', 'OOP'],
      gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
      link: 'https://luisfernandobenavidesrengifo.blogspot.com/2019/01/implementacion-de-patrones-de-diseno-un.html',
      featured: false
    },
    {
      key: 'bolsa',
      category: 'education',
      tech: ['PeopleSoft', 'Integration', 'Java', 'Education'],
      gradient: 'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)',
      link: 'https://luisfernandobenavidesrengifo.blogspot.com/2019/01/proyecto-que-integra-la-bolsa-de-empleo.html',
      featured: false
    },
    {
      key: 'salesforce',
      category: 'education',
      tech: ['Salesforce', 'CRM', 'PeopleSoft', 'Integration'],
      gradient: 'linear-gradient(135deg, #fdcbf1 0%, #e6dee9 100%)',
      link: 'https://luisfernandobenavidesrengifo.blogspot.com/2019/01/proyecto-que-integra-crm-sales-force.html',
      featured: true
    },
    {
      key: 'mega',
      category: 'health',
      tech: ['Healthcare', 'EPS', 'Java', 'Enterprise'],
      gradient: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
      link: 'https://luisfernandobenavidesrengifo.blogspot.com/2019/01/mejoramiento-en-la-gestion-de-las.html',
      featured: true
    },
    {
      key: 'fosyga',
      category: 'health',
      tech: ['Healthcare', 'Legal', 'Java', 'Compliance'],
      gradient: 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
      link: 'https://luisfernandobenavidesrengifo.blogspot.com/2019/01/desarrollo-e-implementacion-de-software.html',
      featured: false
    },
    {
      key: 'arco',
      category: 'others',
      tech: ['Manufacturing', 'Java', 'FoxPro', 'Industrial'],
      gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
      link: 'https://luisfernandobenavidesrengifo.blogspot.com/2019/01/diseno-desarrollo-e-implementacion-de.html',
      featured: false
    },
    {
      key: 'tarjeta',
      category: 'others',
      tech: ['Finance', 'Java', 'FoxPro', 'Commercial'],
      gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)',
      link: 'https://luisfernandobenavidesrengifo.blogspot.com/2019/01/diseno-desarrollo-y-implementacion-de.html',
      featured: false
    },
    {
      key: 'softcontrol',
      category: 'others',
      tech: ['Government', 'Java', 'FoxPro', 'Public Sector'],
      gradient: 'linear-gradient(135deg, #ffeaa7 0%, #fdcb6e 100%)',
      link: 'https://luisfernandobenavidesrengifo.blogspot.com/2019/01/diseno-y-desarrollo-de-un-aplicativo.html',
      featured: false
    },
    {
      key: 'inventarios',
      category: 'others',
      tech: ['Inventory', 'Java', 'FoxPro', 'Commercial'],
      gradient: 'linear-gradient(135deg, #81c784 0%, #aed581 100%)',
      link: 'https://luisfernandobenavidesrengifo.blogspot.com/2019/01/diseno-y-desarrollo-de-software-para-el.html',
      featured: false
    },
  ];

  const tabs = [
    { key: 'all', label: t('portfolio.tabs.all') },
    { key: 'fintech', label: t('portfolio.tabs.fintech') },
    { key: 'cloud', label: t('portfolio.tabs.cloud') },
    { key: 'education', label: t('portfolio.tabs.education') },
    { key: 'health', label: t('portfolio.tabs.health') },
    { key: 'others', label: t('portfolio.tabs.others') },
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects.filter(p => p.featured)
    : projects.filter(p => p.category === activeTab);

  // Category-specific icons
  const getCategoryIcon = (category) => {
    const icons = {
      fintech: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6"/>
          <polyline points="8 6 2 12 8 18"/>
        </svg>
      ),
      cloud: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
        </svg>
      ),
      education: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
          <path d="M6 12v5c3 3 9 3 12 0v-5"/>
        </svg>
      ),
      health: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
        </svg>
      ),
      others: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
        </svg>
      )
    };
    return icons[category] || icons.others;
  };

  return (
    <section className={styles.portfolio} id="portfolio">
      <div className="container">
        <SectionTitle 
          subtitle={t('portfolio.subtitle')}
          title={t('portfolio.title')}
        />

        {/* Tabs */}
        <div className={styles.tabs}>
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={`${styles.tab} ${activeTab === tab.key ? styles.tabActive : ''}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className={styles.projectsGrid}>
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.key} 
              hover 
              className={styles.projectCard}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div 
                className={styles.projectHeader}
                style={{ background: project.gradient }}
              >
                <div className={styles.projectIcon}>
                  {getCategoryIcon(project.category)}
                </div>
              </div>

              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>
                  {t(`portfolio.projects.${project.key}.title`)}
                </h3>
                
                <p className={styles.projectDescription}>
                  {t(`portfolio.projects.${project.key}.description`)}
                </p>

                <div className={styles.projectMeta}>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>{t('portfolio.techStack')}:</span>
                    <div className={styles.techStack}>
                      {project.tech.map((tech) => (
                        <span key={tech} className={styles.techBadge}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className={styles.projectRole}>
                    <strong>{t(`portfolio.projects.${project.key}.role`)}</strong>
                  </div>

                  <div className={styles.projectImpact}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                    </svg>
                    <span>{t(`portfolio.projects.${project.key}.impact`)}</span>
                  </div>
                </div>

                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  {t('portfolio.viewProject')}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
