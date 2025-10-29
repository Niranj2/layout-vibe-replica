
import React from 'react';
import { Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-20 px-6 lg:px-12 bg-neon-lime dark:bg-background/95 relative overflow-hidden border-t border-white/10">
      <div className="absolute inset-0 dark:ambient-bg"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5 space-y-6">
            <h3 className="text-3xl font-bold text-[#0B1410] dark:text-neon-lime mb-4 font-space-grotesk animate-float">Marketing Frog</h3>
            <p className="text-[#0B1410]/80 dark:text-muted-foreground max-w-md">Creating websites that help your business leap ahead of competition with cutting-edge digital marketing strategies.</p>
          </div>
          
          <div className="md:col-span-3">
            <h3 className="text-xl font-bold text-[#0B1410] dark:text-primary mb-6 font-space-grotesk">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#services" className="text-[#0B1410]/80 dark:text-muted-foreground hover:text-[#0B1410] dark:hover:text-neon-lime transition-colors">Services</a></li>
              <li><a href="#stories" className="text-[#0B1410]/80 dark:text-muted-foreground hover:text-[#0B1410] dark:hover:text-neon-lime transition-colors">Success Stories</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-4">
            <h3 className="text-xl font-bold text-[#0B1410] dark:text-primary mb-6 font-space-grotesk">Contact</h3>
            <address className="not-italic space-y-4">
              <p className="text-[#0B1410]/80 dark:text-muted-foreground flex items-center">
                <Mail size={16} className="mr-2 text-[#0B1410] dark:text-neon-lime" />
                hello@marketingfrog.com
              </p>
              <p className="text-[#0B1410]/80 dark:text-muted-foreground">Victoria, British Columbia, Canada</p>
            </address>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-[#0B1410]/20 dark:border-white/10 text-center text-sm text-[#0B1410]/80 dark:text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Marketing Frog. All rights reserved.</p>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-[#0B1410]/10 dark:from-neon-lime/5 to-transparent"></div>
    </footer>
  );
};

export default Footer;
