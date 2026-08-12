import { useLanguage } from '../../contexts/LanguageContext';
import SectionTitle from '../common/SectionTitle';
import Card from '../common/Card';
import styles from './Services.module.css';

/**
 * Services Section - Main service offerings
 */
const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      key: 'aiAdoption',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
        </svg>
      ),
      color: 'var(--primary)',
    },
    {
      key: 'development',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6"/>
          <polyline points="8 6 2 12 8 18"/>
        </svg>
      ),
      color: 'var(--primary-2)',
    },
    {
      key: 'leadership',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      color: 'var(--accent)',
    },
  ];

  // Get features for a service
  const getFeatures = (serviceKey) => {
    const serviceData = t(`services.${serviceKey}`);
    return serviceData?.features || [];
  };

  return (
    <section className={styles.services} id="services">
      <div className="container">
        <SectionTitle 
          subtitle={t('services.subtitle')}
          title={t('services.title')}
        />

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <Card 
              key={service.key} 
              hover 
              className={styles.serviceCard}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div 
                className={styles.serviceIcon}
                style={{ background: service.color }}
              >
                {service.icon}
              </div>
              
              <h3 className={styles.serviceTitle}>
                {t(`services.${service.key}.title`)}
              </h3>
              
              <p className={styles.serviceDescription}>
                {t(`services.${service.key}.description`)}
              </p>
              
              <ul className={styles.featureList}>
                {getFeatures(service.key).map((feature, idx) => (
                  <li key={idx} className={styles.featureItem}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
