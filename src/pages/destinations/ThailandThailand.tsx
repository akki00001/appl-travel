import React from 'react';

const tourCards = [
  {
    duration: '6 days & 5 nights',
    rating: 5.0,
    ratingCount: 1100,
    title: 'Phuket Krabi | A Flights Inclusive DEAL',
    itinerary: '2D Krabi • 4D Phuket • ...+1',
    originalPrice: 'INR 1,08,383',
    discountAmount: 'INR 43,483',
    finalPrice: 'INR 64,900',
    image: '/images/pexels-suraphat-937465.jpg',
  },
  {
    duration: '8 days & 7 nights',
    rating: 4.8,
    ratingCount: 2100,
    title: 'Bangkok Phuket Krabi | FREE 4 Island Tour In Krabi',
    itinerary: '2D Bangkok • 3D Phuket • 3D Krabi',
    originalPrice: 'INR 80,061',
    discountAmount: 'INR 36,071',
    finalPrice: 'INR 43,990',
    image: '/images/pexels-javon-swaby-197616-2797526.jpg',
  },
  {
    duration: '5 days & 4 nights',
    rating: 4.0,
    ratingCount: 23,
    title: 'Phuket Luxury Retreat With FREE James Bond Island Tour',
    itinerary: '5D Phuket',
    originalPrice: 'INR 74,100',
    discountAmount: 'INR 35,100',
    finalPrice: 'INR 39,000',
    image: '/images/pexels-freestockpro-1929611.jpg',
  },
];

const ThailandPage: React.FC = () => {
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
          backgroundImage: 'url(/images/pexels-streetwindy-2108831.jpg)',
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
            Discover Magical Thailand
          </h1>
          <p style={{ fontSize: '1.3rem', margin: '1.2rem 0 2rem', fontWeight: 400 }}>
            From vibrant Bangkok to serene beaches and lush jungles—find your perfect Thailand adventure with us.
          </p>
          <button
            style={{
              background: '#ffb300',
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
            onMouseOver={e => (e.currentTarget.style.background = '#ff9800')}
            onMouseOut={e => (e.currentTarget.style.background = '#ffb300')}
          >
            Explore Tours
          </button>
        </div>
      </div>

      <div style={{ textAlign: 'left', marginLeft: '5%', marginRight: '5%', padding: 0 }}>
        <h1 style={{ color: '#8B0000', fontWeight: 'bold', marginTop: '2rem', marginBottom: '2rem', padding: 0 }}>
          Thailand Tour Packages, Explore the Magic of Thailand with Our Customized Tour Packages
        </h1>
        <hr style={{ margin: '2rem 0', padding: 0 }} />
        <h3 style={{ fontWeight: 'bold', margin: '2rem 0 0 0', padding: 0 }}>Thailand Tour Packages</h3>
        <p style={{ margin: '0 0 2rem 0', padding: 0 }}>
          Thailand Tour Packages.Thailand was previously known as Siam and it is situated in the middle of the Indochinese peninsula within Mainland Southeast Asia. There are numerous tourist destinations in Thailand which will provide entertainment to the max. Some of the most famous sites include the Grand Palace, Wat Arun, Wat Pho, Golden Buddha, Wat Chedi Luang among others. These are must-see locations in Thailand. In addition, Thailand has plenty to do for tourists such as the water sports of snorkeling, Spa and Thai food. Thailand is also famous for its lively and vibrant nightlife. Visit this exciting location with top vacation packages for Thailand tour on EaseMyTrip.com and spend your time in the vibrant city and capture unforgettable memories which you will treasure for a long time.
        </p>
        <h3 style={{ fontWeight: 'bold', margin: '2rem 0 2rem 0', padding: 0 }}>Elegant Thailand Holiday Overview</h3>
        <p style={{ margin: '2rem 0 2rem 0', padding: 0 }}>
          Thailand is among the most visited tourist destinations with travelers from all over the world because it has a variety of stunning landscapes and entertainment options. It doesn’t matter if it’s gorgeous rural villages or soaring structures, Thailand is an extremely attractive destination that always surprises tourists. If you are a fan of shopping, then the nation is awash with a myriad of shopping malls, as well as local markets where you can buy stunning souvenirs.
        </p>
        <p style={{ margin: '2rem 0', padding: 0 }}>
          If you’ve set out to plan your Thailand vacation, then making arrangements for your holiday package online through EaseMyTrip is the most efficient choice for a lifetime experience. If it’s a solo couple, couple, group or family vacation we’ve created a range of Thailand holiday packages that start at INR 11,291 to suit your ever-changing needs.
        </p>
        <p style={{ margin: '2rem 0', padding: 0 }}>
          With these tours you will be able to choose from a variety of carefully-planned itineraries that are easily modified or customized based on your personal preferences and budget. In addition you will also be able to take a take a look at the other amenities, inclusions as well as flight facility availability along with other terms and conditions. We provide our customers with incredible deals and discounts that will make your trip worth every cent. When you book Thailand vacation packages online, you can add your own choice as well as the luxury hotel.
        </p>
        <p style={{ margin: '2rem 0', padding: 0 }}>
          Are you prepared for a wonderful vacation to Thailand? If yes, then make your Thailand holiday packages right now on EaseMyTrip for a trip across the globe with ease.
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
              fontFamily: 'Arial, sans-serif',
            }}
          >
            <img
              src={card.image}
              alt={card.title}
              style={{ width: '100%', height: '180px', objectFit: 'cover', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
            />
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '1rem 1.5rem 0 1.5rem',
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
            <h2 style={{ fontWeight: '700', fontSize: '1.1rem', padding: '0 1.5rem', margin: '0.5rem 0' }}>
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
              <span style={{ textDecoration: 'line-through', color: '#999', fontWeight: '400', marginRight: '0.5rem' }}>
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

export default ThailandPage;
