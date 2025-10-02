import Header from './Header';
import Footer from './Footer';

/**
 * Layout Component - Main layout wrapper
 */
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '80px' }}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
