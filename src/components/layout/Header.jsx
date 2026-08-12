import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import ThemeToggle from '../common/ThemeToggle';
import LanguageToggle from '../common/LanguageToggle';
import styles from './Header.module.css';

/**
 * Header Component - Navigation bar with scroll effect
 */
const Header = () => {
  const { t, language } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const homePath = language === 'en' ? '/en' : '/';
  const escritosPath = language === 'en' ? '/en/escritos' : '/escritos';
  const isOnEscritos = location.pathname.replace(/^\/en/, '').startsWith('/escritos');

  // Navigates to the section's anchor on Home, from any page — Home's
  // own effect (src/pages/Home.jsx) does the actual scroll once mounted.
  const goToSection = (sectionId) => {
    navigate(`${homePath}#${sectionId}`);
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { key: 'about', id: 'about' },
    { key: 'services', id: 'services' },
    { key: 'portfolio', id: 'portfolio' },
    { key: 'contact', id: 'contact' },
  ];

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.headerContent}`}>
        {/* Logo */}
        <Link to={homePath} className={styles.logo}>
          <span className={styles.logoText}>LFBR</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.nav}>
          {navItems.map((item) => (
            <button
              key={item.key}
              className={styles.navLink}
              onClick={() => goToSection(item.id)}
            >
              {t(`nav.${item.key}`)}
            </button>
          ))}
          <Link
            to={escritosPath}
            className={`${styles.navLink} ${isOnEscritos ? styles.navLinkActive : ''}`}
          >
            {t('nav.escritos')}
          </Link>
        </nav>

        {/* Controls */}
        <div className={styles.controls}>
          <ThemeToggle />
          <LanguageToggle />

          {/* Mobile Menu Button */}
          <button
            className={styles.mobileMenuButton}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          {navItems.map((item) => (
            <button
              key={item.key}
              className={styles.mobileNavLink}
              onClick={() => goToSection(item.id)}
            >
              {t(`nav.${item.key}`)}
            </button>
          ))}
          <Link
            to={escritosPath}
            className={styles.mobileNavLink}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t('nav.escritos')}
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
