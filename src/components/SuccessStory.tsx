
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface SuccessStoryProps {
  title: string;
  subtitle: string;
  description: string;
  author: string;
  image: string;
  link?: string;
  color?: string;
  titleColor?: string;
}

const SuccessStory: React.FC<SuccessStoryProps> = ({
  title,
  subtitle,
  description,
  author,
  image,
  link,
  color = 'bg-neon-lime/10', // Default color
  titleColor = 'text-neon-lime' // Default title color
}) => {
  const CardWrapper = ({ children }: { children: React.ReactNode }) => {
    return link ? (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block">
        {children}
      </a>
    ) : (
      <>{children}</>
    );
  };

  return (
    <CardWrapper>
      <Card 
        className={`bg-card overflow-hidden animate-slide-up opacity-0 glassmorphism border-white/10 group transition-all duration-300 ease-in-out ${link ? 'cursor-pointer' : ''} hover:translate-y-[-5px] hover:shadow-lg`} 
        style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
      >
        <div className="grid md:grid-cols-3">
          <div className="md:col-span-1 overflow-hidden relative">
            <div className={`absolute inset-0 ${color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10`}></div>
            <img 
              src={image} 
              alt={title} 
              className="h-full w-full object-contain md:object-contain aspect-video md:aspect-auto transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="md:col-span-2 p-6">
            <CardHeader className="p-0 pb-4">
              <CardTitle className={`text-xl font-bold ${titleColor} mb-1 font-space-grotesk group-hover:translate-x-1 transition-transform duration-300`}>{title}</CardTitle>
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
    </CardWrapper>
  );
};

export default SuccessStory;
