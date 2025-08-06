import React from 'react';
import { FaPlay } from 'react-icons/fa';
// import BookingForm from '../booking/BookingForm';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-wrap relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Background Image - Responsive */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-[-1]"
        style={{
          backgroundImage: "url('/images/bg_1.jpg')",
        }}
      ></div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-white text-center relative z-10 py-20 md:py-32">
        {/* Raksha Bandhan Wish - Responsive */}
        <div className="mb-4 md:mb-6">
          <div className="bg-gradient-to-r from-red-500 via-pink-500 to-orange-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-full inline-block shadow-lg animate-pulse">
            <span className="text-sm md:text-lg font-bold">🪢 Happy Raksha Bandhan! 🪢</span>
            <br />
            <span className="text-xs md:text-sm">Celebrating the bond of love between brothers and sisters</span>
          </div>
        </div>
        
        <span className="block text-yellow-400 italic mb-3 md:mb-4 text-base md:text-lg">
          Welcome to Astir Passage
        </span>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
          Discover Your Favorite Place with Us
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl font-light mb-6 md:mb-8 mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
          Travel to the any corner of the world, without going around in circles
        </p>

        {/* CTA Button - Responsive */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-white text-orange-500 px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold hover:bg-orange-50 transition duration-300 shadow-lg hover:shadow-xl">
            Explore Destinations
          </button>
          <button className="border-2 border-white text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold hover:bg-white hover:text-orange-500 transition duration-300">
            Watch Video
          </button>
        </div>
      </div>

      {/* Booking Form Positioned - Responsive */}
      <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div
            className="w-full rounded-t-lg shadow-xl overflow-hidden"
            style={{
              backdropFilter: 'blur(10px)',
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
            }}
          >
            {/* <BookingForm /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
