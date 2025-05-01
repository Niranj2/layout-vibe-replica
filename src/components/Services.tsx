
import React from 'react';
import ServiceCard from './ServiceCard';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 px-6 lg:px-12 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground flex items-center gap-2">
          Hop on to see how we can help:
          <span className="inline-block bg-secondary text-primary text-sm rounded-full p-1 w-6 h-6 flex items-center justify-center">hi</span>
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-12">
          <ServiceCard title="Work Design" icon="computer" />
          <ServiceCard title="SEO & Content" icon="search" />
          <ServiceCard title="Branding" icon="branding" />
          <ServiceCard title="Marketing Strategy" icon="marketing" />
        </div>
      </div>
    </section>
  );
};

export default Services;
