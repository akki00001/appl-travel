import React from 'react';
import '../assets/styles/components/_besttimetovisit.scss';

const seasons = [
  {
    title: 'Dry Season (March – October)',
    desc: 'This is the best time to visit Malaysia’s western coast (like Langkawi, Penang, Kuala Lumpur) with sunny weather, less rain, and ideal beach conditions. Perfect for sightseeing, island hopping, and cultural festivals.',
    icon: '☀️'
  },
  {
    title: 'Wet Season (November – February)',
    desc: 'The eastern side of Malaysia (like Tioman Island and Perhentian Islands) experiences heavy rain. But this is a great time to explore the west coast and enjoy lush greenery. Fewer crowds and great hotel deals!',
    icon: '🌧️'
  },
  {
    title: 'Year-Round Cities',
    desc: 'Urban cities like Kuala Lumpur and Penang are great all year round. They offer festivals, shopping, street food, and cultural experiences—regardless of the season.',
    icon: '🏙️'
  }
];

const BestTimeToVisitMalaysia: React.FC = () => {
  return (
    <section className="best-time-section">
      <h6>Timing</h6>
      <h3>Best Time To Visit Malaysia</h3>
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

export default BestTimeToVisitMalaysia;
