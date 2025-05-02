
import React from 'react';
import { Instagram, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-20 px-6 lg:px-12 bg-background/95 relative overflow-hidden border-t border-white/10">
      <div className="absolute inset-0 ambient-bg"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5 space-y-6">
            <h3 className="text-3xl font-bold text-neon-lime mb-4 font-space-grotesk animate-float">Marketing Frog</h3>
            <p className="text-muted-foreground max-w-md">Creating websites that help your business leap ahead of competition with cutting-edge digital marketing strategies.</p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-primary hover:text-neon-lime hover:bg-white/20 transition-all group">
                <Twitter size={18} className="group-hover:animate-pulse" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-primary hover:text-neon-lime hover:bg-white/20 transition-all group">
                <Instagram size={18} className="group-hover:animate-pulse" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-primary hover:text-neon-lime hover:bg-white/20 transition-all group">
                <Linkedin size={18} className="group-hover:animate-pulse" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-primary hover:text-neon-lime hover:bg-white/20 transition-all group">
                <Mail size={18} className="group-hover:animate-pulse" />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <h3 className="text-xl font-bold text-primary mb-6 font-space-grotesk">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#services" className="text-muted-foreground hover:text-neon-lime transition-colors">Services</a></li>
              <li><a href="#stories" className="text-muted-foreground hover:text-neon-lime transition-colors">Success Stories</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-neon-lime transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-neon-lime transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-4">
            <h3 className="text-xl font-bold text-primary mb-6 font-space-grotesk">Contact</h3>
            <address className="not-italic space-y-4">
              <p className="text-muted-foreground flex items-center">
                <Mail size={16} className="mr-2 text-neon-lime" />
                hello@marketingfrog.com
              </p>
              <p className="text-muted-foreground">+1 (555) 123-4567</p>
              <p className="text-muted-foreground">123 Digital Lane<br />Web City, IN 12345</p>
            </address>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Marketing Frog. All rights reserved.</p>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-neon-lime/5 to-transparent"></div>
    </footer>
  );
};

export default Footer;
