import React from 'react';

const tourCards = [
  {
    title: 'Uncover Kashmir | Journey To Nature Paradise',
    image: '/images/pexels-aashish-bhardwaj-257084-786946.jpg',
    days: 4,
    nights: 3,
    rating: 4.5,
    ratingCount: 41,
    locations: ['1D Pahalgam', '3D Srinagar'],
    extraLocationsCount: 0,
    originalPrice: 22412,
    discountAmount: 9413,
    pricePerAdult: 12999,
  },
  {
    title: 'Experience The Luxury Of Kashmir | FREE Excursion To Aru Valley',
    image: '/images/pexels-vikas-lone-825341464-32935509.jpg',
    days: 5,
    nights: 4,
    rating: 4.9,
    ratingCount: 349,
    locations: ['1D Srinagar', '1D Pahalgam', '3D Srinagar'],
    extraLocationsCount: 1,
    originalPrice: 105000,
    discountAmount: 21001,
    pricePerAdult: 83999,
  },
  {
    title: 'Highlights Of Kashmir | FREE Shikara Ride On Dal Lake',
    image: '/images/pexels-wanderinglenses-15196861.jpg',
    days: 6,
    nights: 5,
    rating: 4.4,
    ratingCount: 2400,
    locations: ['3D Srinagar', '1D Pahalgam', '2D Srinagar'],
    extraLocationsCount: 1,
    originalPrice: 31452,
    discountAmount: 11952,
    pricePerAdult: 19500,
  },
];

const jammu: React.FC = () => {
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
          backgroundImage: 'url(/images/pexels-amjed-wani-1355393378-26110235.jpg)',
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
            Discover Beautiful Kashmir
          </h1>
          <p style={{ fontSize: '1.3rem', margin: '1.2rem 0 2rem', fontWeight: 400 }}>
            From serene lakes to snowy mountains—find your perfect Kashmir adventure with us.
          </p>
          <button
            style={{
              background: '#1e90ff',
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
            onMouseOver={e => (e.currentTarget.style.background = '#187bcd')}
            onMouseOut={e => (e.currentTarget.style.background = '#1e90ff')}
          >
            Explore Tours
          </button>
        </div>
      </div>

      <div style={{ textAlign: 'left', marginLeft: '5%', marginRight: '5%', padding: 0 }}>
        <h1 style={{ color: '#8B0000', fontWeight: 'bold', marginTop: '2rem', marginBottom: '1rem', padding: 0 }}>
          Discover Paradise Kashmir
        </h1>
        <p style={{ color: '#000', marginBottom: '1rem' }}>
          Experience the magic of Kashmir with Astir Passage Pvt Ltd. Known as ‘Paradise on Earth,’ Kashmir enchants with its snow-capped mountains, tranquil lakes, and vibrant gardens. Glide on a shikara across Dal Lake, stroll through the Mughal gardens, and explore the meadows of Gulmarg and Pahalgam. Whether you seek adventure, romance, or serenity, Kashmir promises unforgettable memories.
        </p>
        <p style={{ color: '#000', marginBottom: '1rem' }}>
          Let us curate your perfect Kashmir experience—explore our handpicked tours and start your journey today.
        </p>
        <h2 style={{ color: '#8B0000', fontWeight: 'bold', marginBottom: '0.5rem' }}>
          Highlights to Inspire Your Journey
        </h2>
        <ul style={{ color: '#000', marginTop: 0, paddingLeft: '1.2rem', marginBottom: '1rem' }}>
          <li>Iconic Landmarks: Dal Lake, Mughal Gardens, Gulmarg, Pahalgam, Sonmarg</li>
          <li>Nature & Adventure: Gondola rides, trekking, skiing, houseboat stays, pony rides</li>
          <li>Cultural Experiences: Saffron fields, Kashmiri handicrafts, Wazwan cuisine, local markets</li>
          <li>Scenic Escapes: Betaab Valley, Aru Valley, Lidder River</li>
          <li>Gastronomic Delights: Rogan josh, kahwah, gushtaba, noon chai</li>
        </ul>
        <p style={{ color: '#000', marginBottom: '1rem' }}>
          Kashmir’s breathtaking beauty, rich culture, and warm hospitality make it a destination like no other. Let Astir Passage help you discover the best of Kashmir—your adventure begins here.
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

export default jammu;
