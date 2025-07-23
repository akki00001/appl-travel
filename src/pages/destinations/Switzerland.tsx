import React, { useState } from 'react';

interface TourCard {
  title: string;
  images: string[];
  daysRange: string;
  priceRange: string;
  highlights: string[];
  activities: string[];
  specialNotes: string;
}

const tourCards: TourCard[] = [
  {
    title: 'Alpine Marvels',
    images: [
      '/images/Switzerland/04.jpg',
      '/images/Switzerland/05.jpg',
      '/images/Switzerland/01.jpg',
    ],
    daysRange: '3-11 days',
    priceRange: '₹1,42,000 and above',
    highlights: [
      'Lake Geneva',
      'Zermatt & Matterhorn',
      'Jungfrau Region',
    ],
    activities: [
      'Mountain hiking',
      'cable car rides',
      'winter sports',
      'boat trips',
      'city tours',
    ],
    specialNotes: 'Famous for Alps, lakes, and winter sports.',
  },
  {
    title: 'Central Switzerland Highlights',
    images: [
      '/images/Switzerland/01.jpg',
      '/images/Switzerland/05.jpg',
      '/images/Switzerland/03.jpg',
    ],
    daysRange: '3-11 days',
    priceRange: '₹1,42,000 and above',
    highlights: [
      'Jungfrau Region',
      'Lucerne',
      'Zurich',
    ],
    activities: [
      'Mountain hiking',
      'cable car rides',
      'winter sports',
      'boat trips',
      'city tours',
    ],
    specialNotes: 'Famous for Alps, lakes, and winter sports.',
  },
  {
    title: 'Zurich City Break',
    images: [
      '/images/Switzerland/02.jpg',
      '/images/Switzerland/04.jpg',
      '/images/Switzerland/01.jpg',
    ],
    daysRange: '3-11 days',
    priceRange: '₹1,42,000 and above',
    highlights: [
      'Zurich',
    ],
    activities: [
      'Mountain hiking',
      'cable car rides',
      'winter sports',
      'boat trips',
      'city tours',
    ],
    specialNotes: 'Famous for Alps, lakes, and winter sports.',
  },
];

const SwitzerlandPage: React.FC = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', background: '#f8f9fa' }}>
      {/* Hero Section */}
      <div
        style={{
          position: 'relative',
          minHeight: '420px',
          borderRadius: '16px',
          overflow: 'hidden',
          marginBottom: '2rem',
          backgroundImage: 'url(/images/Switzerland/01.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            background: 'rgba(0,0,0,0.45)',
            padding: '3rem 2rem',
            borderRadius: '12px',
            width: '100%',
            maxWidth: '700px',
          }}
        >
          <h1 style={{ fontSize: '2.8rem', fontWeight: 700, margin: 0 }}>
            Discover Beautiful Switzerland
          </h1>
          <p style={{ fontSize: '1.3rem', margin: '1.2rem 0 2rem', fontWeight: 400 }}>
            From stunning alpine landscapes to charming cities—find your perfect Switzerland adventure with us.
          </p>
          <button
            style={{
              background: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '32px',
              padding: '0.9rem 2.2rem',
              fontSize: '1.1rem',
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow: '0 2px 12px rgba(0,0,0,0.14)',
              transition: 'background 0.2s',
            }}
            onMouseOver={e => (e.currentTarget.style.background = '#0056b3')}
            onMouseOut={e => (e.currentTarget.style.background = '#007bff')}
          >
            Explore Tours
          </button>
        </div>
      </div>

      <div style={{ textAlign: 'left', marginLeft: '5%', marginRight: '5%', padding: 0 }}>
        <h1 style={{ color: '#004085', fontWeight: 'bold', marginTop: '2rem', marginBottom: '2rem', padding: 0 }}>
          Switzerland Tour Packages, Explore the Beauty of Switzerland with Our Customized Tour Packages
        </h1>
        <hr style={{ margin: '2rem 0', padding: 0 }} />
        <h3 style={{ fontWeight: 'bold', margin: '2rem 0 0 0', padding: 0 }}>Switzerland Tour Packages</h3>
        <p style={{ margin: '0 0 2rem 0', padding: 0 }}>
          Switzerland offers breathtaking landscapes, world-class skiing, and charming cities. Explore the culture, cuisine, and natural beauty with our tailored tour packages.
        </p>
        <h3 style={{ fontWeight: 'bold', margin: '2rem 0 2rem 0', padding: 0 }}>Elegant Switzerland Holiday Overview</h3>
        <p style={{ margin: '2rem 0 2rem 0', padding: 0 }}>
          Whether you want to explore Zurich, the Swiss Alps, or Lucerne, Switzerland has something for every traveler.
        </p>
        <p style={{ margin: '2rem 0', padding: 0 }}>
          Plan your Switzerland vacation with us and enjoy customized itineraries, comfortable accommodations, and unforgettable experiences.
        </p>
        <p style={{ margin: '2rem 0', padding: 0 }}>
          Book your Switzerland holiday packages today and embark on a journey filled with adventure and discovery.
        </p>
      </div>

      {/* Tour Cards */}
      <div
        style={{
          display: 'flex',
          gap: '3rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginTop: '5rem',
        }}
      >
        {tourCards.map((card, idx) => (
          <TourCardComponent key={idx} card={card} />
        ))}
      </div>
    </div>
  );
};

