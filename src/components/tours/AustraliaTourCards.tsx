import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/components/_balitourcards.scss';
import PopupForm from '../common/PopupForm';

const australiaPackages = [
  {
    slug: 'sydney-explorer',
    title: 'Sydney Explorer',
    nights: '4N/5D',
    location: 'Sydney',
    people: 25,
    rating: 5,
    price: '₹ 55,000',
    image: '/images/australia.jpg',
  },
  {
    slug: 'gold-coast-brisbane',
    title: 'Gold Coast & Brisbane',
    nights: '5N/6D',
    location: 'Gold Coast + Brisbane',
    people: 20,
    rating: 4,
    price: '₹ 72,500',
    image: '/images/australia-2.jpg',
  },
  {
    slug: 'australia-highlights',
    title: 'Australia Highlights',
    nights: '7N/8D',
    location: 'Sydney • Melbourne • Cairns',
    people: 30,
    rating: 5,
    price: '₹ 98,000',
    image: '/images/australia-3.jpg',
  },
];

const AustraliaTourCards: React.FC = () => {
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
      <div className="hero-content">
        <h6>Welcome to Australia</h6>
        <h2>Adventures, Cities, and Wildlife Down Under</h2>
        <hr />
        <p>
          <strong>Australia – Astir Passage</strong> offers exciting, curated packages across coastlines,
          outback, and iconic cities for Indian travelers.
        </p>
      </div>

      <div className="tour-packages">
        <h6>Tour Packages</h6>
        <h3>Top Australia Tour Packages</h3>
        <hr />
        <div className="card-container">
          {australiaPackages.map((pkg, index) => (
            <div className="tour-card" key={index}>
              <img src={pkg.image} alt={pkg.title} className="card-img" />
              <div className="info">
                <div className="icons">
                  <span>{pkg.nights}</span>
                  <span>{pkg.people} People</span>
                  <span>⭐ {pkg.rating}</span>
                </div>
                <h5>{pkg.title}</h5>
                <p>{pkg.location}</p>
                <div className="bottom">
                  <span className="price">{pkg.price}</span>
                  <Link to={`/australia/${pkg.slug}`} className="explore-btn">
                    Explore →
                  </Link>
                </div>
              </div>
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

export default AustraliaTourCards;
