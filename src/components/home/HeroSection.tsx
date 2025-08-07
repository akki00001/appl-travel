import React from 'react';
import { FaPlay } from 'react-icons/fa';
// import BookingForm from '../booking/BookingForm';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-wrap">
      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="container hero-content text-white text-center position-relative">
        <span className="d-block text-warning fst-italic mb-3 hero-subtitle">
          Welcome to Astir Passage
        </span>
        <h1 className="hero-title">
          Discover Your Favorite Place with Us
        </h1>
        <p className="hero-description">
          Travel to the any corner of the world, without going around in circles
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
