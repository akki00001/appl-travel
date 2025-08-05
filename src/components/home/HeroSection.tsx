import React from 'react';
import { FaPlay } from 'react-icons/fa';
// import BookingForm from '../booking/BookingForm';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-wrap">
      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="container text-white text-center position-relative" style={{ zIndex: 10, padding: '0 1rem', paddingBottom: '12rem' }}>
        <span className="d-block text-warning fst-italic mb-3" style={{ fontFamily: "'Brush Script MT', cursive", fontWeight: 500 }}>
          Welcome to Astir Passage
        </span>
        <h1 className="display-4 fw-bold mb-4 text-shadow">
          Discover Your Favorite Place with Us
        </h1>
        <p className="lead fw-light mb-5 mx-auto" style={{ maxWidth: '600px' }}>
          Travel to the any corner of the world, without going around in circles
        </p>
<a
  href="https://youtu.be/N66NyPPzvts"
  aria-label="Watch Astir Passage promotional video"
  className="btn btn-light rounded-circle shadow-lg d-inline-flex align-items-center justify-content-center mx-auto"
  style={{ width: '96px', height: '96px', color: '#f05a28', position: 'relative', overflow: 'hidden' }}
>
  <span
    className="position-absolute rounded-circle"
    style={{
      inset: 0,
      backgroundColor: '#f05a28',
      opacity: 0.2,
      animation: 'ping 2s infinite',
      zIndex: 0,
    }}
  ></span>
  <FaPlay className="position-relative" style={{ fontSize: '1.5rem', zIndex: 1 }} />
</a>
      </div>

      {/* Booking Form Positioned */}
      <div className="position-absolute bottom-0 start-0 end-0 px-3 px-md-5" style={{ zIndex: 20 }}>
        <div
          className="w-100 rounded-top shadow overflow-hidden"
          style={{
            backdropFilter: 'blur(10px)',
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
          }}
        >
          {/* <BookingForm /> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
