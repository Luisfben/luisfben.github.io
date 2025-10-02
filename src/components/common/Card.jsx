import styles from './Card.module.css';

/**
 * Card Component - Reusable card container
 * @param {ReactNode} children - Card content
 * @param {string} className - Additional CSS classes
 * @param {boolean} glass - Apply glassmorphism effect
 * @param {boolean} hover - Enable hover effect
 */
const Card = ({ 
  children, 
  className = '', 
  glass = false,
  hover = false,
  ...props 
}) => {
  const cardClass = `
    ${styles.card} 
    ${glass ? styles.glass : ''} 
    ${hover ? styles.hover : ''} 
    ${className}
  `.trim();

  return (
    <div className={cardClass} {...props}>
      {children}
    </div>
  );
};

export default Card;
