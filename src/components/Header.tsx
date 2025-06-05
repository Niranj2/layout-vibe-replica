
import React, { useEffect, useState } from 'react';
import MobileNav from './MobileNav';
import { Button } from './ui/button';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 py-6 px-6 lg:px-12 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'dark:bg-[#0B1410] bg-white shadow-md' 
          : 'dark:bg-[#0B1410] bg-white'
      }`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="font-bold text-3xl font-space-grotesk text-neon-lime">
          Marketing Frog
        </div>
        <div className="flex items-center">
          <nav className="hidden md:block">
            <ul className="flex space-x-8 lg:space-x-12 text-lg font-medium">
              <li>
                <a 
                  href="#services" 
                  className="text-primary hover:text-neon-lime transition-colors relative after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:h-[2px] after:w-0 after:bg-neon-lime hover:after:w-full after:transition-all"
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#stories" 
                  className="text-primary hover:text-neon-lime transition-colors relative after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:h-[2px] after:w-0 after:bg-neon-lime hover:after:w-full after:transition-all"
                >
                  Success Stories
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-primary hover:text-neon-lime transition-colors relative after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:h-[2px] after:w-0 after:bg-neon-lime hover:after:w-full after:transition-all"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-4 ml-6">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme} 
              className="rounded-full text-primary hover:bg-accent/10"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
