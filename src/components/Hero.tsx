
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-10">
            <h1 className="text-5xl md:text-7xl font-bold text-[#ADFF2F] text-balance leading-tight">
              Your marketing is just one leap away.
            </h1>
            <p className="text-[#CCE6CC] text-xl text-balance">
              Creating high-performing, sophisticated marketing campaigns that stand at the forefront of the digital realm.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-[#ADFF2F] text-[#0B1410] hover:bg-[#ADFF2F]/90 px-8 py-7 text-xl rounded-full relative overflow-hidden group"
                onClick={() => window.open('https://calendly.com/hello-marketingfrog/marketing-frog-30-minute-consultation', '_blank')}
              >
                <span className="relative z-10">Free Consultation</span>
                <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Button>
              <Button 
                className="bg-transparent text-[#ADFF2F] border border-[#ADFF2F] hover:bg-[#ADFF2F]/10 px-8 py-7 text-xl rounded-full"
                onClick={scrollToStories}
              >
                See Our Work
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-6 pt-6 text-lg text-[#CCE6CC]">
              <span className="font-space-grotesk font-medium">Trusted by</span>
              <span>Kernel</span>
              <span>MuchMagic</span>
            </div>
          </div>
          <div className="relative lg:block">
            <div className="relative h-[450px] flex items-center justify-center">
              <img 
                src="/lovable-uploads/9a7bd3ee-2ce4-4052-b81b-96262521fe42.png" 
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
