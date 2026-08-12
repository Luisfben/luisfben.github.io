import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Layout from './components/layout/Layout';
import ScrollRestoration from './components/ScrollRestoration';
import Home from './pages/Home';
import EscritosList from './pages/EscritosList';
import EscritoDetalle from './pages/EscritoDetalle';
import './styles/global.css';

/**
 * Main App Component
 * Wraps the application with Theme and Language providers
 *
 * Escritos pieces only exist in Spanish (no /en/escritos/:slug) — the
 * English listing links straight to the Spanish piece URLs (R6).
 */
function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <ScrollRestoration />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/en" element={<Home />} />
            <Route path="/escritos" element={<EscritosList />} />
            <Route path="/escritos/:slug" element={<EscritoDetalle />} />
            <Route path="/en/escritos" element={<EscritosList />} />
          </Routes>
        </Layout>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
