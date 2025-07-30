import React from 'react';
import SEO from '../../components/common/SEO';
import VietnamTourCards from '../../components/tours/VietnamTourCards';
import BestTimeToVisit from '../../components/BestTimeToVisit';
import FAQ from '../../components/FAQ';

const vietnam: React.FC = () => {
  return (
    <>
      <SEO
        title="Vietnam Tours - Astir Travel"
        description="Embark on a mesmerizing journey through Vietnam with Astir Passage Pvt Ltd. Explore breathtaking landscapes, vibrant cities, and rich culture."
        keywords="Vietnam, tours, travel, Astir Travel, packages"
      />
      <div>
        {/* Hero Section */}
        <section
          className="vietnam-hero"
          style={{
            backgroundImage: `url('/images/pexels-taryn-elliott-4253927.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '60vh',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div
            className="hero-overlay"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: 'white',
              padding: '3rem',
              maxWidth: '700px',
            }}
          >
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
              Discover Captivating Vietnam
            </h1>
            <p style={{ fontSize: '1.2rem' }}>
              Embark on a mesmerizing journey through Vietnam with Astir Passage Pvt Ltd.
            </p>
          </div>
        </section>

        {/* Tour Cards + Additional Sections */}
        <VietnamTourCards />
        <BestTimeToVisit />
        <FAQ />
      </div>
    </>
  );
};

export default vietnam;
