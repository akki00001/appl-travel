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
    title: 'Classic Italy Discovery',
    images: [
      '/images/rome-italy-europe-travel-tourism-scaled.webp',
      '/images/Positano-Italy-1-1129x631.jpg.webp',
      '/images/canal-6519196__340.webp',
    ],
    daysRange: '6-10 days',
    priceRange: '₹1,35,000 and above',
    highlights: [
      'Rome: Colosseum, Trevi Fountain, Vatican',
      'Florence: Duomo, Ponte Vecchio, Uffizi Gallery',
      'Venice: Canals, Piazza San Marco',
    ],
    activities: [
      'City tours',
      'museum visits',
      'shopping',
      'hiking in Cinque Terre',
      'beach time on Amalfi Coast',
    ],
    specialNotes:
      'Rich history, art, culture, and cuisine. Best visited in 7-10 days for a comprehensive experience.',
  },
  {
    title: 'Northern Treasures',
    images: [
      '/images/canal-6519196__340.webp',
      '/images/Positano-Italy-1-1129x631.jpg.webp',
      '/images/rome-italy-europe-travel-tourism-scaled.webp',
    ],
    daysRange: '6-10 days',
    priceRange: '₹1,35,000 and above',
    highlights: [
      'Venice: Canals, Piazza San Marco',
      'Milan: Duomo Terraces, Shopping',
      'Pisa: Leaning Tower',
    ],
    activities: [
      'City tours',
      'museum visits',
      'shopping',
      'hiking in Cinque Terre',
      'beach time on Amalfi Coast',
    ],
    specialNotes:
      'Rich history, art, culture, and cuisine. Best visited in 7-10 days for a comprehensive experience.',
  },
  {
    title: 'Southern Charms',
    images: [
      '/images/Positano-Italy-1-1129x631.jpg.webp',
      '/images/canal-6519196__340.webp',
      '/images/rome-italy-europe-travel-tourism-scaled.webp',
    ],
    daysRange: '6-10 days',
    priceRange: '₹1,35,000 and above',
    highlights: ['Pisa: Leaning Tower', 'Amalfi Coast, Naples, Pompeii'],
    activities: [
      'City tours',
      'museum visits',
      'shopping',
      'hiking in Cinque Terre',
      'beach time on Amalfi Coast',
    ],
    specialNotes:
      'Rich history, art, culture, and cuisine. Best visited in 7-10 days for a comprehensive experience.',
  },
];

const ItalyPage: React.FC = () => {
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
          backgroundImage: 'url(/images/pexels-fineasanton-2975228.jpg)',
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
            Discover Timeless Italy
          </h1>
          <p style={{ fontSize: '1.3rem', margin: '1.2rem 0 2rem', fontWeight: 400 }}>
            Embark on an unforgettable journey through the heart of Italy with Astir Passage Pvt Ltd.
          </p>
          <button
            style={{
              background: '#7F0203',
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
            onMouseOver={e => (e.currentTarget.style.background = '#5a0101')}
            onMouseOut={e => (e.currentTarget.style.background = '#7F0203')}
          >
            Start Your Italy Adventure
          </button>
        </div>
      </div>

      <div style={{ textAlign: 'left', marginLeft: '5%', marginRight: '5%', padding: 0 }}>
        <h2 style={{ color: '#7F0203', fontWeight: 'bold', marginTop: '2rem', marginBottom: '1rem' }}>
          Discover Timeless Italy
        </h2>
        <p style={{ color: 'black', fontWeight: 'normal', marginBottom: '1.5rem', padding: 0, fontSize: '1.1rem', lineHeight: '1.6' }}>
          Embark on an unforgettable journey through the heart of Italy with Astir Passage Pvt Ltd. Italy is a captivating blend of ancient wonders, artistic treasures, and breathtaking landscapes. Wander through the storied streets of Rome, marvel at the grandeur of the Colosseum, and toss a coin into the Trevi Fountain for luck. Glide along the romantic canals of Venice, where gondolas drift past centuries-old palazzos and lively piazzas.
        </p>
        <p style={{ color: 'black', fontWeight: 'normal', marginBottom: '1.5rem', padding: 0, fontSize: '1.1rem', lineHeight: '1.6' }}>
          Lose yourself in the Renaissance splendor of Florence, home to masterpieces by Michelangelo and Da Vinci, and savor the rolling vineyards and sun-kissed hills of Tuscany. Explore the colorful villages of Cinque Terre perched above the sparkling Mediterranean, or relax along the glamorous Amalfi Coast, where dramatic cliffs meet turquoise seas.
        </p>
        <p style={{ color: 'black', fontWeight: 'normal', marginBottom: '1.5rem', padding: 0, fontSize: '1.1rem', lineHeight: '1.6' }}>
          Whether you crave history, art, culinary delights, or natural beauty, Italy promises experiences to cherish for a lifetime. Let us craft your perfect Italian adventure—explore our exclusive tours and start planning your dream escape today.
        </p>
        <h3 style={{ color: '#7F0203', fontWeight: 'bold', marginTop: '2rem', marginBottom: '1rem' }}>
          Highlights to Inspire Your Journey
        </h3>
        <ul style={{ color: 'black', fontSize: '1.1rem', lineHeight: '1.6', paddingLeft: '1.2rem' }}>
          <li><strong>Iconic Landmarks:</strong> Colosseum, Roman Forum, Trevi Fountain, Pantheon, Leaning Tower of Pisa, Duomo di Milano, St. Mark’s Basilica</li>
          <li><strong>Cultural Experiences:</strong> Renaissance art in Florence, gondola rides in Venice, opera in Verona, Tuscan wine tastings</li>
          <li><strong>Natural Wonders:</strong> Amalfi Coast, Cinque Terre, Lake Como, Dolomites, Sardinia’s beaches</li>
          <li><strong>Gastronomic Delights:</strong> Authentic pizza in Naples, handmade pasta in Bologna, gelato in Rome, world-class wines in Tuscany</li>
          <li><strong>Hidden Gems:</strong> Medieval towns of Siena and San Gimignano, the colorful markets of Palermo, tranquil lakeside villages</li>
        </ul>
        <p style={{ color: 'black', fontWeight: 'normal', marginTop: '2rem', padding: 0, fontSize: '1.1rem', lineHeight: '1.6' }}>
          Italy’s rich heritage, stunning vistas, and vibrant lifestyle make it a destination like no other. Let Astir Passage help you discover the best of Italy—your adventure begins here.
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
                background: i === currentImageIndex ? '#7F0203' : 'rgba(255, 255, 255, 0.6)',
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
        <p style={{ fontWeight: '700', fontSize: '1.1rem', margin: '0 0 0.5rem 0', color: '#7F0203' }}>
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
            backgroundColor: '#7F0203',
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

export default ItalyPage;
