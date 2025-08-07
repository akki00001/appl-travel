import React from 'react';
import '../../assets/styles/components/_balitourcards.scss';

const malaysiaPackages = [
  {
    title: 'Kuala Lumpur Getaway',
    nights: '3N/4D',
    location: 'Kuala Lumpur',
    people: 25,
    rating: 5,
    price: '₹ 25,999',
    image: '/images/place-1.jpg'
  },
  {
    title: 'Langkawi Island Escape',
    nights: '4N/5D',
    location: 'Langkawi',
    people: 20,
    rating: 4,
    price: '₹ 32,500',
    image: '/images/place-2.jpg'
  },
  {
    title: 'Malaysia Cultural Tour',
    nights: '5N/6D',
    location: 'KL + Penang + Langkawi',
    people: 30,
    rating: 5,
    price: '₹ 44,700',
    image: '/images/place-3.jpg'
  }
];

const MalaysiaTourCards: React.FC = () => {
  return (
    <section className="bali-tour-section">
      <div className="hero-content">
        <h6>Welcome to Malaysia</h6>
        <h2>Discover Malaysia – Culture, Nature & City Life</h2>
        <hr />
        <p><strong>Malaysia – Astir Passage</strong> offers curated travel experiences across tropical islands, buzzing cities, and historic towns.</p>
       <hr />
      </div>

      <div className="tour-packages">
        <h6>Tour Packages</h6>
        <h3>Top Malaysia Tour Packages</h3>
        <hr />
        <div className="card-container">
          {malaysiaPackages.map((pkg, index) => (
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
                  <button className="explore-btn">Explore →</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MalaysiaTourCards;
