import React, { useState } from 'react';
import PopupForm from '../../components/common/PopupForm';

interface TourCard {
  images: string[];
  title: string;
  daysRange: string;
  priceRange: string;
  highlights: string[];
  activities: string[];
  specialNotes: string;
}

const tourCards: TourCard[] = [
  {
    title: 'Shimla & Manali Escape',
    images: [
      '/images/himachal/01.jpg',
      '/images/himachal/02.jpg',
      '/images/himachal/03.jpg',
    ],
    daysRange: '4-10 days',
    priceRange: '₹11,500 to ₹25,000',
    highlights: ['Shimla', 'Manali', 'Dharamshala'],
    activities: ['Trekking', 'sightseeing', 'adventure sports', 'cultural visits'],
    specialNotes: 'Hill stations with adventure and cultural experiences.',
  },
  {
    title: 'Spiti Valley Adventure',
    images: [
      '/images/himachal/03.jpg',
      '/images/himachal/02.jpg',
      '/images/himachal/01.jpg',
    ],
    daysRange: '4-10 days',
    priceRange: '₹11,500 to ₹25,000',
    highlights: ['Dharamshala', 'Spiti Valley', 'Kullu'],
    activities: ['Trekking', 'sightseeing', 'adventure sports', 'cultural visits'],
    specialNotes: 'Hill stations with adventure and cultural experiences.',
  },
  {
    title: 'Kullu Valley Getaway',
    images: [
      '/images/himachal/02.jpg',
      '/images/himachal/03.jpg',
      '/images/himachal/04.jpg',
    ],
    daysRange: '4-10 days',
    priceRange: '₹11,500 to ₹25,000',
    highlights: ['Kullu'],
    activities: ['Trekking', 'sightseeing', 'adventure sports', 'cultural visits'],
    specialNotes: 'Hill stations with adventure and cultural experiences.',
  },
];

const HimachalPage: React.FC = () => {
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
          backgroundImage: 'url(/images/himachal/05.jpg)',
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
            Discover Beautiful Himachal
          </h1>
          <p style={{ fontSize: '1.3rem', margin: '1.2rem 0 2rem', fontWeight: 400 }}>
            Explore the breathtaking landscapes, hill stations, and cultural heritage of Himachal Pradesh.
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
        <h2 style={{ color: '#007bff', fontWeight: 'bold', marginTop: '2rem', marginBottom: '1rem' }}>
          Discover the Magic of Himachal Pradesh
        </h2>
        <p style={{ color: 'black', fontWeight: 'normal', marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: '1.6' }}>
          Himachal Pradesh offers stunning mountain views, serene hill stations, and rich cultural experiences. From Shimla to Manali, explore the best of nature and adventure.
        </p>
        <p style={{ color: 'black', fontWeight: 'normal', marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: '1.6' }}>
          Whether you seek trekking, sightseeing, or cultural visits, Himachal has something for every traveler.
        </p>
      </div>

      {/* Tour Cards */}
      <div
        style={{
          display: 'flex',
          gap: '2rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
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
        padding: '1rem',
      }}
    >
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
      <button
        style={{
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          padding: '0.6rem 1.2rem',
          fontWeight: '700',
          cursor: 'pointer',
          marginTop: '1rem',
          width: '100%',
          textAlign: 'center',
        }}
      >
        Request Callback
      </button>
    </div>
  );
};

export default HimachalPage;
