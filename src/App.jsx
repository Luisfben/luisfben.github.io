import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import TechStack from './components/sections/TechStack';
import Services from './components/sections/Services';
import Portfolio from './components/sections/Portfolio';
import Contact from './components/sections/Contact';
import './styles/global.css';

/**
 * Main App Component
 * Wraps the application with Theme and Language providers
 */
function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Layout>
          <Hero />
          <About />
          <TechStack />
          <Services />
          <Portfolio />
          <Contact />
        </Layout>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
