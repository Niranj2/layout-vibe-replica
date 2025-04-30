
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  
  useEffect(() => {
    // Staggered animations for text elements
    const headline = headlineRef.current;
    const subtitle = subtitleRef.current;
    
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
  }, []);

  return (
    <section className="hero-gradient pt-16 pb-24 px-6 lg:px-12 min-h-[85vh] flex flex-col justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-10">
            <h1 
              ref={headlineRef}
              className="text-5xl md:text-7xl font-bold text-primary text-balance leading-tight"
            >
              Your marketing is just one leap away.
            </h1>
            <p 
              ref={subtitleRef}
              className="text-muted-foreground max-w-md text-xl text-balance"
            >
              Creating high-performing, sophisticated marketing campaigns that stand at the forefront of the digital realm.
            </p>
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-7 text-xl rounded-full relative overflow-hidden group">
              <span className="relative z-10">Get started today</span>
              <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </Button>
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
                src="/lovable-uploads/f3102caa-8113-41a3-8fa4-1789a70b3fa1.png" 
                alt="Marketing Frog Mascot" 
                className="w-full h-full object-contain absolute transform translate-y-[-20px] animate-fade-in"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
