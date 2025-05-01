
import React, { useEffect, useRef, useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Stories from '@/components/Stories';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import { useTheme } from '@/hooks/useTheme';

const Index: React.FC = () => {
  // Initialize theme (this ensures the hook runs)
  useTheme();
  
  const cursorRef = useRef<HTMLDivElement>(null);
  const [cursorHovered, setCursorHovered] = useState(false);
  
  useEffect(() => {
    // Initialize custom cursor
    const cursor = cursorRef.current;
    
    const moveCursor = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };
    
    const handleMouseOver = () => setCursorHovered(true);
    const handleMouseOut = () => setCursorHovered(false);
    
    // Add event listeners
    document.addEventListener('mousemove', moveCursor);
    
    // Add hover state to links and buttons
    const interactiveElements = document.querySelectorAll('a, button, .hover-trigger');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseover', handleMouseOver);
      el.addEventListener('mouseout', handleMouseOut);
    });
    
    // Cleanup
    return () => {
      document.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseover', handleMouseOver);
        el.removeEventListener('mouseout', handleMouseOut);
      });
    };
  }, []);

  // Hide custom cursor on mobile devices
  const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {!isMobile && (
        <div 
          ref={cursorRef}
          className={`custom-cursor ${cursorHovered ? 'hover' : ''}`}
        ></div>
      )}
      <Header />
      <main>
        <Hero />
        <Services />
        <Stories />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
