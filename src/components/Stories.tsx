
import React from 'react';
import SuccessStory from './SuccessStory';

const Stories: React.FC = () => {
  return (
    <section id="stories" className="py-20 px-6 lg:px-12 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Leapfrog Success Stories</h2>
          <div className="bg-secondary rounded-full text-primary text-sm p-1 w-8 h-8 flex items-center justify-center">
            All
          </div>
        </div>
        
        <div className="grid md:grid-cols-1 xl:grid-cols-2 gap-8">
          <SuccessStory 
            title="Local Cafes" 
            subtitle="Oming Roublach in 5 Morfne" 
            description="Website rebuild and strategic content optimization resulted in a significant boost to search visibility and customer engagement."
            author="ViewChek Salon"
            image="/placeholder.svg"
          />
          <SuccessStory 
            title="Roofing Company" 
            subtitle="Sees growth by case in Lealls" 
            description="Your marketing for the special solution service resulted in doubling of new customers and high retention."
            author="Yloo Case Study"
            image="/placeholder.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default Stories;
