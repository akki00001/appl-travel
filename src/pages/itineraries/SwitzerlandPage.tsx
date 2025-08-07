import React from 'react';
import SwitzerlandTourCards from '../../components/tours/SwitzerlandTourCards';
import BestTimeToVisitSwitzerland from '../../components/BestTimeToVisitSwitzerland';
import FAQ from '../../components/FAQ';

const SwitzerlandPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="bali-hero"
        style={{
          backgroundImage: `url('/images/switzerland-3.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '60vh',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="hero-overlay">
          <h1>Discover the Magic of Switzerland</h1>
          <p>Snow-capped Alps, serene lakes & fairytale towns – explore Switzerland with Astir Passage</p>
        </div>
      </section>

      <SwitzerlandTourCards />
      <BestTimeToVisitSwitzerland />
      <FAQ />
    </div>
  );
};

export default SwitzerlandPage;
