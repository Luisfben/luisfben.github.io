import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/en" element={<Home />} />
            <Route path="/en/*" element={<Home />} />
          </Routes>
        </Layout>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
