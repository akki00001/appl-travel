import React from 'react';
import BestTimeToVisit from '../../components/BestTimeToVisitSingapore';
import FAQ from '../../components/FAQ';
// import '../styles/heroInline.scss'; // reuse same hero styles
import SingaporeTourCards from '../../components/tours/SingaporeTourCards'; // We'll create this next

const SingaporePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="bali-hero"
        style={{
          backgroundImage: `url('/images/singapore.jpg')`,
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
            Explore Singapore with Astir Passage
          </h1>
          <p style={{ fontSize: '1.2rem' }}>
            Discover modern marvels, Sentosa island, nightlife & culture with our best Singapore packages.
          </p>
        </div>
      </section>

      <SingaporeTourCards />
      
      <FAQ />
    </div>
  );
};

export default SingaporePage;
