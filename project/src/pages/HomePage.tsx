import React, { useEffect } from 'react';

// Components
import HeroSection from '../components/home/HeroSection';
import FeaturedPrograms from '../components/home/FeaturedPrograms';
import ProcessSection from '../components/home/ProcessSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CTASection from '../components/home/CTASection';

const HomePage = () => {
  useEffect(() => {
    document.title = 'Nova Finance Group | Mortgage Solutions';
  }, []);

  return (
    <div>
      <HeroSection />
      <FeaturedPrograms />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default HomePage;