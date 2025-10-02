import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for Intersection Observer API
 * Useful for scroll animations and lazy loading
 * 
 * @param {Object} options - Intersection Observer options
 * @returns {Array} [ref, isIntersecting] - Ref to attach and intersection state
 */
export const useIntersectionObserver = (options = {}) => {
  const ref = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, {
      threshold: 0.1,
      ...options,
    });

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options]);

  return [ref, isIntersecting];
};

export default useIntersectionObserver;
