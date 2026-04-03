import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// Layout Components
import { NavBar } from './components/layout/nav-bar';
import { Footer } from './components/layout/footer';

// Pages
import { HomePage } from './pages/home-page';
import { AboutPage } from './pages/about-page';
import { ProductsPage } from './pages/products-page';
import { ContactPage } from './pages/contact-page';

export default function App() {
  const [activePage, setActivePage] = useState('Home');
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar 
        activePage={activePage} 
        setActivePage={setActivePage} 
        theme={theme} 
        toggleTheme={toggleTheme} 
      />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.3 }}
          >
            {activePage === 'Home' && <HomePage setActivePage={setActivePage} />}
            {activePage === 'About' && <AboutPage />}
            {activePage === 'Products' && <ProductsPage />}
            {activePage === 'Contact' && <ContactPage />}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer setActivePage={setActivePage} />
    </div>
  );
}
