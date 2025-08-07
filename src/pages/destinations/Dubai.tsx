import React from 'react';

const tourCards = [
  {
    duration: '6 days & 5 nights',
    rating: 4.3,
    ratingCount: 73,
    title: 'Delights Of Dubai & Abu Dhabi | Flights Inclusive Tour',
    itinerary: '2D Dubai • 4D Abu Dhabi',
    originalPrice: 'INR 84,390',
    discountAmount: 'INR 18,090',
    finalPrice: 'INR 66,300',
    image: '/images/dubai/01.jpg',
  },
  {
    duration: '7 days & 6 nights',
    rating: 4.7,
    ratingCount: 559,
    title: 'Escape To Dubai And Abu Dhabi | Luxury On The Arabian Shores',
    itinerary: '7D Dubai',
    originalPrice: 'INR 1,35,999',
    discountAmount: 'INR 19,400',
    finalPrice: 'INR 1,16,599',
    image: '/images/dubai/02.jpg',
  },
  {
    duration: '8 days & 7 nights',
    rating: 4.5,
    ratingCount: 38,
    title: 'Dubai & Abu Dhabi Luxury Honeymoon Escape | Beyond Sands & Skylines',
    itinerary: '5D Dubai • 3D Abu Dhabi • ...+1',
    originalPrice: 'INR 3,40,000',
    discountAmount: 'INR 53,080',
    finalPrice: 'INR 2,86,920',
    image: '/images/dubai/03.jpg',
  },
];

