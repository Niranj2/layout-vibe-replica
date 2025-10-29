
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ArrowRight } from 'lucide-react';

const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Get the target section and scroll to it
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        // Close the menu first
        setIsOpen(false);
        
        // Wait for the menu to close, then scroll
        setTimeout(() => {
          targetElement.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }, 150);
      }
    } else {
      // If no valid target, just close the menu
      setIsOpen(false);
    }
  };

  return (
    <div className="lg:hidden">
      <Button 
        variant="ghost" 
        className="p-0 text-primary" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle mobile menu"
      >
        <Menu className="h-7 w-7" />
      </Button>
      
      {isOpen && (
        <div className="fixed inset-0 bg-background/95 backdrop-blur-md z-50 p-6">
          <div className="flex justify-end mb-8">
            <Button 
              variant="ghost" 
              className="p-0 text-foreground" 
              onClick={() => setIsOpen(false)}
              aria-label="Close mobile menu"
            >
              <X className="h-7 w-7" />
            </Button>
          </div>
          
          <nav className="mt-16">
            <ul className="space-y-8">
              <li>
                <a 
                  href="#services" 
                  className="text-4xl font-space-grotesk font-bold text-primary hover:text-neon-lime transition-colors flex items-center justify-between group"
                  onClick={handleLinkClick}
                >
                  <span>Services</span>
                  <ArrowRight className="h-6 w-6 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </li>
              <li>
                <a 
                  href="#stories" 
                  className="text-4xl font-space-grotesk font-bold text-primary hover:text-neon-lime transition-colors flex items-center justify-between group"
                  onClick={handleLinkClick}
                >
                  <span>Success Stories</span>
                  <ArrowRight className="h-6 w-6 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-4xl font-space-grotesk font-bold text-primary hover:text-neon-lime transition-colors flex items-center justify-between group"
                  onClick={handleLinkClick}
                >
                  <span>Contact</span>
                  <ArrowRight className="h-6 w-6 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </li>
            </ul>
          </nav>
          
          <div className="absolute bottom-12 left-6 right-6">
            <p className="text-muted-foreground">
              &copy; {new Date().getFullYear()} Marketing Frog
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
