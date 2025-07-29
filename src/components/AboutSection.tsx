import React from 'react';

const AboutSection = () => {
  return (
    <div className="about-section container-fluid py-5">
      <div className="container pt-5">
        <div className="about-section row flex-column flex-lg-row">
          <div className="about-section__image col-lg-6 order-lg-2 order-1">
            <div className="position-relative h-100 about-image-container">
              <img src="/images/image_1.jpg" alt="About" className="w-80 h-auto about-image" style={{ objectFit: 'cover' }} />
            </div>
          </div>
          <div className="about-section__content col-lg-6 pt-5 pb-lg-5 order-lg-1 order-2">
            <div className="about-text bg-white p-4 p-lg-5 my-lg-5">
              <h6 className="text-primary text-uppercase" style={{ letterSpacing: '5px' }}>About Us</h6>
              <div className="about-text-content">
                <div className="about-title">
                  <h1 className="mb-3">About Astir Travel</h1>
                </div>
                <div className="about-paragraph">
                  <p>
                    Astir Travel is your trusted partner for unforgettable journeys. We specialize in creating personalized travel experiences that cater to your unique interests and preferences. Our team of experts is dedicated to making your dream vacation a reality.
                  </p>
                  <p>
                    From exotic beach getaways to thrilling mountain adventures, we offer a wide range of destinations and packages to suit every traveler. Let us handle the details while you focus on making memories.
                  </p>
                </div>
              </div>
              <ul className="about-section-list">
              <li>
                <span className="icon">✔</span>
                <span>Curated travel experiences</span>
              </li>
              <li>
                <span className="icon">✔</span>
                <span>Personalized itineraries</span>
              </li>
              <li>
                <span className="icon">✔</span>
                <span>Expert travel guides</span>
              </li>
            </ul>
              <a href="#" className="btn btn-primary mt-1">Book Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
