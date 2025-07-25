import React from 'react';

interface RatingsCount {
  '1': number;
  '2': number;
  '3': number;
  '4': number;
  '5': number;
}

interface RatingSummaryProps {
  title: string;
  totalReviews: number;
  averageRating: number;
  countriesCount: number;
  ratingsCount: RatingsCount;
}

const starSizeSmall = 20;
const starSizeLarge = 32;

const starStyle = (size: number) => ({
  color: '#008060', // green color for stars
  fontSize: size,
  margin: '0 2px',
});

const barContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  margin: '0.25rem 0',
};

const barBackgroundStyle = {
  flex: 1,
  height: '12px',
  backgroundColor: '#e0e0e0',
  borderRadius: '6px',
  overflow: 'hidden',
};

const barFillStyle = (widthPercent: number) => ({
  height: '100%',
  width: `${widthPercent}%`,
  backgroundColor: '#f97316', // orange color
  borderRadius: '6px 0 0 6px',
});

const RatingSummary: React.FC<RatingSummaryProps> = ({
  title,
  totalReviews,
  averageRating,
  countriesCount,
  ratingsCount,
}) => {
  // Calculate max count for bar scaling
  const maxCount = Math.max(...Object.values(ratingsCount), 1);

  // Helper to render stars in arc shape
  // We'll use Unicode stars and position them with relative positioning and transform
  // The middle star is bigger and centered, others arranged in arc

  const stars = [1, 2, 3, 4, 5];

  const starPositions = [
    { left: '0%', top: '20px', fontSize: starSizeSmall },
    { left: '20%', top: '0px', fontSize: starSizeSmall },
    { left: '40%', top: '-10px', fontSize: starSizeLarge },
    { left: '60%', top: '0px', fontSize: starSizeSmall },
    { left: '80%', top: '20px', fontSize: starSizeSmall },
  ];

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: 500, margin: '62px auto', textAlign: 'center' }}>
      <hr style={{ border: 'none', borderTop: '2px solid #ccc', marginBottom: '1rem', width: '60%' }} />
      <h2 style={{ fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '0.5rem' }}>{title}</h2>
      <p style={{ marginBottom: '1rem' }}>Reviews({totalReviews.toLocaleString()})</p>
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ position: 'relative', width: '120px', height: '130px' }}>
          {stars.map((star, i) => (
            <span
              key={star}
              style={{
                position: 'absolute',
                left: starPositions[i].left,
                top: starPositions[i].top,
                color: '#008060',
                fontSize: starPositions[i].fontSize,
                userSelect: 'none',
              }}
              aria-label={`${star} star`}
            >
              ★
            </span>
          ))}
          <div
            style={{
              position: 'absolute',
              top: '30px',
              left: '50%',
              transform: 'translateX(-50%)',
              fontWeight: 'bold',
              fontSize: '2rem',
              color: '#008060',
              userSelect: 'none',
            }}
          >
            {averageRating.toFixed(1)}
          </div>
          <a
            href="#"
            style={{
              position: 'absolute',
              top: '75px',
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: '0.875rem',
              color: '#008060',
              textDecoration: 'underline',
              cursor: 'pointer',
            }}
          >
            From {countriesCount}+ countries
          </a>
        </div>
        <div style={{ flex: 1 }}>
          {stars
            .slice()
            .reverse()
            .map((star) => {
              const count = ratingsCount[star.toString() as keyof RatingsCount];
              const widthPercent = (count / maxCount) * 100;
              return (
                <div key={star} style={barContainerStyle}>
                  <span style={{ display: 'flex', alignItems: 'center', width: '40px', fontSize: '0.875rem' }}>
                    <span style={{ color: '#fbbf24', marginRight: '4px' }}>★</span>
                    {star}
                  </span>
                  <div style={barBackgroundStyle}>
                    <div style={barFillStyle(widthPercent)} />
                  </div>
                  <span style={{ width: '50px', textAlign: 'right', fontSize: '0.875rem', userSelect: 'none' }}>
                    {count >= 1000 ? (count / 1000).toFixed(1) + 'K' : count}
                  </span>
                </div>
              );
            })}
        </div>
      </div>
    </div>
)};

export default RatingSummary;
