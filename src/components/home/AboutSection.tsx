import React from 'react';
import '../../assets/styles/components/_aboutsection.scss';

const AboutSection: React.FC = () => {
  return (
    <section className="about-section">
      <div className="about-section__image">
        <img src="../images/girl.webp" alt="About Us" />
      </div>
      <div className="about-section__content">
        <h2>About Astir Travel</h2>
        <p>
          Astir Travel is your trusted partner for unforgettable journeys. We specialize in creating personalized travel experiences that cater to your unique interests and preferences. Our team of experts is dedicated to making your dream vacation a reality.
        </p>
        <p>
          From exotic beach getaways to thrilling mountain adventures, we offer a wide range of destinations and packages to suit every traveler. Let us handle the details while you focus on making memories.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;