import React from 'react';
import '../assets/styles/components/_besttimetovisit.scss';

const seasons = [
  {
    title: 'Summer (June – August)',
    desc: 'Ideal for hiking, lake cruises, and exploring Swiss towns with pleasant temperatures and green alpine meadows.',
    icon: '☀️'
  },
  {
    title: 'Autumn (September – November)',
    desc: 'A scenic season with golden leaves, wine festivals, and fewer tourists – perfect for a peaceful escape.',
    icon: '🍂'
  },
  {
    title: 'Winter (December – February)',
    desc: 'Perfect for skiing, snowboarding, and enjoying snowy landscapes in the Alps. Magical for honeymooners.',
    icon: '❄️'
  }
];

const BestTimeToVisitSwitzerland: React.FC = () => {
  return (
    <section className="best-time-section">
      <h6>Timing</h6>
      <h3>Best Time To Visit Switzerland</h3>
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

export default BestTimeToVisitSwitzerland;
