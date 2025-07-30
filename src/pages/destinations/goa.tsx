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
    title: 'North Goa Fun',
    images: [
      '/images/goa/01.jpg',
      '/images/goa/02.jpg',
      '/images/goa/03.jpg',
    ],
    daysRange: '2-6 days',
    priceRange: '₹7,000 to ₹20,000',
    highlights: [
      'Calangute Beach',
      'Baga Beach',
      'Fort Aguada',
    ],
    activities: [
      'Beach activities',
      'water sports',
      'heritage walks',
      'nightlife',
    ],
    specialNotes: 'Popular for beaches, nightlife, and Portuguese heritage.',
  },
  {
    title: 'South Goa & Nature',
    images: [
      '/images/goa/03.jpg',
      '/images/goa/01.jpg',
      '/images/goa/02.jpg',
    ],
    daysRange: '2-6 days',
    priceRange: '₹7,000 to ₹20,000',
    highlights: [
      'Fort Aguada',
      'Dudhsagar Waterfall',
    ],
    activities: [
      'Beach activities',
      'water sports',
      'heritage walks',
      'nightlife',
    ],
    specialNotes: 'Popular for beaches, nightlife, and Portuguese heritage.',
  },
  {
    title: 'Relaxed Beach Retreat',
    images: [
      '/images/goa/02.jpg',
      '/images/goa/01.jpg',
      '/images/goa/03.jpg',
    ],
    daysRange: '2-6 days',
    priceRange: '₹7,000 to ₹20,000',
    highlights: [
      'Palolem',
      'Anjuna',
    ],
    activities: [
      'Beach activities',
      'water sports',
      'heritage walks',
      'nightlife',
    ],
    specialNotes: 'Popular for beaches, nightlife, and Portuguese heritage.',
  },
];

const Goa: React.FC = () => {
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
          backgroundImage: 'url(/images/goa/06.jpg)',
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
          <h1 style={{ fontSize: '2.8rem', fontWeight: 700, margin: 0, color: '#8B0000' }}>
            Discover Beautiful Goa
          </h1>
          <p style={{ fontSize: '1.3rem', margin: '1.2rem 0 2rem', fontWeight: 400 }}>
            From stunning beaches to vibrant culture—find your perfect Goa adventure with us.
          </p>
          <button
            style={{
              background: '#ff6600',
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
            onMouseOver={e => (e.currentTarget.style.background = '#e65c00')}
            onMouseOut={e => (e.currentTarget.style.background = '#ff6600')}
          >
            Explore Tours
          </button>
        </div>
      </div>

      <div style={{ textAlign: 'left', marginLeft: '5%', marginRight: '5%', padding: 0 }}>
        <h1 style={{ color: '#8B0000', fontWeight: 'bold', marginTop: '2rem', marginBottom: '2rem', padding: 0 }}>
          Discover Vibrant Goa
        </h1>
        <hr style={{ margin: '2rem 0', padding: 0 }} />
        <p>
          Experience the magic of Goa with Astir Passage Pvt Ltd. Goa is a dazzling blend of sun-kissed beaches, Portuguese heritage, and lively culture. Relax on golden sands, explore historic churches and forts, and savor the flavors of authentic Goan cuisine. Whether you’re seeking adventure with water sports, exploring spice plantations, or enjoying the vibrant nightlife, Goa promises memories to last a lifetime.
        </p>
        <p>
          Let us design your perfect Goan escape—browse our exclusive tours and start your journey today.
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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
                background: i === currentImageIndex ? '#8B0000' : 'rgba(255, 255, 255, 0.6)',
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
        <p style={{ fontWeight: '700', fontSize: '1.1rem', margin: '0 0 0.5rem 0', color: '#8B0000' }}>
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

export default Goa;
