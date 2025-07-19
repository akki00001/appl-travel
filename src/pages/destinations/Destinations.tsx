import React from 'react';
import './DestinationListPage.scss';

type Destination = {
  image: string;
  price: string;
  days: string;
  title: string;
  location: string;
  features: string[];
  featureLabel: string;
  rating: number;
  badge?: string;
};

const destinations: Destination[] = [
  {
    image: '/images/destination-1.jpg',
    price: '$550/person',
    days: '8 DAYS TOUR',
    title: 'Banaue Rice Terraces',
    location: 'Banaue, Ifugao, Philippines',
    features: ['shower', 'king-size', 'mountains'],
    featureLabel: 'Near Mountain',
    rating: 4,
    badge: 'Popular',
  },
  {
    image: '/images/destination-2.jpg',
    price: '$550/person',
    days: '10 DAYS TOUR',
    title: 'Banaue Rice Terraces',
    location: 'Banaue, Ifugao, Philippines',
    features: ['shower', 'king-size', 'sun-umbrella'],
    featureLabel: 'Near Beach',
    rating: 5,
    badge: 'New',
  },
  {
    image: '/images/destination-3.jpg',
    price: '$550/person',
    days: '7 DAYS TOUR',
    title: 'Banaue Rice Terraces',
    location: 'Banaue, Ifugao, Philippines',
    features: ['shower', 'king-size', 'sun-umbrella'],
    featureLabel: 'Near Beach',
    rating: 4,
  },
  {
    image: '/images/destination-4.jpg',
    price: '$550/person',
    days: '8 DAYS TOUR',
    title: 'Banaue Rice Terraces',
    location: 'Banaue, Ifugao, Philippines',
    features: ['shower', 'king-size', 'sun-umbrella'],
    featureLabel: 'Near Beach',
    rating: 5,
  },
  {
    image: '/images/destination-5.jpg',
    price: '$550/person',
    days: '10 DAYS TOUR',
    title: 'Banaue Rice Terraces',
    location: 'Banaue, Ifugao, Philippines',
    features: ['shower', 'king-size', 'sun-umbrella'],
    featureLabel: 'Near Beach',
    rating: 4,
  },
  {
    image: '/images/destination-6.jpg',
    price: '$550/person',
    days: '7 DAYS TOUR',
    title: 'Banaue Rice Terraces',
    location: 'Banaue, Ifugao, Philippines',
    features: ['shower', 'king-size', 'sun-umbrella'],
    featureLabel: 'Near Beach',
    rating: 3,
  },
  {
    image: '/images/destination-6.jpg',
    price: '$550/person',
    days: '7 DAYS TOUR',
    title: 'Banaue Rice Terraces',
    location: 'Banaue, Ifugao, Philippines',
    features: ['shower', 'king-size', 'sun-umbrella'],
    featureLabel: 'Near Beach',
    rating: 3,
  },
  {
    image: '/images/destination-6.jpg',
    price: '$550/person',
    days: '7 DAYS TOUR',
    title: 'Banaue Rice Terraces',
    location: 'Banaue, Ifugao, Philippines',
    features: ['shower', 'king-size', 'sun-umbrella'],
    featureLabel: 'Near Beach',
    rating: 3,
  },
  {
    image: '/images/destination-6.jpg',
    price: '$550/person',
    days: '7 DAYS TOUR',
    title: 'Banaue Rice Terraces',
    location: 'Banaue, Ifugao, Philippines',
    features: ['shower', 'king-size', 'sun-umbrella'],
    featureLabel: 'Near Beach',
    rating: 3,
  },
  {
    image: '/images/destination-6.jpg',
    price: '$550/person',
    days: '7 DAYS TOUR',
    title: 'Banaue Rice Terraces',
    location: 'Banaue, Ifugao, Philippines',
    features: ['shower', 'king-size', 'sun-umbrella'],
    featureLabel: 'Near Beach',
    rating: 3,
  },
  {
    image: '/images/destination-6.jpg',
    price: '$550/person',
    days: '7 DAYS TOUR',
    title: 'Banaue Rice Terraces',
    location: 'Banaue, Ifugao, Philippines',
    features: ['shower', 'king-size', 'sun-umbrella'],
    featureLabel: 'Near Beach',
    rating: 3,
  },
  {
    image: '/images/destination-6.jpg',
    price: '$550/person',
    days: '7 DAYS TOUR',
    title: 'Banaue Rice Terraces',
    location: 'Banaue, Ifugao, Philippines',
    features: ['shower', 'king-size', 'sun-umbrella'],
    featureLabel: 'Near Beach',
    rating: 3,
  },
];

const DestinationListPage: React.FC = () => {
  return (
    <section className="destination-list">
      <div className="header">
        <p className="subtitle">Destination</p>
        <h2 className="title">Tour Destination</h2>
      </div>

      <div className="card-grid">
        {destinations.map((dest, idx) => (
          <div className="card" key={idx}>
            <div className="card-image">
              <img src={dest.image} alt={dest.title} />
              <span className="price">{dest.price}</span>
              {dest.badge && <span className="badge">{dest.badge}</span>}
            </div>
            <div className="card-content">
              <span className="days">{dest.days}</span>
              <h3>{dest.title}</h3>
              <p className="location">
                <i className="fa fa-map-marker"></i> {dest.location}
              </p>
              <div className="features">
                <span><i className="flaticon-shower"></i> 2</span>
                <span><i className="flaticon-king-size"></i> 3</span>
                <span><i className={`flaticon-${dest.features[2]}`}></i> {dest.featureLabel}</span>
              </div>
              <div className="rating">
                {[...Array(5)].map((_, i) => (
                  <i
                    key={i}
                    className={`fa fa-star ${i < dest.rating ? 'filled' : ''}`}
                  ></i>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default destinations;
