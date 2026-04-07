import { useState, useEffect } from 'react';
import { Sun, Moon, Send, Instagram, Facebook, X, Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavBarProps {
  activePage: string;
  setActivePage: (page: string) => void;
  theme: string;
  toggleTheme: () => void;
}

export const NavBar = ({ activePage, setActivePage, theme, toggleTheme }: NavBarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'About', 'Products', 'Contact'];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActivePage('Home')}>
           <img src="/images/logo.png" alt="Sida Logo"  className="w-32 h-32" />
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => setActivePage(item)}
              className={`text-sm font-medium transition-colors hover:text-primary ${activePage === item ? 'text-primary' : 'text-text/80'}`}
            >
              {item}
            </button>
          ))}

          <button
            onClick={toggleTheme}
            className="w-10 h-10 glass rounded-xs flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <div className="flex items-center gap-3 ml-4 border-l border-border pl-6">
            <Send size={16} className="text-text/60 hover:text-text cursor-pointer" />
            <Instagram size={16} className="text-text/60 hover:text-text cursor-pointer" />
            <Facebook size={16} className="text-text/60 hover:text-text cursor-pointer" />
          </div>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleTheme}
            className="w-10 h-10 glass rounded-xs flex items-center justify-center"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="text-text" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full glass p-6 flex flex-col gap-4"
          >
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  setActivePage(item);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-left text-lg font-medium ${activePage === item ? 'text-primary' : 'text-text'}`}
              >
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
