
import React, { useState, useRef } from 'react';
import { Computer, Search, Target, Smartphone } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  icon: 'computer' | 'search' | 'branding' | 'marketing';
  description?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, icon, description }) => {
  const [isHovered, setIsHovered] = useState(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const getIcon = () => {
    switch (icon) {
      case 'computer':
        return <Computer size={36} className="group-hover:text-neon-lime transition-colors" />;
      case 'search':
        return <Search size={36} className="group-hover:text-neon-lime transition-colors" />;
      case 'branding':
        return <Target size={36} className="group-hover:text-neon-lime transition-colors" />;
      case 'marketing':
        return <Smartphone size={36} className="group-hover:text-neon-lime transition-colors" />;
      default:
        return <Computer size={36} className="group-hover:text-neon-lime transition-colors" />;
    }
  };

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setIsHovered(true);
    }, 100);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 150);
  };

  return (
    <div 
      className="flex flex-col items-center animate-slide-up opacity-0 group cursor-pointer"
      style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className={`service-icon mb-4 dark:bg-secondary/30 light:bg-primary/10 group-hover:bg-accent/20 transition-all duration-500 ${isHovered ? 'hover-glow' : ''}`}
      >
        {getIcon()}
      </div>
      <h3 className="text-foreground text-center font-space-grotesk font-medium mb-2 group-hover:text-neon-lime transition-colors">{title}</h3>
      
      {description && isHovered && (
        <div className="mt-2 max-w-xs text-center text-muted-foreground transition-all duration-700 ease-in-out opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
