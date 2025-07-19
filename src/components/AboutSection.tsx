import React from 'react';

const AboutSection = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container pt-5">
        <div className="row">
          <div className="col-lg-6" style={{ minHeight: '500px' }}>
            <div className="position-relative h-100">
              <img src="/images/image_1.jpg" alt="About" className="position-absolute w-100 h-100" style={{ objectFit: 'cover' }} />
            </div>
          </div>
          <div className="col-lg-6 pt-5 pb-lg-5">
            <div className="about-text bg-white p-4 p-lg-5 my-lg-5">
              <h6 className="text-primary text-uppercase" style={{ letterSpacing: '5px' }}>About Us</h6>
              <h1 className="mb-3">Discover Your Next Adventure with Astir</h1>
              <p>
                At Astir, we believe that travel is more than just visiting new places; it's about creating unforgettable experiences and lasting memories. Our passion for exploration drives us to curate the best tour packages that cater to your unique interests and budget. Whether you're dreaming of a relaxing beach getaway, a thrilling mountain expedition, or a cultural city tour, we are here to make your travel dreams a reality.
              </p>
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
