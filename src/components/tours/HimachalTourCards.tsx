import React from 'react';
import { FaCalendarAlt, FaUserFriends, FaCamera } from 'react-icons/fa';
import '../../assets/styles/components/_balitourcards.scss';

const tourPackages = [
  {
    title: 'Scenic Himachal Tour',
    nights: '6N/7D',
    location: 'Shimla | Manali',
    people: 2,
    rating: 4.5,
    price: '₹ 25,999',
    image: '/images/himachal/01.jpg'
  },
  {
    title: 'Adventure in Himachal',
    nights: '7N/8D',
    location: 'Kasol | Tosh',
    people: 4,
    rating: 4.8,
    price: '₹ 35,999',
    image: '/images/himachal/02.jpg'
  },
  {
    title: 'Himachal Family Getaway',
    nights: '5N/6D',
    location: 'Dharamshala | Dalhousie',
    people: 4,
    rating: 4.6,
    price: '₹ 29,999',
    image: '/images/himachal/03.jpg'
  }
];

const HimachalTourCards: React.FC = () => {
  return (
    <section className="bali-tour-section">
      <div className="hero">
        <div className="hero-content">
          <h6>WELCOME TO HIMACHAL</h6>
          <h2>Explore the Majestic Himalayas</h2>
          <hr />
          <p>
            Discover the serene beauty of Himachal Pradesh with our customized tour packages. From snow-capped mountains to lush green valleys, we offer an unforgettable experience.
          </p>
        </div>
      </div>

      <div className="tour-packages">
        <h6>TOUR PACKAGES</h6>
        <h3>Popular Himachal Tour Packages</h3>
        <hr />
        <div className="card-container">
          {tourPackages.map((pkg, index) => (
            <div className="tour-card" key={index}>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default HimachalTourCards;