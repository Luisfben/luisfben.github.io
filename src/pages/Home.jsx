import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import TechStack from '../components/sections/TechStack';
import Services from '../components/sections/Services';
import Portfolio from '../components/sections/Portfolio';
import Contact from '../components/sections/Contact';

const Home = () => {
  const location = useLocation();

  // Client-side navigation (unlike a full page load) doesn't scroll to
  // the URL hash on its own — needed for links coming from other pages,
  // e.g. the "Contactar" CTA on an escrito pointing to `/#contact`.
  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.slice(1);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  }, [location.hash]);

  return (
    <>
      <Hero />
      <About />
      <TechStack />
      <Services />
      <Portfolio />
      <Contact />
    </>
  );
};

export default Home;
