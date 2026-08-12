import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { getEscritoBySlug } from '../content/escritos/index.js';
import { SITE } from '../content/site.js';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import styles from './EscritoDetalle.module.css';

const EscritoDetalle = () => {
  const { slug } = useParams();
  const { t } = useLanguage();
  const escrito = getEscritoBySlug(slug);

  useDocumentMeta(
    escrito ? `${escrito.title} — ${SITE.name}` : undefined,
    escrito ? escrito.summary : undefined,
  );

  if (!escrito) {
    return (
      <section>
        <div className="container">
          <div className={styles.shell}>
            <Link to="/escritos" className={styles.backLink}>
              {t('escritosPage.backToList')}
            </Link>
            <h1 className={styles.title}>{t('escritosPage.notFound')}</h1>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className="container">
        <div className={styles.shell}>
          <Link to="/escritos" className={styles.backLink}>
            {t('escritosPage.backToList')}
          </Link>
          <h1 className={styles.title}>{escrito.title}</h1>
          <div className={styles.body} dangerouslySetInnerHTML={{ __html: escrito.html }} />
          <div className={styles.end}>
            <Link to="/escritos" className={styles.backLink}>
              {t('escritosPage.backToListLong')}
            </Link>
            <Link to="/#contact" className={styles.cta}>
              {t('hero.ctaSecondary')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EscritoDetalle;
