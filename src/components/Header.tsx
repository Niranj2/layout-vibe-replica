
import React from 'react';
import MobileNav from './MobileNav';

const Header: React.FC = () => {
  return (
    <header className="py-4 px-6 lg:px-12">
      <div className="flex justify-between items-center">
        <div className="text-primary font-bold text-2xl">LeapFrog</div>
        <nav className="hidden lg:block">
          <ul className="flex space-x-8">
            <li><a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a></li>
            <li><a href="#stories" className="text-foreground hover:text-primary transition-colors">Success Stories</a></li>
            <li><a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </nav>
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
