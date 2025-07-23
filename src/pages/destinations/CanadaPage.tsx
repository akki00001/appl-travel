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
    title: 'Eastern Canada Explorer',
    images: [
      '../images/canada/01.jpg',
      '../images/canada/02.jpg',
      '../images/canada/03.jpg',
    ],
    daysRange: '6-13 days',
    priceRange: '$1,900 and above',
    highlights: [
      'Niagara Falls',
      'Toronto: CN Tower',
      'Banff & Jasper National Parks',
    ],
    activities: [
      'City tours',
      'nature exploration',
      'cruises',
      'wildlife viewing',
    ],
    specialNotes: 'Blend of natural beauty and vibrant cities.',
  },
  {
    title: 'Rockies & French Canada',
    images: [
      '../images/canada/04.jpg',
      '../images/canada/05.jpg',
      '../images/canada/03.jpg',
    ],
    daysRange: '6-13 days',
    priceRange: '$1,900 and above',
    highlights: [
      'Banff & Jasper National Parks',
      'Montreal',
      'Quebec City',
    ],
    activities: [
      'City tours',
      'nature exploration',
      'cruises',
      'wildlife viewing',
    ],
    specialNotes: 'Blend of natural beauty and vibrant cities.',
  },
  {
    title: 'Quebec Culture Trail',
    images: [
      '../images/canada/06.jpg',
      '../images/canada/01.jpg',
      '../images/canada/02.jpg',
    ],
    daysRange: '6-13 days',
    priceRange: '$1,900 and above',
    highlights: [
      'Quebec City',
    ],
    activities: [
      'City tours',
      'nature exploration',
      'cruises',
      'wildlife viewing',
    ],
    specialNotes: 'Blend of natural beauty and vibrant cities.',
  },
];

const CanadaPage: React.FC = () => {
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
          backgroundImage: 'url(../images/canada/06.jpg)',
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
            Discover Enchanting Canada
          </h1>
          <p style={{ fontSize: '1.3rem', margin: '1.2rem 0 2rem', fontWeight: 400 }}>
            Discover Enchanting Canada
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
            Start Your Canada Adventure
          </button>
        </div>
      </div>

      <div style={{ textAlign: 'left', marginLeft: '5%', marginRight: '5%', padding: 0 }}>
        <h2 style={{ color: '#7F0203', fontWeight: 'bold', marginTop: '2rem', marginBottom: '1rem' }}>
          Embark on an Extraordinary Journey Across the Great White North
        </h2>
        <hr />
        <p style={{ color: 'black', fontWeight: 'normal', marginBottom: '1.5rem', padding: 0, fontSize: '1.1rem', lineHeight: '1.6' }}>
          Astir Passage Pvt Ltd. invites you to explore Canada, a land of breathtaking natural wonders, vibrant cities, and warm hospitality. Marvel at the thunderous spectacle of Niagara Falls, wander the cobblestone streets of historic Quebec City, and experience the multicultural energy of Toronto and Vancouver.
        </p>
        <hr />
        <p style={{ color: 'black', fontWeight: 'normal', marginBottom: '1.5rem', padding: 0, fontSize: '1.1rem', lineHeight: '1.6' }}>
          Unwind amidst the turquoise lakes and snow-capped peaks of Banff and Jasper National Parks, where adventure awaits in every season. Witness the magical Northern Lights dance across the Yukon sky, or explore the rugged coastlines and charming villages of the Maritimes.
        </p>
        <p style={{ color: 'black', fontWeight: 'normal', marginBottom: '1.5rem', padding: 0, fontSize: '1.1rem', lineHeight: '1.6' }}>
          Whether you seek outdoor thrills, cultural discoveries, or serene escapes, Canada promises unforgettable moments for every traveler. Let us craft your perfect Canadian adventure—explore our exclusive tours and start planning your dream escape today.
        </p>
        <h3 style={{ color: '#7F0203', fontWeight: 'bold', marginTop: '2rem', marginBottom: '1rem' }}>
          Highlights to Inspire Your Journey
        </h3>
        <hr />
        <ul style={{ color: 'black', fontSize: '1.1rem', lineHeight: '1.6', paddingLeft: '1.2rem' }}>
          <li><strong>Iconic Landmarks:</strong> Niagara Falls, CN Tower, Château Frontenac, Parliament Hill</li>
          <li><strong>Natural Wonders:</strong> Banff & Jasper National Parks, Lake Louise, Northern Lights, Gros Morne National Park</li>
          <li><strong>Cultural Experiences:</strong> Montreal Jazz Festival, Calgary Stampede, First Nations heritage on Manitoulin Island</li>
          <li><strong>Urban Delights:</strong> Cosmopolitan Toronto, scenic Vancouver, historic Quebec City</li>
        </ul>
        <p style={{ color: 'black', fontWeight: 'normal', marginTop: '2rem', padding: 0, fontSize: '1.1rem', lineHeight: '1.6' }}>
          Canada’s diversity, stunning landscapes, and welcoming spirit make it a destination like no other. Let Astir Passage help you discover the best of Canada—your adventure begins here.
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
    </div>
  );
};

export default CanadaPage;
