import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * React Router doesn't reset scroll position on navigation (unlike a
 * full page load). Without this, navigating from a scrolled-down spot
 * on one page lands at the same pixel offset on the next page.
 *
 * Skips the reset when the URL has a hash — Home's own effect
 * (src/pages/Home.jsx) handles scrolling to that anchor instead.
 */
const ScrollRestoration = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) return;
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};

export default ScrollRestoration;
