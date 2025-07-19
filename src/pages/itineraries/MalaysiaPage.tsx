import React from 'react';
import BestTimeToVisitMalaysia from '../../components/BestTimeToVisitMalaysia';
import FAQ from '../../components/FAQ';
import MalaysiaTourCards from '../../components/tours/MalaysiaTourCards';
// import '../styles/heroInline.scss'; // reuse existing hero SCSS

const MalaysiaPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="bali-hero"
        style={{
          backgroundImage: `url('/images/package-4.jpg')`,
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
            Explore Malaysia with Astir Passage
          </h1>
          <p style={{ fontSize: '1.2rem' }}>
            Discover tropical islands, modern skylines & culture-rich cities through our curated Malaysia packages.
          </p>
        </div>
      </section>

      <MalaysiaTourCards />
      <BestTimeToVisitMalaysia />
      <FAQ />
    </div>
  );
};

export default MalaysiaPage;
