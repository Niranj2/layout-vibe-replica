
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToStories = (e: React.MouseEvent) => {
    e.preventDefault();
    const storiesSection = document.getElementById('stories');
    if (storiesSection) {
      storiesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-[#003E2B] pt-16 pb-24 px-6 lg:px-12 min-h-[100vh] flex flex-col justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">
          {/* Image section - appears first on mobile, second on large screens */}
          <div className="relative lg:block order-1 lg:order-2">
            <div className="relative h-[300px] lg:h-[450px] flex items-center justify-center">
              <img 
                src="/lovable-uploads/9a7bd3ee-2ce4-4052-b81b-96262521fe42.png" 
                alt="Marketing Frog Mascot" 
                className="w-full h-full object-contain absolute"
              />
            </div>
          </div>
          
          {/* Text content - appears second on mobile, first on large screens */}
          <div className="space-y-10 order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-neon-lime text-balance leading-tight">
              Your marketing is just one leap away.
            </h1>
            <p className="text-muted-foreground dark:text-muted-foreground text-lg lg:text-xl text-balance">
              Creating high-performing, sophisticated marketing campaigns that stand at the forefront of the digital realm.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-neon-lime text-[#0B1410] hover:bg-neon-lime/90 px-6 lg:px-8 py-6 lg:py-7 text-lg lg:text-xl rounded-full relative overflow-hidden group">
                <span className="relative z-10">Free Consultation</span>
                <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Button>
              <Button 
                className="bg-transparent text-primary dark:text-primary border border-primary dark:border-primary hover:bg-primary/10 dark:hover:bg-primary/10 px-6 lg:px-8 py-6 lg:py-7 text-lg lg:text-xl rounded-full"
                onClick={scrollToStories}
              >
                See Our Work
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-6 pt-6 text-base lg:text-lg text-muted-foreground dark:text-muted-foreground">
              <span className="font-space-grotesk font-medium">Trusted by</span>
              <span>Kernel</span>
              <span>MuchMagic</span>
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