const TourCardComponent: React.FC<{ card: TourCard }> = ({ card }) => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % card.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + card.images.length) % card.images.length);
  };

  return (
    <div
      style={{
        background: 'white',
        borderRadius: '10px',
        boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
        width: '320px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
        <img
          src={card.images[currentImageIndex]}
          alt={`${card.title} image ${currentImageIndex + 1}`}
          style={{ width: '100%', height: '200px', objectFit: 'cover' }}
        />
        {card.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              style={{
                position: 'absolute',
                top: '50%',
                left: '10px',
                transform: 'translateY(-50%)',
                background: 'rgba(0,0,0,0.3)',
                border: 'none',
                borderRadius: '50%',
                color: 'white',
                width: '30px',
                height: '30px',
                cursor: 'pointer',
              }}
              aria-label="Previous Image"
            >
              ‹
            </button>
            <button
              onClick={nextImage}
              style={{
                position: 'absolute',
                top: '50%',
                right: '10px',
                transform: 'translateY(-50%)',
                background: 'rgba(0,0,0,0.3)',
                border: 'none',
                borderRadius: '50%',
                color: 'white',
                width: '30px',
                height: '30px',
                cursor: 'pointer',
              }}
              aria-label="Next Image"
            >
              ›
            </button>
          </>
        )}
        <div
          style={{
            position: 'absolute',
            bottom: '10px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '6px',
          }}
        >
          {card.images.map((_, i) => (
            <div
              key={i}
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: i === currentImageIndex ? '#007bff' : 'rgba(255, 255, 255, 0.6)',
                cursor: 'pointer',
              }}
              onClick={() => setCurrentImageIndex(i)}
            />
          ))}
        </div>
      </div>
      <div style={{ padding: '1rem' }}>
        <h2 style={{ margin: '0 0 0.5rem 0', fontSize: '1.15rem' }}>{card.title}</h2>
        <p style={{ fontWeight: '600', margin: '0 0 0.5rem 0', fontSize: '0.9rem' }}>
          Duration: {card.daysRange}
        </p>
        <p style={{ fontWeight: '700', fontSize: '1.1rem', margin: '0 0 0.5rem 0', color: '#007bff' }}>
          Price: {card.priceRange}
        </p>
        <div style={{ marginBottom: '0.5rem' }}>
          <strong>Highlights:</strong>
          <ul style={{ margin: '0.3rem 0 0 1rem', padding: 0 }}>
            {card.highlights.map((highlight, idx) => (
              <li key={idx} style={{ fontSize: '0.9rem' }}>
                {highlight}
              </li>
            ))}
          </ul>
        </div>
        <div style={{ marginBottom: '0.5rem' }}>
          <strong>Activities:</strong>
          <ul style={{ margin: '0.3rem 0 0 1rem', padding: 0 }}>
            {card.activities.map((activity, idx) => (
              <li key={idx} style={{ fontSize: '0.9rem' }}>
                {activity}
              </li>
            ))}
          </ul>
        </div>
        <p style={{ fontSize: '0.9rem', fontStyle: 'italic' }}>{card.specialNotes}</p>
      </div>
    </div>
  );
};

export default SwitzerlandPage;
