import React from 'react';
import '../../assets/styles/components/_balitourcards.scss'; // Reuse existing card styles

const singaporePackages = [
  {
    title: 'Singapore Getaway',
    nights: '4N/5D',
    location: 'Singapore City',
    people: 20,
    rating: 5,
    price: '₹ 35,000',
    image: '/images/singapore.jpg'
  },
  {
    title: 'Sentosa Special',
    nights: '5N/6D',
    location: 'Sentosa + City',
    people: 25,
    rating: 4,
    price: '₹ 48,999',
    image: '/images/singapore.jpg'
  },
  {
    title: 'Singapore Family Escape',
    nights: '4N/5D',
    location: 'City + Universal Studios',
    people: 30,
    rating: 5,
    price: '₹ 45,750',
    image: '/images/singapore.jpg'
  }
];

const SingaporeTourCards: React.FC = () => {
  return (
    <section className="bali-tour-section">
      <div className="hero-content">
        <h6>Welcome to Singapore</h6>
        <h2>Experience the Lion City – Nature, Modernity & Fun</h2>
        <hr />
        <p><strong>Singapore – Astir Passage</strong> Singapore Tour Packages Begin an unforgettable journey to Singapore, the Lion City, Singapore, through Astirpassage! Be prepared to be swept off by a storm of unforgettable experiences. Explore the stunning realm of futuristic wonders in Gardens by the Bay, where tall Supertrees and vivid flowers transport you to a mysterious world. Get your adrenaline pumping on Sentosa Island with activities in Singapore and take pleasure in the adrenaline-pumping rides and breathtaking shows. Enjoy a delicious culinary adventure through the vibrant markets, enjoying the myriad of flavors Singapore has to offer. Singapore Tour Packages Allow Astir Passage be your guide to unravel how to discover the hidden secrets in this vibrant jewel, where adventure art, and a myriad of opportunities for surprises are waiting!</p>
      <hr />
      </div>

      <div className="tour-packages">
        <h6>Tour Packages</h6>
        <h3>Top Singapore Tour Packages</h3>
        <hr />
        <div className="card-container">
          {singaporePackages.map((pkg, index) => (
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

export default SingaporeTourCards;
