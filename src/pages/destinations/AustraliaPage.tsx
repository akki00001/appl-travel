import React from 'react';
import SEO from '../../components/common/SEO';
import AustraliaTourCards from '../../components/tours/AustraliaTourCards';
import BestTimeToVisitAustralia from '../../components/BestTimeToVisitAustralia';
import FAQ from '../../components/FAQ';
import '../../assets/styles/pages/_australiapage.scss';

const AustraliaPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Australia Tours - Astir Travel"
        description="Explore the Great Barrier Reef, Sydney Opera House, and Gold Coast with expertly crafted Australia tour packages."
        keywords="Australia, tours, travel, Astir Travel, packages"
      />
      <main>
        {/* Hero Section */}
        <section
          className="australia-hero"
          style={{ backgroundImage: `url('/images/australia.jpg')` }}
        >
          <div className="hero-overlay">
            <h1>Discover Australia with Astir Passage</h1>
            <p>
              Explore the Great Barrier Reef, Sydney Opera House, and Gold Coast with expertly crafted Australia tour packages.
            </p>
            <button className="cta-button">Explore Packages</button>
          </div>
        </section>

        {/* Tour Cards Section */}
        <AustraliaTourCards />

        {/* Best Time To Visit Section */}
        <BestTimeToVisitAustralia />

        {/* FAQ Section */}
        <FAQ />
      </main>
    </>
  );
};

export default AustraliaPage;
