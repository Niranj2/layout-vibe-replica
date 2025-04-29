
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <Button 
        variant="ghost" 
        className="p-0 text-foreground" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </Button>
      
      {isOpen && (
        <div className="fixed inset-0 bg-background z-50 p-6 animate-fade-in">
          <div className="flex justify-end">
            <Button 
              variant="ghost" 
              className="p-0 text-foreground" 
              onClick={() => setIsOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </Button>
          </div>
          
          <nav className="mt-12">
            <ul className="space-y-8 text-center text-lg">
              <li>
                <a 
                  href="#services" 
                  className="text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#stories" 
                  className="text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Success Stories
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-foreground hover:text-primary transition-colors"
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
