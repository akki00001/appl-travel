import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/components/_balitourcards.scss'; // Reuse BaliTourCards styles for consistency
import { FaCalendarAlt, FaUserFriends, FaCamera } from 'react-icons/fa';
import PopupForm from '../common/PopupForm';

const tourPackages = [
  {
    title: 'Vietnam Couple EXCLUSIVE | FREE Candle Light Dinner',
    nights: '6N/7D',
    location: '2N Hanoi • 1N Halong Bay • 4N Ho Chi Minh',
    people: 30,
    rating: 4.7,
    price: '₹ 59,950',
    image: '/images/pexels-dutumong-2251854.jpg',
    path: '/destination/vietnam'  // Adjust path as needed
  },
  {
    title: 'Romantic Vietnam | FREE Ba Na Hills Cable Car Tickets',
    nights: '7N/8D',
    location: '1N Hanoi • 1N Halong Bay • 1N Hanoi • 2N Da Nang',
    people: 30,
    rating: 4.8,
    price: '₹ 73,880',
    image: '/images/pexels-tomas-malik-793526-1660996.jpg',
    path: '/destination/vietnam/romantic-vietnam'  // Adjust path as needed
  },
  {
    title: 'Rediscover Vietnam – A Complete Honeymoon Tour',
    nights: '8N/9D',
    location: '2N Hanoi • 1N Halong Bay • 2N Da Nang • 4N Ho Chi Minh',
    people: 30,
    rating: 4.6,
    price: '₹ 78,990',
    image: '/images/pexels-loifotos-2853964.jpg',
    path: '/destination/vietnam/rediscover-vietnam'  // Adjust path as needed
  }
];

const VietnamTourCards: React.FC = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string | undefined>(undefined);

  const openPopup = (title: string) => {
    setSelectedPackage(title);
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
    setSelectedPackage(undefined);
  };

  return (
    <section className="bali-tour-section">
      <div className="hero">
        <div className="hero-content">
          <h6>WELCOME TO VIETNAM</h6>
          <h2>Experience Vietnam’s Charm – Culture, Nature & Adventure</h2>
          <hr />
          <p>
            <strong>Vietnam – Astir Passage – Tour Operator India</strong> offers custom Vietnam holiday packages tailored for Indian travelers. Explore vibrant cities, stunning landscapes, and rich heritage with our curated tours. Our experienced team ensures your trip to Vietnam is unforgettable.
          </p>
        </div>
      </div>

      <div className="tour-packages">
        <h6>TOUR PACKAGES</h6>
        <h3>Most Popular & Best Vietnam Tour Packages</h3>
        <hr />
        <div className="card-container">
          {tourPackages.map((pkg, index) => (
            <div key={index} className="tour-card-wrapper">
              <Link to={pkg.path} className="tour-card-link">
                <div className="tour-card">
                  <img src={pkg.image} alt={pkg.title} className="card-img" />
                  <div className="info">
                    <div className="icons">
                      <span><FaCalendarAlt /> {pkg.nights}</span>
                      <span><FaUserFriends /> {pkg.people}</span>
                      <span><FaCamera /> {pkg.rating}</span>
                    </div>
                    <h5>{pkg.title}</h5>
                    <p><i className="location-icon"></i> {pkg.location}</p>
                    <div className="bottom">
                      <span className="price">{pkg.price}</span>
                      <button className="explore-btn">Explore →</button>
                    </div>
                  </div>
                </div>
              </Link>
              <button className="callback-btn" onClick={() => openPopup(pkg.title)}>
                Request Callback
              </button>
            </div>
          ))}
        </div>
      </div>
      {popupOpen && selectedPackage && (
        <PopupForm destinationName={selectedPackage} onClose={closePopup} />
      )}
    </section>
  );
};

export default VietnamTourCards;
