
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ArrowRight } from 'lucide-react';

const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <Button 
        variant="ghost" 
        className="p-0 text-primary" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu className="h-7 w-7" />
      </Button>
      
      {isOpen && (
        <div className="fixed inset-0 bg-background/95 backdrop-blur-md z-50 p-6 animate-fade-in">
          <div className="flex justify-end mb-8">
            <Button 
              variant="ghost" 
              className="p-0 text-foreground" 
              onClick={() => setIsOpen(false)}
            >
              <X className="h-7 w-7" />
            </Button>
          </div>
          
          <nav className="mt-16">
            <ul className="space-y-10">
              <li className="overflow-hidden">
                <a 
                  href="#services" 
                  className="text-4xl font-space-grotesk font-bold text-primary hover:text-neon-lime transition-colors flex items-center justify-between animate-slide-left"
                  style={{animationDelay: '0.1s'}}
                  onClick={() => setIsOpen(false)}
                >
                  <span>Services</span>
                  <ArrowRight className="h-6 w-6 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </li>
              <li className="overflow-hidden">
                <a 
                  href="#stories" 
                  className="text-4xl font-space-grotesk font-bold text-primary hover:text-neon-lime transition-colors flex items-center justify-between animate-slide-left"
                  style={{animationDelay: '0.2s'}}
                  onClick={() => setIsOpen(false)}
                >
                  <span>Success Stories</span>
                  <ArrowRight className="h-6 w-6 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </li>
              <li className="overflow-hidden">
                <a 
                  href="#contact" 
                  className="text-4xl font-space-grotesk font-bold text-primary hover:text-neon-lime transition-colors flex items-center justify-between animate-slide-left"
                  style={{animationDelay: '0.3s'}}
                  onClick={() => setIsOpen(false)}
                >
                  <span>Contact</span>
                  <ArrowRight className="h-6 w-6 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </li>
            </ul>
          </nav>
          
          <div className="absolute bottom-12 left-6 right-6">
            <p className="text-muted-foreground animate-fade-in" style={{animationDelay: '0.5s'}}>
              &copy; {new Date().getFullYear()} Marketing Frog
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
