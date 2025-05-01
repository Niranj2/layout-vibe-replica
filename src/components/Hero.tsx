
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const frogRef = useRef<HTMLImageElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Staggered animations for text elements
    const headline = headlineRef.current;
    const subtitle = subtitleRef.current;
    const frogImage = frogRef.current;
    
    if (headline) {
      headline.style.opacity = '0';
      headline.style.transform = 'translateY(20px)';
      setTimeout(() => {
        headline.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        headline.style.opacity = '1';
        headline.style.transform = 'translateY(0)';
      }, 300);
    }
    
    if (subtitle) {
      subtitle.style.opacity = '0';
      subtitle.style.transform = 'translateY(20px)';
      setTimeout(() => {
        subtitle.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        subtitle.style.opacity = '1';
        subtitle.style.transform = 'translateY(0)';
      }, 600);
    }
    
    if (frogImage) {
      frogImage.style.opacity = '0';
      frogImage.style.transform = 'translateY(20px) scale(0.95)';
      setTimeout(() => {
        frogImage.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        frogImage.style.opacity = '1';
        frogImage.style.transform = 'translateY(0) scale(1)';
        setIsVisible(true);
      }, 900);
    }
  }, []);

  return (
    <section className="hero-gradient ambient-bg pt-16 pb-24 px-6 lg:px-12 min-h-[100vh] flex flex-col justify-center relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-40 h-40 rounded-full bg-neon-lime/5 blur-3xl top-1/4 left-1/4 animate-pulse"></div>
        <div className="absolute w-60 h-60 rounded-full bg-neon-blue/5 blur-3xl bottom-1/4 right-1/4 animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-10">
            <h1 
              ref={headlineRef}
              className="text-5xl md:text-7xl font-bold text-neon-lime text-balance leading-tight"
            >
              Your marketing is just one leap away.
            </h1>
            <p 
              ref={subtitleRef}
              className="text-muted-foreground max-w-md text-xl text-balance"
            >
              Creating high-performing, sophisticated marketing campaigns that stand at the forefront of the digital realm.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-neon-lime text-background hover:bg-neon-lime/90 px-8 py-7 text-xl rounded-full relative overflow-hidden group animate-pulse">
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
              <div className="absolute inset-0 bg-accent/5 rounded-full blur-[100px] animate-pulse"></div>
              <img 
                ref={frogRef}
                src="/lovable-uploads/f3102caa-8113-41a3-8fa4-1789a70b3fa1.png" 
                alt="Marketing Frog Mascot" 
                className={`w-full h-full object-contain absolute transform ${isVisible ? 'animate-bounce' : ''}`}
                style={{animationDelay: '1.5s'}}
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
