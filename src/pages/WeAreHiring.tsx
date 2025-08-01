import React from 'react';

const WeAreHiring = () => {
  return (
    <div className="we-are-hiring container-fluid p-0">
      {/* Hero Section */}
      <div
        className="hero-section d-flex align-items-center justify-content-center text-center text-white"
        style={{
          backgroundImage: 'url(/images/careers-hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '400px',
        }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold">Join Our Team atAstir Passage</h1>
          <p className="lead mt-3">Be part of an exciting journey to redefine travel experiences</p>
        </div>
      </div>

      {/* Company Culture & Values Section */}
      <div className="culture-values container py-5">
        <h2 className="mb-4">Our Culture & Values</h2>
        <p>
          AtAstir Passage, we foster a culture of innovation, collaboration, and passion for travel. We value diversity, creativity, and a commitment to delivering exceptional experiences to our customers.
        </p>
        <p>
          Join us to work in a dynamic environment where your ideas matter and your growth is supported.
        </p>
      </div>

      {/* Current Job Openings Section */}
      <div className="job-openings container py-5">
        <h2 className="mb-4">Current Openings</h2>
        <div className="job-list">
          <div className="job-item mb-4 p-3 border rounded shadow-sm">
            <h4>Travel Consultant</h4>
            <p>Help our customers plan their dream trips with personalized advice and expert knowledge.</p>
            <button className="btn btn-primary">Apply Now</button>
          </div>
          <div className="job-item mb-4 p-3 border rounded shadow-sm">
            <h4>Marketing Specialist</h4>
            <p>Develop and execute marketing campaigns to grow our brand and reach new audiences.</p>
            <button className="btn btn-primary">Apply Now</button>
          </div>
          <div className="job-item mb-4 p-3 border rounded shadow-sm">
            <h4>Software Engineer</h4>
            <p>Build and maintain our travel platform to provide seamless experiences for our users.</p>
            <button className="btn btn-primary">Apply Now</button>
          </div>
        </div>
      </div>

      {/* Employee Testimonials Section */}
      <div className="testimonials bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">What Our Employees Say</h2>
          <div className="row">
            <div className="col-md-4 mb-3">
              <div className="testimonial p-3 bg-white rounded shadow">
                <p>"Working atAstir Passage has been a rewarding experience with great team support."</p>
                <h6>- Alice M.</h6>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="testimonial p-3 bg-white rounded shadow">
                <p>"The culture here encourages growth and creativity. I love being part of this team."</p>
                <h6>- Raj P.</h6>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="testimonial p-3 bg-white rounded shadow">
                <p>"Every day brings new challenges and opportunities to learn."</p>
                <h6>- Maria S.</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="call-to-action text-center py-5">
        <h3>Ready to join our team?</h3>
        <a href="#" className="btn btn-primary btn-lg mt-3">Apply Now</a>
      </div>
    </div>
  );
};

export default WeAreHiring;
