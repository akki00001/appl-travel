import React, { useState } from 'react';
import PopupForm from '../../components/common/PopupForm';

const tourCards = [
  {
    title: 'Classic Europe Tour',
    image: '/images/europe/02.jpg',
    days: 10,
    nights: 9,
    rating: 4.8,
    ratingCount: 120,
    locations: ['Paris', 'Rome', 'Venice'],
    extraLocationsCount: 2,
    originalPrice: 120000,
    discountAmount: 24000,
    pricePerAdult: 96000,
  },
  {
    title: 'Europe Cultural Escape',
    image: '/images/europe/03.jpg',
    days: 12,
    nights: 11,
    rating: 4.9,
    ratingCount: 95,
    locations: ['Barcelona', 'Amsterdam', 'Prague'],
    extraLocationsCount: 1,
    originalPrice: 140000,
    discountAmount: 28000,
    pricePerAdult: 112000,
  },
  {
    title: 'Europe Adventure & Scenic',
    image: '/images/europe/04.jpg',
    days: 14,
    nights: 13,
    rating: 4.7,
    ratingCount: 80,
    locations: ['Swiss Alps', 'Lake Como', 'Budapest'],
    extraLocationsCount: 0,
    originalPrice: 160000,
    discountAmount: 32000,
    pricePerAdult: 128000,
  },
];

const Europe: React.FC = () => {
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
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', background: '#e8f0fe' }}>
      {/* Hero Section */}
      <div
        style={{
          position: 'relative',
          minHeight: '420px',
          borderRadius: '16px',
          overflow: 'hidden',
          marginBottom: '2rem',
          backgroundImage: 'url(/images/europe/01.jpg)',
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
            Discover Europe
          </h1>
          <p style={{ fontSize: '1.3rem', margin: '1.2rem 0 2rem', fontWeight: 400 }}>
            Explore the rich history, stunning architecture, and vibrant cultures of Europe’s top destinations.
          </p>
          <button
            style={{
              background: '#1a73e8',
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
            onMouseOver={e => (e.currentTarget.style.background = '#0c47b7')}
            onMouseOut={e => (e.currentTarget.style.background = '#1a73e8')}
          >
            Start Your Europe Adventure
          </button>
        </div>
      </div>

      <div style={{ textAlign: 'left', marginLeft: '5%', marginRight: '5%', padding: 0 }}>
        <h1 style={{ color: '#1a73e8', fontWeight: 'bold', marginTop: '2rem', marginBottom: '2rem', padding: 0 }}>
          Explore Europe
        </h1>
        <hr style={{ margin: '2rem 0', padding: 0 }} />
        <p>
          Europe offers a diverse blend of history, culture, and natural beauty. Discover iconic landmarks, world-class museums, and charming towns.
        </p>
        <p>
          Enjoy culinary delights, scenic landscapes, and vibrant festivals during your unforgettable journey.
        </p>
        <h2 style={{ color: '#1a73e8', fontWeight: 'bold', marginTop: '2rem', marginBottom: '1rem' }}>
          Highlights to Inspire Your Journey
        </h2>
        <ul>
          <li>Iconic Landmarks: Eiffel Tower, Colosseum, Sagrada Familia</li>
          <li>Nature & Wildlife: Swiss Alps, Mediterranean Coast, Black Forest</li>
          <li>Cultural Experiences: Art galleries, historic sites, local markets</li>
          <li>Adventure Activities: Hiking, cycling, river cruises</li>
          <li>Gastronomic Delights: French cuisine, Italian pasta, Spanish tapas</li>
        </ul>
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
          <div
            key={idx}
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
            <img
              src={card.image}
              alt={card.title}
              style={{ width: '100%', height: '180px', objectFit: 'cover' }}
            />
            <div style={{ padding: '1.5rem' }}>
              <p style={{ color: '#666', margin: '0 0 0.5rem 0', fontSize: '0.9rem' }}>
                {card.days} days &amp; {card.nights} nights
              </p>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#2ecc71"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#2ecc71"
                  style={{ width: '18px', height: '18px', marginRight: '0.3rem' }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.563.563 0 00-.182-.557l-4.204-3.602c-.38-.325-.178-.948.32-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
                <span style={{ color: '#2ecc71', fontWeight: '600', fontSize: '0.95rem' }}>
                  {card.rating.toFixed(1)} ({card.ratingCount})
                </span>
              </div>
              <h2 style={{ margin: '0 0 0.5rem 0', fontSize: '1.15rem' }}>{card.title}</h2>
              <p style={{ color: '#bfa87a', fontWeight: '600', margin: '0 0 0.5rem 0', fontSize: '0.9rem' }}>
                {card.locations.map((loc, i) => (
                  <span key={i}>
                    {loc}
                    {i < card.locations.length - 1 ? ' • ' : ''}
                  </span>
                ))}
                {card.extraLocationsCount > 0 && (
                  <span style={{ fontWeight: '400', color: '#bfa87a' }}>
                    &nbsp;...+{card.extraLocationsCount}
                  </span>
                )}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <span style={{ textDecoration: 'line-through', color: '#999', fontSize: '0.85rem' }}>
                  INR {card.originalPrice.toLocaleString('en-IN')}
                </span>
                <span
                  style={{
                    backgroundColor: '#d1f0d1',
                    color: '#2ecc71',
                    fontWeight: '600',
                    fontSize: '0.85rem',
                    padding: '0.1rem 0.3rem',
                    borderRadius: '3px',
                  }}
                >
                  SAVE INR {card.discountAmount.toLocaleString('en-IN')}
                </span>
              </div>
              <p style={{ fontWeight: '700', fontSize: '1.1rem', marginBottom: '1rem' }}>
                INR {card.pricePerAdult.toLocaleString('en-IN')} /Adult
              </p>
              <button
                style={{
                  backgroundColor: '#1a73e8',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '0.6rem 1.2rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  width: '100%',
                  justifyContent: 'center',
                }}
                onClick={() => openPopup(card.title)}
              >
                Request Callback
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Europe;
