
import React, { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const CTASection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="contact" 
      className="py-20 px-6 lg:px-16 bg-card opacity-0 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-secondary to-card opacity-30"></div>
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">Ready to make the leap?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-10 text-xl">
          Join hundreds of businesses that have transformed their online presence with Marketing Frog.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button 
            className="bg-accent text-accent-foreground hover:bg-accent/90 px-10 py-7 text-xl rounded-full hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
          >
            Get a free consultation
          </Button>
          <Button 
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 px-10 py-7 text-xl rounded-full transition-all duration-300 hover:-translate-y-1"
          >
            See our work
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
