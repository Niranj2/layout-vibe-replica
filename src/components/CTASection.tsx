
import React from 'react';
import { Button } from '@/components/ui/button';

const CTASection: React.FC = () => {
  return (
    <section className="py-16 px-6 lg:px-12 bg-card">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Ready to make the leap?</h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-8">
          Join hundreds of businesses that have transformed their online presence with LeapFrog.
        </p>
        <Button className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-lg rounded-full">
          Get a free consultation
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
