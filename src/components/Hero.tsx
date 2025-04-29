
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <section className="hero-gradient pt-16 pb-24 px-6 lg:px-12 min-h-[85vh] flex flex-col justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-primary">
              Your marketing is just one leap away.
            </h1>
            <p className="text-muted-foreground max-w-md text-xl">
              Creating high-performing, sophisticated marketing campaigns that stand at the forefront of the digital realm.
            </p>
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-7 text-xl rounded-full">
              Get started today
            </Button>
            <div className="flex items-center space-x-6 pt-6 text-lg text-muted-foreground">
              <span>Trusted by</span>
              <span>ABC Corp</span>
              <span>LocalBiz Inc</span>
              <span>YXI Factory</span>
            </div>
          </div>
          <div className="relative lg:block animate-fade-in">
            <div className="relative h-[450px] flex items-center justify-center">
              <img 
                src="/lovable-uploads/c753a06d-6f07-4170-b7b6-6f339c711b4e.png" 
                alt="Marketing Frog Mascot" 
                className="w-full h-full object-contain absolute transform translate-y-[-20px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
