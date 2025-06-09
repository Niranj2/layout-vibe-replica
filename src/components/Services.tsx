
import React, { useEffect, useRef } from 'react';
import ServiceCard from './ServiceCard';

const Services: React.FC = () => {
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
    <section id="services" ref={sectionRef} className="py-28 px-6 lg:px-12 bg-background relative overflow-hidden">
      <div className="absolute inset-0 ambient-bg"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-foreground flex items-center gap-2 animate-slide-up opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            Hop on to see how we can help
            <span className="inline-block bg-neon-lime text-background text-sm rounded-full p-1 w-6 h-6 flex items-center justify-center animate-float">hi</span>
          </h2>
          <p className="text-xl text-muted-foreground animate-slide-up opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            Our specialized services are designed to take your brand to the next level with strategic marketing that delivers measurable results.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-12">
          <ServiceCard 
            title="Web Design" 
            icon="computer"
            description="Stunning, responsive websites that convert visitors into customers with intuitive UX/UI." 
          />
          <ServiceCard 
            title="SEO & Content" 
            icon="search" 
            description="Data-driven SEO strategies and compelling content that drives organic traffic and engagement."
          />
          <ServiceCard 
            title="Branding" 
            icon="branding" 
            description="Distinctive visual identities and brand strategies that make your business unforgettable."
          />
          <ServiceCard 
            title="Marketing Strategy" 
            icon="marketing" 
            description="Comprehensive digital marketing plans that integrate multiple channels for maximum impact."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
