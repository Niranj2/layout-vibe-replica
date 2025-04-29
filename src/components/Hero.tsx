
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <section className="hero-gradient pt-10 pb-20 px-6 lg:px-12 min-h-[80vh] flex flex-col justify-center relative overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-primary">
              Your new website is just one leapfrog away.
            </h1>
            <p className="text-muted-foreground max-w-md">
              Creating high-performing, sophisticated websites that stand at the forefront of the digital realm.
            </p>
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-lg rounded-full">
              Get started today
            </Button>
            <div className="flex items-center space-x-6 pt-6 text-sm text-muted-foreground">
              <span>Trusted by</span>
              <span>ABC Corp</span>
              <span>LocalBiz Inc</span>
              <span>YXI Factory</span>
            </div>
          </div>
          <div className="relative lg:block animate-fade-in">
            <div className="relative h-[400px] flex items-center justify-center">
              <img 
                src="/lovable-uploads/6dbadb20-b64f-40a4-8a73-26e5b120dd56.png" 
                alt="Frog Mascot" 
                className="w-72 h-72 object-contain absolute transform translate-y-[-20px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
