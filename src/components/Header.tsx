
import React from 'react';
import MobileNav from './MobileNav';
import { Button } from './ui/button';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="py-6 px-6 lg:px-12">
      <div className="flex justify-between items-center">
        <div className="text-primary font-bold text-3xl">Marketing Frog</div>
        <nav className="hidden lg:block">
          <ul className="flex space-x-8 text-lg">
            <li><a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a></li>
            <li><a href="#stories" className="text-foreground hover:text-primary transition-colors">Success Stories</a></li>
            <li><a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme} 
            className="rounded-full"
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
