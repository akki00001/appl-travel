import React from 'react';
import '../assets/styles/components/_besttimetovisit.scss';

const seasons = [
  {
    title: 'Summer (Dec – Feb)',
    desc: 'Best for beaches and coastal cities like Sydney, Gold Coast & Melbourne. Perfect for surfing, sunbathing, and outdoor festivals.',
    icon: '☀️',
  },
  {
    title: 'Autumn (Mar – May)',
    desc: 'Cooler temperatures, fewer crowds. Ideal for exploring vineyards, national parks, and wildlife experiences.',
    icon: '🍂',
  },
  {
    title: 'Winter (Jun – Aug)',
    desc: 'Great for snow sports in the Snowy Mountains or enjoying dry, sunny weather in the north (like Cairns).',
    icon: '❄️',
  },
];

const BestTimeToVisitAustralia: React.FC = () => {
  return (
    <section className="best-time-section">
      <h6>Timing</h6>
      <h3>Best Time To Visit Australia</h3>
      <hr />
      <div className="season-grid">
        {seasons.map((season, idx) => (
          <div className="season-card" key={idx}>
            <div className="icon">{season.icon}</div>
            <h5>{season.title}</h5>
            <p>{season.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestTimeToVisitAustralia;
