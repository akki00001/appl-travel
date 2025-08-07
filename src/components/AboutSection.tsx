import React from 'react';

const AboutSection = () => {
  return (
    <div className="about-section container-fluid p-0">
      {/* Hero Section */}
      <div
        className="hero-section d-flex align-items-center justify-content-center text-center text-white"
        style={{
          backgroundImage: 'url(/images/about-1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '400px',
        }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold">AboutAstir Passage</h1>
          <p className="lead mt-3">Your gateway to unforgettable travel experiences</p>
        </div>
      </div>

      {/* Company Story Section */}
      <div className="company-story container py-5">
        <h2 className="mb-4">Our Story</h2>
        <div className="row align-items-center">
          <div className="col-md-6">
            <p>
             Astir Passage was founded with a passion to bring unique and thrilling travel experiences to adventurers around the world. We believe travel is not just about destinations but about creating memories that last a lifetime.
            </p>
            <p>
              Our team of travel experts curates personalized itineraries that cater to your interests, whether it's trekking in the Himalayas, exploring exotic beaches, or immersing in cultural festivals.
            </p>
          </div>
          <div className="col-md-6">
            <img src="/images/about-2.jpg" alt="Our Story" className="img-fluid rounded shadow" />
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="mission-vision bg-light py-5">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-6 mb-4">
              <h3 className="text-primary mb-3">Our Mission</h3>
              <p>
                To inspire and empower travelers to explore the world with confidence and curiosity, providing exceptional service and unforgettable adventures.
              </p>
            </div>
            <div className="col-md-6 mb-4">
              <h3 className="text-primary mb-3">Our Vision</h3>
              <p>
                To be the most trusted and innovative travel company, fostering sustainable tourism and enriching lives through meaningful travel experiences.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="team-section container py-5">
        <h2 className="text-center mb-4">Meet Our Team</h2>
        <div className="row text-center">
          <div className="col-md-3 mb-4">
            <img src="/images/team-1.jpg" alt="Team Member 1" className="img-fluid rounded-circle mb-2" />
            <h5>Jane Doe</h5>
            <p>Founder & CEO</p>
          </div>
          <div className="col-md-3 mb-4">
            <img src="/images/team-2.jpg" alt="Team Member 2" className="img-fluid rounded-circle mb-2" />
            <h5>John Smith</h5>
            <p>Head of Operations</p>
          </div>
          <div className="col-md-3 mb-4">
            <img src="/images/team-3.jpg" alt="Team Member 3" className="img-fluid rounded-circle mb-2" />
            <h5>Emily Johnson</h5>
            <p>Travel Consultant</p>
          </div>
          <div className="col-md-3 mb-4">
            <img src="/images/team-4.jpg" alt="Team Member 4" className="img-fluid rounded-circle mb-2" />
            <h5>Michael Brown</h5>
            <p>Customer Support</p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">What Our Clients Say</h2>
          <div className="row">
            <div className="col-md-4 mb-3">
              <div className="testimonial p-3 bg-white rounded shadow">
                <p>"Thrillophilia made our adventure trip seamless and unforgettable. Highly recommended!"</p>
                <h6>- Sarah & Mark</h6>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="testimonial p-3 bg-white rounded shadow">
                <p>"Excellent service and attention to detail. Our trip was perfectly planned."</p>
                <h6>- David L.</h6>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="testimonial p-3 bg-white rounded shadow">
                <p>"Professional and friendly team. They took care of everything for our family vacation."</p>
                <h6>- The Wilson Family</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="call-to-action text-center py-5">
        <h3>Ready to start your adventure?</h3>
        <a href="#" className="btn btn-primary btn-lg mt-3">Contact Us</a>
      </div>
    </div>
  );
};

export default AboutSection;
