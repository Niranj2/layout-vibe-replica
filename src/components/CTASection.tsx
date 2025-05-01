
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

const CTASection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-28 px-6 lg:px-16 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/30 via-background to-secondary/30 animate-pulse"></div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-neon-lime mb-8 animate-slide-up opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>Ready to make the leap?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-10 text-xl animate-slide-up opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
          Join hundreds of businesses that have transformed their online presence with Marketing Frog.
        </p>
        <div className="flex flex-wrap justify-center gap-6 mt-10">
          <Button className="bg-neon-lime text-background hover:bg-neon-lime/90 px-10 py-7 text-xl rounded-full animate-pulse">
            Get a free consultation
          </Button>
          <Button className="bg-transparent text-primary border border-primary hover:bg-primary/10 px-10 py-7 text-xl rounded-full">
            See our work
          </Button>
        </div>
      </div>

      <div className="absolute bottom-[-50px] left-[10%] w-24 h-24 blur-3xl bg-neon-coral/20 rounded-full animate-float"></div>
      <div className="absolute top-[30%] right-[10%] w-32 h-32 blur-3xl bg-neon-blue/20 rounded-full animate-float" style={{animationDelay: '1.5s'}}></div>
    </section>
  );
};

export default CTASection;
