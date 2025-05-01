
import React, { useRef, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

interface SuccessStoryProps {
  title: string;
  subtitle: string;
  description: string;
  author: string;
  image: string;
}

const SuccessStory: React.FC<SuccessStoryProps> = ({
  title,
  subtitle,
  description,
  author,
  image
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
          entry.target.classList.remove('opacity-0');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <Card 
      ref={cardRef} 
      className="bg-card overflow-hidden opacity-0 transform transition-all duration-500 hover:translate-y-[-5px] hover:shadow-glow"
    >
      <div className="grid md:grid-cols-3">
        <div className="md:col-span-1">
          <HoverCard>
            <HoverCardTrigger asChild>
              <div className="relative overflow-hidden">
                <img 
                  src={image} 
                  alt={title} 
                  className="h-full w-full object-cover aspect-video md:aspect-auto transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                  <span className="text-white text-sm">View case study</span>
                </div>
              </div>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between space-x-4">
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">{title}</h4>
                  <p className="text-xs">{description}</p>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
        <div className="md:col-span-2 p-6">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="text-xl font-bold text-primary mb-1">{title}</CardTitle>
            <CardDescription className="text-foreground text-lg">{subtitle}</CardDescription>
          </CardHeader>
          <CardContent className="p-0 pb-4">
            <p className="text-muted-foreground">{description}</p>
          </CardContent>
          <CardFooter className="p-0">
            <span className="text-primary text-sm">{author}</span>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
};

export default SuccessStory;
