import React from 'react';

const LadakhTourCards: React.FC = () => {
  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '0.5rem', padding: '1rem' }}>
        <div style={{ gridColumn: '1 / 2', gridRow: '1 / 3' }}>
          <img src="/images/ladakh/01.jpg" alt="Ladakh" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0.5rem' }} />
        </div>
        <img src="/images/ladakh/02.jpg" alt="Destinations" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0.5rem' }} />
        <img src="/images/ladakh/03.jpg" alt="Stays" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0.5rem' }} />
        <img src="/images/ladakh/04.jpg" alt="Activity" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0.5rem' }} />
        <div style={{ position: 'relative' }}>
          <img src="/images/ladakh/05.jpg" alt="Sightseeing" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0.5rem' }} />
          <button style={{ position: 'absolute', bottom: '1rem', right: '1rem', background: 'white', border: '1px solid #ddd', padding: '0.5rem 1rem', borderRadius: '0.5rem', cursor: 'pointer' }}>
            View All Images
          </button>
        </div>
      </div>

      <div style={{ padding: '1rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Leh Ladakh Expedition</h1>
        <hr />
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '1rem 0' }}>
          <span style={{ background: '#ffc107', color: '#333', padding: '0.25rem 0.75rem', borderRadius: '0.5rem', fontWeight: 'bold' }}>6D/5N</span>
          <span>2 Days in Leh</span>
          <span>1 Day in Nubra Valley</span>
          <span>1 Day in Pangong Tso</span>
          <span>2 Days in Leh</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <p>✔️ Transfer Included</p>
            <p>✔️ Stay Included</p>
            <p>✔️ Meals Included</p>
            <p>✔️ Sightseeing Included</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>INR 18,800 <span style={{ fontSize: '1rem', color: 'gray', textDecoration: 'line-through' }}>INR 27,500</span></p>
            <p style={{ color: 'gray' }}>Per Adult</p>
            <button style={{ background: '#ff7f00', color: 'white', border: 'none', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', fontWeight: 'bold', cursor: 'pointer', marginTop: '0.5rem' }}>
              Send Enquiry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LadakhTourCards;