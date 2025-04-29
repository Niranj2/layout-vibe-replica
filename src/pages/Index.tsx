
import React from 'react';
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

  return (
    <div className="min-h-screen bg-background text-foreground">
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
