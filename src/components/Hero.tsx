
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="hero-gradient pt-16 pb-24 px-6 lg:px-12 min-h-[100vh] flex flex-col justify-center relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-40 h-40 rounded-full bg-neon-lime/5 blur-3xl top-1/4 left-1/4"></div>
        <div className="absolute w-60 h-60 rounded-full bg-neon-blue/5 blur-3xl bottom-1/4 right-1/4"></div>
      </div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-10">
            <h1 className="text-5xl md:text-7xl font-bold text-neon-lime text-balance leading-tight">
              Your marketing is just one leap away.
            </h1>
            <p className="text-muted-foreground max-w-md text-xl text-balance">
              Creating high-performing, sophisticated marketing campaigns that stand at the forefront of the digital realm.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-neon-lime text-background hover:bg-neon-lime/90 px-8 py-7 text-xl rounded-full relative overflow-hidden group">
                <span className="relative z-10">Free Consultation</span>
                <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Button>
              <Button className="bg-transparent text-primary border border-primary hover:bg-primary/10 px-8 py-7 text-xl rounded-full">
                See Our Work
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-6 pt-6 text-lg text-muted-foreground">
              <span className="font-space-grotesk font-medium">Trusted by</span>
              <span>ABC Corp</span>
              <span>LocalBiz Inc</span>
              <span>YXI Factory</span>
            </div>
          </div>
          <div className="relative lg:block">
            <div className="relative h-[450px] flex items-center justify-center">
              <div className="absolute inset-0 bg-accent/5 rounded-full blur-[100px]"></div>
              <img 
                src="/lovable-uploads/f3102caa-8113-41a3-8fa4-1789a70b3fa1.png" 
                alt="Marketing Frog Mascot" 
                className="w-full h-full object-contain absolute"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#services" className="flex flex-col items-center text-primary hover:text-neon-lime transition-colors">
          <span className="mb-2 text-sm">Explore</span>
          <ArrowDown className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
