import React from 'react';
import '../../assets/styles/components/_balitourcards.scss';

const tourPackages = [
  {
    title: 'Swiss Delight',
    nights: '5N/6D',
    location: 'Zurich • Lucerne • Interlaken',
    people: 30,
    rating: 5,
    price: '₹ 89,999',
    image: '/images/switzerland-1.jpg'
  },
  {
    title: 'Romantic Swiss Alps',
    nights: '6N/7D',
    location: 'Lucerne • Zermatt • Geneva',
    people: 20,
    rating: 5,
    price: '₹ 1,15,000',
    image: '/images/switzerland.jpg'
  },
  {
    title: 'Swiss Explorer Tour',
    nights: '7N/8D',
    location: 'Zurich • Bern • Jungfrau',
    people: 25,
    rating: 5,
    price: '₹ 1,35,000',
    image: '/images/switzerland-2.jpg'
  }
];

const SwitzerlandTourCards: React.FC = () => {
  return (
    <section className="bali-tour-section">
      <div className="hero-content">
        <h6>Welcome to Switzerland</h6>
        <h2>Top-Rated Switzerland Holiday Packages</h2>
        <hr />
        <p>From the majestic Alps to charming cities, explore Switzerland in comfort and style with Astir Passage.</p>
        <hr />
      </div>

      <div className="tour-packages">
        <h6>Tour Packages</h6>
        <h3>Popular Switzerland Tours</h3>
        <hr />
        <div className="card-container">
          {tourPackages.map((pkg, index) => (
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

export default SwitzerlandTourCards;
