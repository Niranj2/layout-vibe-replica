
import React from 'react';
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
  return (
    <Card className="bg-card overflow-hidden animate-slide-up opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
      <div className="grid md:grid-cols-3">
        <div className="md:col-span-1">
          <img 
            src={image} 
            alt={title} 
            className="h-full w-full object-cover aspect-video md:aspect-auto"
          />
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
