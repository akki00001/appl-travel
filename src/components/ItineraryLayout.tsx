import React, { useState, ReactNode } from 'react';

interface Itinerary {
  title: string;
  duration: string;
  locations: string;
  price: string;
  overview: string;
  itinerary: {
    day: number;
    title: string;
    details: string;
    image: string;
  }[];
  policies: string[];
  summary: string;
}

interface Props {
  itinerary: Itinerary;
  children: ReactNode;
}

const ItineraryLayout: React.FC<Props> = ({ itinerary, children }) => {
  const [activeTab, setActiveTab] = useState<'Itinerary' | 'Policies' | 'Summary'>('Itinerary');
  const [selectedDay, setSelectedDay] = useState<number>(1);

  const renderDayCard = (day: number) => {
    const dayData = itinerary.itinerary.find((item) => item.day === day);
    if (!dayData) return null;

    return (
      <section
        key={day}
        style={{
          background: '#fff',
          padding: '1rem',
          marginBottom: '1rem',
          borderRadius: '0.5rem',
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
        }}
      >
        <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Day {dayData.day}: {dayData.title}</h3>
        <p style={{ padding: '0.5rem 0', fontSize: '0.95rem' }}>{dayData.details}</p>
        <img src={dayData.image} alt={dayData.title} style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '0.5rem', marginTop: '1rem' }} />
      </section>
    );
  };

  return (
    <div style={{ fontFamily: 'sans-serif', background: '#f9f9f9' }}>
      {children}
      <div style={{ background: '#fff', padding: '1.5rem', borderBottom: '1px solid #ddd' }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 'bold' }}>{itinerary.title}</h1>
        <p style={{ color: 'gray' }}>{itinerary.duration} • {itinerary.locations}</p>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          {['Itinerary', 'Policies', 'Summary'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as typeof activeTab)}
              style={{
                background: 'none',
                border: 'none',
                paddingBottom: '0.5rem',
                fontWeight: 600,
                color: activeTab === tab ? '#007bff' : '#555',
                borderBottom: activeTab === tab ? '2px solid #007bff' : 'none',
                cursor: 'pointer',
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', gap: '2rem', padding: '2rem' }}>
        <div style={{ width: '180px', background: '#fff', padding: '1rem', borderRadius: '0.5rem', height: 'fit-content' }}>
          <h3 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>Day Plan</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {itinerary.itinerary.map(({ day, title }) => (
              <li
                key={day}
                onClick={() => setSelectedDay(day)}
                style={{
                  marginBottom: '0.5rem',
                  background: selectedDay === day ? '#333' : 'transparent',
                  color: selectedDay === day ? '#fff' : '#333',
                  borderRadius: '1rem',
                  padding: '0.4rem 0.8rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              >
                Day {day}
              </li>
            ))}
          </ul>
        </div>

        <div style={{ flex: 2 }}>
          {activeTab === 'Itinerary' && renderDayCard(selectedDay)}

          {activeTab === 'Policies' && (
            <section style={{ background: '#fff', padding: '1rem', borderRadius: '0.5rem' }}>
              <h3>Booking & Cancellation Policies</h3>
              <ul style={{ paddingLeft: '1.25rem' }}>
                {itinerary.policies.map((policy, index) => (
                  <li key={index}>✔️ {policy}</li>
                ))}
              </ul>
            </section>
          )}

          {activeTab === 'Summary' && (
            <section style={{ background: '#fff', padding: '1rem', borderRadius: '0.5rem' }}>
              <h3>Tour Summary</h3>
              <p>{itinerary.summary}</p>
            </section>
          )}
        </div>

        <aside style={{ flex: 1, background: '#fff', padding: '1rem', borderRadius: '0.5rem', height: 'fit-content' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>₹{itinerary.price} <span style={{ fontSize: '0.9rem', color: '#777' }}>per adult</span></h3>
          <button style={{ width: '100%', background: '#007bff', color: '#fff', padding: '0.75rem', marginTop: '1rem', border: 'none', borderRadius: '0.5rem', fontWeight: 600 }}>Book Now</button>

          <div style={{ marginTop: '1.5rem' }}>
            <h4>Apply Coupon</h4>
            <input type="text" placeholder="Enter Coupon Code" style={{ width: '100%', padding: '0.5rem', marginBottom: '0.5rem', borderRadius: '0.4rem', border: '1px solid #ccc' }} />
            <p>🔥 Use <strong>LADAKH10</strong> to save ₹1,000</p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ItineraryLayout;
