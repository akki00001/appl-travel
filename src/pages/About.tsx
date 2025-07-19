import React from 'react';
import SEO from '../components/common/SEO';

const About = () => {
  return (
    <>
      <SEO
        title="About Us - Astir Travel"
        description="Learn more about Astir Travel, your trusted partner for unforgettable travel experiences around the world."
        keywords="travel, about us, Astir Travel, destinations, tours"
      />
      <div className="container mt-5">
        <h2 className="text-center text-info">About Us</h2>
        <p className="text-muted">
          We provide the best travel experiences around the world. Explore, dream, and discover new destinations with us.
        </p>
      </div>
    </>
  );
};

export default About;
