import React from 'react';

const tourCards = [
  {
    title: 'Explore Japan | Journey To The Cultural Treasure Trove',
    image: '/images/tourist-places-in-japan1.webp',
    days: 6,
    nights: 5,
    rating: 4.5,
    ratingCount: 25,
    locations: ['3D Tokyo', '3D Osaka'],
    extraLocationsCount: 1,
    originalPrice: 206865,
    discountAmount: 41373,
    pricePerAdult: 165492,
  },
  {
    title: 'Jewels Of Japan | Tokyo To Osaka Discovery',
    image: '/images/tourist-places-in-japan6.webp',
    days: 7,
    nights: 6,
    rating: 5.0,
    ratingCount: 271,
    locations: ['3D Tokyo', '4D Osaka'],
    extraLocationsCount: 0,
    originalPrice: 212112,
    discountAmount: 42422,
    pricePerAdult: 169690,
  },
  {
    title: 'Discover Japan | From Tokyo Skylines To Osaka Sights',
    image: '/images/tourist-places-in-japan24.webp',
    days: 8,
    nights: 7,
    rating: 5.0,
    ratingCount: 270,
    locations: ['3D Tokyo', '5D Osaka'],
    extraLocationsCount: 1,
    originalPrice: 173550,
    discountAmount: 40050,
    pricePerAdult: 133500,
  },
];

const JapanPage: React.FC = () => {
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
          backgroundImage: 'url(/images/pexels-apasaric-2339009.jpg)',
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
            Discover Captivating Japan
          </h1>
          <p style={{ fontSize: '1.3rem', margin: '1.2rem 0 2rem', fontWeight: 400 }}>
            Embark on an enchanting journey through the Land of the Rising Sun with Astir Passage Pvt Ltd.
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
            Start Your Japan Adventure
          </button>
        </div>
      </div>

      <div style={{ textAlign: 'left', marginLeft: '5%', marginRight: '5%', padding: 0 }}>
        <h2 style={{ color: '#7F0203', fontWeight: 'bold', marginTop: '2rem', marginBottom: '1rem' }}>
          Discover Captivating Japan
        </h2>
        <p style={{ color: 'black', fontWeight: 'normal', marginBottom: '1.5rem', padding: 0, fontSize: '1.1rem', lineHeight: '1.6' }}>
          Embark on an enchanting journey through the Land of the Rising Sun with Astir Passage Pvt Ltd. Japan is a mesmerizing blend of ancient traditions and cutting-edge modernity, where serene temples nestle beside neon-lit cityscapes, and cherry blossoms frame the majestic silhouette of Mount Fuji. Wander through the bustling streets of Tokyo, experience the timeless beauty of Kyoto’s shrines and gardens, and savor the culinary delights of Osaka’s vibrant markets.
        </p>
        <p style={{ color: 'black', fontWeight: 'normal', marginBottom: '1.5rem', padding: 0, fontSize: '1.1rem', lineHeight: '1.6' }}>
          Relax in a traditional ryokan, soak in soothing onsen hot springs, and witness the artistry of geisha in historic districts. From the tranquil bamboo groves of Arashiyama to the poignant history of Hiroshima and the enchanting deer of Nara Park, Japan offers unforgettable moments at every turn.
        </p>
        <p style={{ color: 'black', fontWeight: 'normal', marginBottom: '1.5rem', padding: 0, fontSize: '1.1rem', lineHeight: '1.6' }}>
          Whether you seek cultural discovery, natural wonders, or culinary adventures, Japan promises experiences to treasure for a lifetime. Let us craft your perfect Japanese escape—explore our exclusive tours and start planning your dream adventure today.
        </p>
        <h3 style={{ color: '#7F0203', fontWeight: 'bold', marginTop: '2rem', marginBottom: '1rem' }}>
          Highlights to Inspire Your Journey
        </h3>
        <ul style={{ color: 'black', fontSize: '1.1rem', lineHeight: '1.6', paddingLeft: '1.2rem' }}>
          <li><strong>Iconic Landmarks:</strong> Mount Fuji, Tokyo Tower, Fushimi Inari Shrine, Osaka Castle, Itsukushima Shrine, Himeji Castle</li>
          <li><strong>Cultural Experiences:</strong> Tea ceremonies in Kyoto, geisha encounters in Gion, sumo wrestling in Tokyo, staying in a ryokan, bathing in onsen hot springs</li>
          <li><strong>Natural Wonders:</strong> Cherry blossoms in spring, autumn foliage in Nikko, snow-capped Japanese Alps, tranquil lakes and volcanic landscapes</li>
          <li><strong>Urban Delights:</strong> Shibuya Crossing and Harajuku in Tokyo, Dotonbori in Osaka, shopping in Ginza, nightlife in Shinjuku</li>
          <li><strong>Historic Sites:</strong> Ancient temples of Nara, Hiroshima Peace Memorial Park, traditional villages of Takayama and Shirakawa-go</li>
          <li><strong>Culinary Adventures:</strong> Sushi in Tsukiji Market, okonomiyaki in Osaka, kaiseki dining in Kyoto, street food in Fukuoka</li>
        </ul>
        <p style={{ color: 'black', fontWeight: 'normal', marginTop: '2rem', padding: 0, fontSize: '1.1rem', lineHeight: '1.6' }}>
          Japan’s harmonious blend of old and new, breathtaking scenery, and warm hospitality make it a destination like no other. Let Astir Passage help you discover the best of Japan—your adventure begins here.
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
                  backgroundColor: '#f97316',
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

export default JapanPage;
