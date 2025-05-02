
import React, { useState } from 'react';
import { Computer, Search, Target, Smartphone } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  icon: 'computer' | 'search' | 'branding' | 'marketing';
  description?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, icon, description }) => {
  const [isHovered, setIsHovered] = useState(false);
  
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

  return (
    <div 
      className="flex flex-col items-center animate-slide-up opacity-0 group cursor-pointer"
      style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`service-icon mb-4 bg-white/5 dark:bg-white/10 backdrop-blur-md group-hover:bg-accent/20 transition-all duration-500 ${isHovered ? 'hover-glow' : ''}`}
      >
        {getIcon()}
      </div>
      <h3 className="text-foreground text-center font-space-grotesk font-medium mb-2 group-hover:text-neon-lime transition-colors">{title}</h3>
      
      {description && isHovered && (
        <div className="mt-2 max-w-xs text-center text-muted-foreground animate-fade-in">
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
