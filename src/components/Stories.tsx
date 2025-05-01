
import React, { useState, useEffect, useRef } from 'react';
import SuccessStory from './SuccessStory';

type FilterCategory = 'All' | 'E-commerce' | 'Tech' | 'Local';

const Stories: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('All');
  const sectionRef = useRef<HTMLElement>(null);

  const filters: FilterCategory[] = ['All', 'E-commerce', 'Tech', 'Local'];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section id="stories" ref={sectionRef} className="py-28 px-6 lg:px-12 bg-[#003E2B] text-white relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/30"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NWgtMXYtNXptNCA5djFoLTl2LTFoOXptLTQtNmgxdjJoLTF2LTJ6TTMyIDMxdjNoLTF2LTNoMXptLTEtNHYxaDF2MmMtMS4xOTIgMC0yLS44MDktMi0yaC0xYzAgMS42NSAxLjM1IDMgMyAzdi0xaDJ2LTFoLTJ2LTJoLTF6bTAtM3YxaC0xdi0xaDF6bS0yaDF2LTFoMXYxaC0xek0yOSAyOHYxaC0ydjFoLTF2LTFoLTF2LTFoNHptLTUgNWg1djFoLTV2LTF6bTAgMmg2djFoLTZ2LTF6bTYgMnYxaC02di0xaDZ6TTI0IDM4aDFhMiAyIDAgMDAyIDJoMXYxaC0xYTMgMyAwIDAxLTMtM3oiLz48cGF0aCBkPSJNMjAgMzBoNnYxaC02di0xem0wLTJoOXYxaC05di0xeiIvPjxwYXRoIGQ9Ik0yNyAyNGgydjF2MWgtMWMwIDEuMTkxLjgwOCAyIDIgMmg1djFoLTVhMyAzIDAgMDEtMy0zdi0xem0tNy0xdjFoLTR2MmgtMXYtMmgtMnYtMWg3em0tNyA2aDV2M2gydjFoLTN2LTNoLTR2LTF6bTE0IDZoMXYyYzAgMS42NS0xLjM1IDMtMyAzaC0zaC0xdi0xaDRhMiAyIDAgMDAyLTJ2LTJ6bS0zLTdoM3YxaC0zdi0xeiIvPjwvZz48L2c+PC9zdmc+')]"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 md:mb-0 animate-slide-up opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>Marketing Frog Success Stories</h2>
          
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                  activeFilter === filter 
                    ? 'bg-neon-lime text-background' 
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {filter}
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
