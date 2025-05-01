
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
    <header className={`fixed top-0 left-0 right-0 py-6 px-6 lg:px-12 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/90 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="font-bold text-3xl text-primary">Marketing Frog</div>
        <nav className="hidden lg:block flex-1">
          <ul className="flex justify-center space-x-32 text-lg font-medium">
            <li><a href="#services" className="text-primary hover:text-primary/80 transition-colors">Services</a></li>
            <li><a href="#stories" className="text-primary hover:text-primary/80 transition-colors">Success Stories</a></li>
            <li><a href="#contact" className="text-primary hover:text-primary/80 transition-colors">Contact</a></li>
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme} 
            className="rounded-full text-primary"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
