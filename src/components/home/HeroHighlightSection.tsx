// src/components/HeroHighlightSection.tsx

import React from "react";
import "../../assets/styles/components/_herohighlightsection.scss";

const HeroHighlightSection: React.FC = () => {
  const girlImg = "/images/girl.webp";

  return (
    <section className="hero-highlight">
      <div className="container">
        <div className="hero-content">
          <div className="hero-left">
            <img src={girlImg} alt="Travel Girl" className="hero-image" />
            <div className="destination-badge">
              <strong>125+</strong>
              <span>Destination</span>
            </div>
          </div>

          <div className="hero-right">
            <h2>We create the<br /><span>trips you love</span></h2>
            <p>
              <strong>Tour Packages</strong> Astir Passage offers <strong>customized tour packages</strong>
              for unforgettable holiday experiences. Explore the beauty of India
              with our packages, tailored to make your journey memorable.
              Experience the rich culture, diverse landscapes, and
              world-renowned hospitality of India with our expertly crafted
              itineraries and best-selling holiday packages. Discover the magic
              of India with Astir Passage and create memories that will last a
              lifetime.
            </p>

            <div className="features">
              <div className="feature">
                <i className="icon">📌</i>
                <div>
                  <h4>Best Tours</h4>
                  <p>A strict screening process ensures that we only offer the best tour and trip packages.</p>
                </div>
              </div>
              <div className="feature">
                <i className="icon">💰</i>
                <div>
                  <h4>Best Price</h4>
                  <p>We guarantee you the best price. Found a lower price? We will match it.</p>
                </div>
              </div>
              <div className="feature">
                <i className="icon">✅</i>
                <div>
                  <h4>Free Cancellation</h4>
                  <p>Understand how important flexibility is right now. Just one click and it’s done!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHighlightSection;