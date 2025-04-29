
import React from 'react';
import { Button } from '@/components/ui/button';

const CTASection: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-6 lg:px-16 bg-card">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">Ready to make the leap?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-10 text-xl">
          Join hundreds of businesses that have transformed their online presence with Marketing Frog.
        </p>
        <Button className="bg-accent text-accent-foreground hover:bg-accent/90 px-10 py-7 text-xl rounded-full">
          Get a free consultation
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
