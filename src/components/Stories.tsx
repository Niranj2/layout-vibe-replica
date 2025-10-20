
import React, { useRef } from 'react';
import SuccessStory from './SuccessStory';

const Stories: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  React.useEffect(() => {
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
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 animate-slide-up opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>Marketing Frog Success Stories</h2>
        </div>
        
        <div className="grid md:grid-cols-1 xl:grid-cols-2 gap-8">
          <SuccessStory 
            title="Kernel" 
            subtitle="India's Simplest GST Billing Solution" 
            description="Kernel needed a clear, compelling online presence to stand out in India's competitive SaaS space. We helped shape their digital identity with a sleek landing page and strong brand messaging, positioning them as a go-to solution for simple and effective GST billing."
            author="Digital India's Digital Billing"
            image="/lovable-uploads/70ce251f-81cb-4c4e-8544-38d3059e8964.png"
            link="https://kernel-marketingfrog.netlify.app/"
            color="bg-green-500/10"
          />
          <SuccessStory 
            title="MuchMagic" 
            subtitle="International Consulting Services" 
            description="MuchMagic partnered with us to elevate their global brand presence. Through a complete rebrand—including a refined website, messaging strategy, and visual identity—we helped them project the confidence and clarity needed to connect with international clients."
            author="Global Consulting"
            image="/lovable-uploads/48fcd1d7-6800-4cfb-a29b-d75f3b31cd2f.png"
            link="https://sobhanajm.com/"
            color="bg-purple-500/10"
          />
          <SuccessStory 
            title="Bankingeorgia" 
            subtitle="Modern Digital Banking for the Next Generation" 
            description="Bankingeorgia.com partnered with us to reimagine their digital banking platform for a new generation of users. We crafted a modern interface with seamless user flows, improved accessibility, and trust-building messaging — positioning Bankingeorgia as a leader in Georgia's fast-evolving fintech space."
            author="Fintech & Digital Experience"
            image="/lovable-uploads/bankingeorgia.png"
            link="https://bankingeorgia.com/"
            color="bg-blue-500/10"
          />
          <SuccessStory 
            title="Astroport" 
            subtitle="Pioneering Decentralized Finance Infrastructure" 
            description="Astroport.xyz collaborated with us to elevate their DeFi brand identity and improve user engagement across their ecosystem. Through an optimized landing experience, unified visual language, and clear value communication, we helped strengthen credibility and adoption within the global Web3 community."
            author="Web3 & Blockchain Strategy"
            image="/lovable-uploads/astroport.png"
            link="https://astroport.xyz/"
            color="bg-cyan-500/10"
          />
        </div>
      </div>
    </section>
  );
};

export default Stories;
