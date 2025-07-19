import React from 'react';
import '../assets/styles/components/_besttimetovisit.scss';

const seasons = [
  {
    title: 'Summer in Bali',
    desc: 'The best time to visit Bali in summer is from May to August,Bali - Astir Passage - Tour Operator India during the island’s dry season. Bali - Astir Passage - Tour Operator India This period offers sunny days, low humidity, and perfect conditions for beach activities, surfing, Bali - Astir Passage - Tour Operator India and exploring. May is ideal for fewer crowds and better prices, while June and July are great for cultural festivals like the Bali Arts Festival. The island is lush and vibrant, making it perfect for both adventure and relaxation. Bali - Astir Passage - Tour Operator India Visiting in early summer ensures a memorable experience with clear skies and calm seas. Bali - Astir Passage - Tour Operator India',
    icon: '☀️'
  },
  {
    title: 'Monsoon in Bali',
    desc: 'The best time to visit Bali during the monsoon season is in early Bali - Astir Passage - Tour Operator India December or late February to early March. During these periods, the rain isBali - Astir Passage - Tour Operator India lighter and more predictable, often falling in short afternoon bursts. Tourist crowds are smaller, making popular spots more peaceful and affordable. The lush green landscapes are at their most vibrant, offering a refreshing escape. Bali - Astir Passage - Tour Operator India With proper planning and flexibility, Bali’s monsoon season can be a beautifully serene experience.Bali - Astir Passage - Tour Operator India',
    icon: '🌧️'
  },
  {
    title: 'Winter in Bali',
    desc: 'The best time to visit Bali in winter is from December to February, when the island is warm and tropical despite the Northern Hemisphere',
    icon: '❄️'
  }
];

const BestTimeToVisit: React.FC = () => {
  return (
    <section className="best-time-section">
      <h6>Timing</h6>
      <h3>Best Time To Visit Bali</h3>
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

export default BestTimeToVisit;
