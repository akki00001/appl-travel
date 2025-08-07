import React from 'react';
import SEO from '../../components/common/SEO';
import BaliTourCards from '../../components/tours/BaliTourCards';
import BestTimeToVisit from '../../components/BestTimeToVisit';
import FAQ from '../../components/FAQ';
// import '../styles/heroInline.scss'; // optional SCSS for styling

const BaliPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Bali Tours - Astir Travel"
        description="Explore magical temples, beaches, and cultural beauty with our curated Bali packages."
        keywords="Bali, tours, travel, Astir Travel, packages"
      />
      <div>
        {/* Hero Section */}
        <section
          className="bali-hero"
          style={{
            backgroundImage: `url('/images/package-2.jpg')`,
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
              Discover Bali with Astir Passage
            </h1>
            <p style={{ fontSize: '1.2rem' }}>
              Explore magical temples, beaches, and cultural beauty with our curated Bali packages.
            </p>
          </div>
        </section>

        {/* Tour Cards + Additional Sections */}
        <BaliTourCards />
        <BestTimeToVisit />
        <FAQ />
      </div>
    </>
  );
};

export default BaliPage;
