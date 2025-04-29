
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-12 px-6 lg:px-12 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">LeapFrog</h3>
            <p className="text-muted-foreground">Creating websites that help your business leap ahead of competition.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Contact</h3>
            <address className="not-italic text-muted-foreground">
              <p>hello@leapfrog.com</p>
              <p>+1 (555) 123-4567</p>
            </address>
          </div>
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground hover:text-primary transition-colors">Twitter</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">LinkedIn</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">Instagram</a>
            </div>
          </div>
        </div>
        <div className="border-t border-muted mt-12 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} LeapFrog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