const DubaiPage: React.FC = () => {
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
          backgroundImage: 'url(/images/dubai/01.jpg)',
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
            Discover Dynamic Dubai
          </h1>
          <hr />
          <p style={{ fontSize: '1.3rem', margin: '1.2rem 0 2rem', fontWeight: 400 }}>
            From futuristic architecture to desert adventures—find your perfect Dubai experience with us.
          </p>
          <button
            style={{
              background: '#ff5722',
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
            onMouseOver={e => (e.currentTarget.style.background = '#e64a19')}
            onMouseOut={e => (e.currentTarget.style.background = '#ff5722')}
          >
            Explore Tours
          </button>
        </div>
      </div>

      <div style={{ textAlign: 'left', marginLeft: '5%', marginRight: '5%', padding: 0 }}>
        <h2 style={{ color: '#7F0203', fontWeight: 'bold', marginTop: '2rem', marginBottom: '1rem' }}>
          Discover Dazzling Dubai
        </h2>
        <hr />
        <p style={{ color: 'black', fontWeight: 'normal', marginBottom: '1.5rem', padding: 0, fontSize: '1.1rem', lineHeight: '1.6' }}>
          Embark on a journey to the City of Gold with Astir Passage Pvt Ltd. Dubai is a mesmerizing blend of futuristic skyscrapers, rich traditions, and luxurious experiences. Gaze at the world from the heights of the iconic Burj Khalifa, stroll through the vibrant souks of Old Dubai, and indulge in global shopping and gourmet delights at the Dubai Mall.
        </p>
        <p style={{ color: 'black', fontWeight: 'normal', marginBottom: '1.5rem', padding: 0, fontSize: '1.1rem', lineHeight: '1.6' }}>
          Unwind with a magical desert safari, where golden dunes stretch as far as the eye can see and evenings come alive with cultural performances and a sumptuous BBQ under the stars. Cruise along the shimmering Dubai Marina on a traditional dhow, or marvel at the dancing Dubai Fountain set against the glittering skyline.
        </p>
        <p style={{ color: 'black', fontWeight: 'normal', marginBottom: '1.5rem', padding: 0, fontSize: '1.1rem', lineHeight: '1.6' }}>
          Whether you crave adventure, family fun, or pure relaxation, Dubai offers unforgettable moments for every traveler. Let us design your perfect Dubai getaway—explore our exclusive tours and start planning your dream escape today.
        </p>
        <h3 style={{ color: '#7F0203', fontWeight: 'bold', marginTop: '2rem', marginBottom: '1rem' }}>
          Highlights to Inspire Your Journey
        </h3>
        <hr />
        <ul style={{ color: 'black', fontSize: '1.1rem', lineHeight: '1.6', paddingLeft: '1.2rem' }}>
          <li><strong>Iconic Landmarks:</strong> Burj Khalifa, Burj Al Arab, Palm Jumeirah, Dubai Frame</li>
          <li><strong>Desert Experiences:</strong> Thrilling desert safaris, camel rides, sandboarding, and Bedouin-style dinners</li>
          <li><strong>Cultural Treasures:</strong> Dubai Museum, Al Fahidi Historical Neighbourhood, Gold & Spice Souks</li>
          <li><strong>Modern Marvels:</strong> Dubai Mall, Dubai Aquarium & Underwater Zoo, Miracle Garden, Global Village</li>
          <li><strong>Family Fun:</strong> Aquaventure Waterpark, IMG Worlds of Adventure, Ski Dubai, Dubai Dolphinarium</li>
          <li><strong>Shopping & Dining:</strong> World-class malls, traditional markets, and diverse international cuisine</li>
        </ul>
        <p style={{ color: 'black', fontWeight: 'normal', marginTop: '2rem', padding: 0, fontSize: '1.1rem', lineHeight: '1.6' }}>
          Dubai’s dazzling skyline, rich heritage, and endless attractions make it a destination like no other. Let Astir Passage help you discover the best of Dubai—your adventure begins here.
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
              borderRadius: '16px',
              boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
              width: '320px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              fontFamily: 'Arial, sans-serif',
            }}
          >
            <img
              src={card.image}
              alt={card.title}
              style={{
                width: '100%',
                height: '220px',
                objectFit: 'cover',
                borderTopLeftRadius: '16px',
                borderTopRightRadius: '16px',
              }}
            />
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '6px',
                marginTop: '8px',
                marginBottom: '12px',
              }}
            >
              <div
                style={{
                  width: '8px',
                  height: '8px',
                  backgroundColor: '#ccc',
                  borderRadius: '50%',
                }}
              />
              <div
                style={{
                  width: '8px',
                  height: '8px',
                  backgroundColor: '#ccc',
                  borderRadius: '50%',
                }}
              />
              <div
                style={{
                  width: '8px',
                  height: '8px',
                  backgroundColor: '#ccc',
                  borderRadius: '50%',
                }}
              />
              <div
                style={{
                  width: '8px',
                  height: '8px',
                  backgroundColor: '#ccc',
                  borderRadius: '50%',
                }}
              />
              <div
                style={{
                  width: '8px',
                  height: '8px',
                  backgroundColor: '#ccc',
                  borderRadius: '50%',
                }}
              />
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '0 1.5rem',
                fontWeight: '600',
                fontSize: '0.9rem',
                color: '#555',
              }}
            >
              <div>{card.duration}</div>
              <div style={{ display: 'flex', alignItems: 'center', color: '#2e7d32', fontWeight: '700' }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#2e7d32"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#2e7d32"
                  style={{ width: '18px', height: '18px', marginRight: '4px' }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442a.563.563 0 01.316.96l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.563.563 0 01-.84.61L12 17.347l-4.766 2.503a.563.563 0 01-.84-.61l1.285-5.386a.563.563 0 00-.182-.556L3.293 9.357a.563.563 0 01.316-.96l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
                {card.rating} ({card.ratingCount})
              </div>
            </div>
            <h2
              style={{
                fontWeight: '700',
                fontSize: '1.1rem',
                padding: '0 1.5rem',
                margin: '0.5rem 0',
                lineHeight: '1.3',
              }}
            >
              {card.title}
            </h2>
            <div
              style={{
                backgroundColor: '#f9f1d1',
                color: '#7a6a3f',
                padding: '0.3rem 1rem',
                margin: '0 1.5rem 1rem 1.5rem',
                borderRadius: '4px',
                fontWeight: '600',
                fontSize: '0.9rem',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
              title={card.itinerary}
            >
              {card.itinerary}
            </div>
            <div
              style={{
                padding: '0 1.5rem',
                marginBottom: '1rem',
                fontWeight: '700',
                fontSize: '1.1rem',
                color: '#000',
              }}
            >
              <span
                style={{
                  textDecoration: 'line-through',
                  color: '#999',
                  fontWeight: '400',
                  marginRight: '0.5rem',
                }}
              >
                {card.originalPrice}
              </span>
              <span
                style={{
                  backgroundColor: '#d0f0c0',
                  color: '#2e7d32',
                  fontWeight: '600',
                  padding: '0.1rem 0.4rem',
                  borderRadius: '3px',
                  marginRight: '0.5rem',
                  fontSize: '0.9rem',
                }}
              >
                SAVE {card.discountAmount}
              </span>
              <span>{card.finalPrice} /Adult</span>
            </div>
            <div
              style={{
                display: 'flex',
                gap: '0.5rem',
                padding: '0 1.5rem 1.5rem 1.5rem',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <button
                style={{
                  backgroundColor: '#7F0203',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '0.8rem 1.8rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  fontSize: '1.15rem',
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

export default DubaiPage;
