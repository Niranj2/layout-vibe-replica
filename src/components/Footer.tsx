
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-12 px-6 lg:px-12 bg-secondary relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Marketing Frog</h3>
            <p className="text-muted-foreground">Creating websites that help your business leap ahead of competition.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Contact</h3>
            <address className="not-italic text-muted-foreground">
              <p>hello@marketingfrog.com</p>
              <p>+1 (555) 123-4567</p>
            </address>
          </div>
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-foreground hover:text-primary transition-colors hover-float w-10 h-10 flex items-center justify-center rounded-full bg-secondary-foreground/10"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="text-foreground hover:text-primary transition-colors hover-float w-10 h-10 flex items-center justify-center rounded-full bg-secondary-foreground/10"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                className="text-foreground hover:text-primary transition-colors hover-float w-10 h-10 flex items-center justify-center rounded-full bg-secondary-foreground/10"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="text-foreground hover:text-primary transition-colors hover-float w-10 h-10 flex items-center justify-center rounded-full bg-secondary-foreground/10"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-muted mt-12 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Marketing Frog. All rights reserved.</p>
        </div>
      </div>
      
      {/* Subtle ambient elements */}
      <div className="absolute bottom-0 left-0 w-16 h-16 rounded-full bg-primary/5 animate-pulse"></div>
      <div className="absolute top-20 right-10 w-24 h-24 rounded-full bg-primary/5 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 right-1/4 w-12 h-12 rounded-full bg-primary/5 animate-pulse" style={{ animationDelay: '2s' }}></div>
    </footer>
  );
};

export default Footer;
