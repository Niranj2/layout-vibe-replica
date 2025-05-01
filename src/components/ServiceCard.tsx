
import React, { useEffect, useRef } from 'react';
import { Computer, Search, Target, Smartphone } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  icon: 'computer' | 'search' | 'branding' | 'marketing';
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, icon }) => {
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

  const getIcon = () => {
    switch (icon) {
      case 'computer':
        return <Computer size={36} />;
      case 'search':
        return <Search size={36} />;
      case 'branding':
        return <Target size={36} />;
      case 'marketing':
        return <Smartphone size={36} />;
      default:
        return <Computer size={36} />;
    }
  };

  return (
    <div 
      ref={cardRef} 
      className="flex flex-col items-center opacity-0 transform transition-all duration-500 hover:scale-105"
    >
      <div className="service-icon mb-4 group">
        <div className="transform transition-all duration-300 group-hover:scale-110">
          {getIcon()}
        </div>
      </div>
      <h3 className="text-foreground text-center font-semibold">{title}</h3>
    </div>
  );
};

export default ServiceCard;
