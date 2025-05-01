
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="bg-card overflow-hidden animate-slide-up opacity-0 glassmorphism border-white/10 group transition-all duration-500" 
      style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="grid md:grid-cols-3">
        <div className="md:col-span-1 overflow-hidden relative">
          <div className={`absolute inset-0 bg-neon-lime/10 opacity-0 transition-opacity duration-500 z-10 ${isHovered ? 'opacity-100' : ''}`}></div>
          <img 
            src={image} 
            alt={title} 
            className={`h-full w-full object-cover aspect-video md:aspect-auto transition-all duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
          />
        </div>
        <div className="md:col-span-2 p-6">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="text-xl font-bold text-neon-lime mb-1 font-space-grotesk group-hover:translate-x-1 transition-transform duration-300">{title}</CardTitle>
            <CardDescription className="text-foreground text-lg">{subtitle}</CardDescription>
          </CardHeader>
          <CardContent className="p-0 pb-4">
            <p className="text-muted-foreground">{description}</p>
          </CardContent>
          <CardFooter className="p-0">
            <span className="text-accent text-sm font-medium flex items-center gap-2">
              <span className="inline-block h-1 w-6 bg-accent"></span>
              {author}
            </span>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
};

export default SuccessStory;
