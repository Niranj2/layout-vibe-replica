
import React, { useState } from 'react';
import SuccessStory from './SuccessStory';

const categories = ["All", "Startups", "E-commerce", "Tech"];

const Stories: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <section id="stories" className="py-20 px-6 lg:px-12 bg-[#0e4129] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 md:mb-0">
            Marketing Frog Success Stories
          </h2>
          
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full transition-all ${
                  activeCategory === category 
                    ? "bg-white/20 text-white" 
                    : "bg-transparent text-white/70 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
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
