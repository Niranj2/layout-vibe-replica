
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <Button 
        variant="ghost" 
        className="p-0 text-primary" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle mobile menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </Button>
      
      {isOpen && (
        <div className="fixed inset-0 bg-background/95 backdrop-blur-md z-50 animate-fade-in">
          <div className="flex justify-end p-6">
            <Button 
              variant="ghost" 
              className="p-0 text-foreground" 
              onClick={() => setIsOpen(false)}
              aria-label="Close mobile menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </Button>
          </div>
          
          <nav className="mt-16 px-6">
            <ul className="space-y-10 text-center text-xl">
              <li>
                <a 
                  href="#services" 
                  className="text-primary hover:text-primary/80 transition-all duration-300 inline-block after:content-[''] after:block after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#stories" 
                  className="text-primary hover:text-primary/80 transition-all duration-300 inline-block after:content-[''] after:block after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
                  onClick={() => setIsOpen(false)}
                >
                  Success Stories
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-primary hover:text-primary/80 transition-all duration-300 inline-block after:content-[''] after:block after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
