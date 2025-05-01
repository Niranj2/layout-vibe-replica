
import React from 'react';
import { Computer, Search, Target, Smartphone } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  icon: 'computer' | 'search' | 'branding' | 'marketing';
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, icon }) => {
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
    <div className="flex flex-col items-center animate-slide-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
      <div className="service-icon mb-4">
        {getIcon()}
      </div>
      <h3 className="text-foreground text-center">{title}</h3>
    </div>
  );
};

export default ServiceCard;
