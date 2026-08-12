import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import Card from '../components/common/Card';
import { escritos } from '../content/escritos/index.js';
import { SITE } from '../content/site.js';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import styles from './EscritosList.module.css';

const EscritosList = () => {
  const { t, language } = useLanguage();

  useDocumentMeta(SITE.escritosListTitle[language], SITE.escritosListDescription[language]);

  return (
    <section>
      <div className="container">
        <p className={styles.eyebrow}>{t('escritosPage.eyebrow')}</p>
        <h1 className={styles.title}>{t('escritosPage.title')}</h1>
        <p className={styles.lede}>{t('escritosPage.lede')}</p>

        {language === 'en' && (
          <p className={styles.spanishNotice}>{t('escritosPage.spanishNotice')}</p>
        )}

        <div className={styles.grid}>
          {escritos.map((escrito) => (
            <Link key={escrito.slug} to={`/escritos/${escrito.slug}`} className={styles.cardLink}>
              <Card hover className={styles.cardInner}>
                <h3 className={styles.cardTitle}>{escrito.title}</h3>
                <p className={styles.cardSummary}>{escrito.summary}</p>
                {escrito.tags.length > 0 && (
                  <div className={styles.tags}>
                    {escrito.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>{tag}</span>
                    ))}
                  </div>
                )}
                <span className={styles.readMore}>{t('escritosPage.readMore')} →</span>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EscritosList;
