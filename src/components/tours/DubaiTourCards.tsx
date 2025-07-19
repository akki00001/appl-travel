import React from 'react';

const DubaiTourCards: React.FC = () => {
  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '0.5rem', padding: '1rem' }}>
        <div style={{ gridColumn: '1 / 2', gridRow: '1 / 3' }}>
          <img src="/images/dubai/01.jpg" alt="Dubai" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0.5rem' }} />
        </div>
        <img src="/images/dubai/02.jpg" alt="Destinations" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0.5rem' }} />
        <img src="/images/dubai/03.jpg" alt="Stays" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0.5rem' }} />
        <img src="/images/dubai/04.jpg" alt="Activity" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0.5rem' }} />
        <div style={{ position: 'relative' }}>
          <img src="/images/dubai/05.jpg" alt="Sightseeing" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0.5rem' }} />
          <button style={{ position: 'absolute', bottom: '1rem', right: '1rem', background: 'white', border: '1px solid #ddd', padding: '0.5rem 1rem', borderRadius: '0.5rem', cursor: 'pointer' }}>
            View All Images
          </button>
        </div>
      </div>
    </div>
  );
};

export default DubaiTourCards;