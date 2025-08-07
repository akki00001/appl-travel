import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/components/_balitourcards.scss';
import { FaCalendarAlt, FaUserFriends, FaCamera } from 'react-icons/fa';
import PopupForm from '../common/PopupForm';

const tourPackages = [
  {
    title: 'Romantic Escape to Bali with Private Pool Villa',
    nights: '5N/6D',
    location: '3N Kuta | 2N Seminyak',
    people: 30,
    rating: 5,
    price: '₹ 62,999',
    image: '/images/bali.jpg',
    path: '/destination/bali'  // Changed to itinerary page as per user request
  },
  {
    title: 'Memorable Bali',
    nights: '5N/6D',
    location: '5N Bali',
    people: 30,
    rating: 5,
    price: '₹ 21,001',
    image: '/images/bali.jpg',
    path: '/destination/bali/memorable-bali'  // Specific itinerary page
  },
  {
    title: 'Bali Bliss',
    nights: '4N/5D',
    location: 'KUTA',
    people: 30,
    rating: 5,
    price: '₹ 42,999',
    image: '/images/bali.jpg',
    path: '/destination/bali/bali-bliss'  // Specific itinerary page
  }
];

const BaliTourCards: React.FC = () => {
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
          <h6>WELCOME TO BALI</h6>
          <h2>Experience Bali’s Beauty – Nature, Culture & Adventure</h2>
          <hr />
          <p>
            <strong>Bali – Astir Passage – Tour Operator India</strong> offers custom Bali holiday packages tailored for Indian travelers. As a leading Bali travel expert, we provide seamless experiences, from romantic getaways to family tours. Bali travel agency India Astir Passage Bali tours Bali holiday packages from India. Our experienced team ensures your trip to Bali is unforgettable. Bali – Astir Passage – Tour Operator India
          </p>
        </div>
      </div>

      <div className="tour-packages">
        <h6>TOUR PACKAGES</h6>
        <h3>Most Popular & Best Bali Tour Packages</h3>
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

export default BaliTourCards;
