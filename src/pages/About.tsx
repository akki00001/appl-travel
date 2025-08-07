import React from 'react';
import SEO from '../components/common/SEO';
import AboutSection from '../components/AboutSection';

const About = () => {
  return (
    <>
      <SEO
        title="About Us - Astir Travel"
        description="Learn more about Astir Travel, your trusted partner for unforgettable travel experiences around the world."
        keywords="travel, about us, Astir Travel, destinations, tours"
      />
      <AboutSection />
    </>
  );
};

export default About;
