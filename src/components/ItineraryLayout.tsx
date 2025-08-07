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
  const [couponCode, setCouponCode] = useState<string>('');
  const [discount, setDiscount] = useState<number>(0);
  const [message, setMessage] = useState<string>('');
  const [showBookingForm, setShowBookingForm] = useState<boolean>(false);

  const validCoupon = 'LADAKH10';
  const discountAmount = 1000;

  const handleApplyCoupon = () => {
    if (couponCode.trim().toUpperCase() === validCoupon) {
      if (discount === 0) {
        setDiscount(discountAmount);
        setMessage(`Coupon applied! You saved ₹${discountAmount}.`);
      } else {
        setMessage('Coupon already applied.');
      }
    } else {
      setMessage('Invalid coupon code.');
      setDiscount(0);
    }
  };

  const finalPrice = Math.max(0, parseInt(itinerary.price.replace(/,/g, '')) - discount);

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

  const handleBookNowClick = () => {
    setShowBookingForm(true);
  };

  const handleCloseBookingForm = () => {
    setShowBookingForm(false);
  };

  return (
    <div style={{ fontFamily: 'sans-serif', background: '#f9f9f9' }}>
      {children}
      <div style={{ background: '#fff', padding: '1.5rem', borderBottom: '1px solid #ddd' }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 'bold' }}>{itinerary.title}</h1>
        <p style={{ color: 'gray' }}>{itinerary.duration} • {itinerary.locations}</p>
        <div className="itinerary-tabs">
          {['Itinerary', 'Policies', 'Summary'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as typeof activeTab)}
              className={`itinerary-tab-button ${activeTab === tab ? 'active' : ''}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="itinerary-container">
        <div className="itinerary-day-plan">
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

        <div className="itinerary-main-content">
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

        <aside className="itinerary-aside">
          <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>₹{finalPrice.toLocaleString()} <span style={{ fontSize: '0.9rem', color: '#777' }}>per adult</span></h3>
          <button
            onClick={handleBookNowClick}
            style={{ width: '100%', background: '#007bff', color: '#fff', padding: '0.75rem', marginTop: '1rem', border: 'none', borderRadius: '0.5rem', fontWeight: 600 }}
          >
            Book Now
          </button>

          <div style={{ marginTop: '1.5rem' }}>
            <h4>Apply Coupon</h4>
            <input
              type="text"
              placeholder="Enter Coupon Code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              style={{ width: '100%', padding: '0.5rem', marginBottom: '0.5rem', borderRadius: '0.4rem', border: '1px solid #ccc' }}
            />
            <button
              onClick={handleApplyCoupon}
              style={{ background: '#007bff', color: '#fff', padding: '0.5rem 1rem', border: 'none', borderRadius: '0.4rem', cursor: 'pointer' }}
            >
              Apply
            </button>
            {message && <p style={{ marginTop: '0.5rem', color: discount > 0 ? 'green' : 'red' }}>{message}</p>}
            <p>🔥 Use <strong>LADAKH10</strong> to save ₹1,000</p>
          </div>
        </aside>
      </div>

      {showBookingForm && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
        >
          <div
            style={{
              background: '#fff',
              padding: '2rem',
              borderRadius: '0.5rem',
              width: '90%',
              maxWidth: '400px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
              position: 'relative',
            }}
          >
            <button
              onClick={handleCloseBookingForm}
              style={{
                position: 'absolute',
                top: '0.5rem',
                right: '0.5rem',
                background: 'transparent',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
              }}
              aria-label="Close booking form"
            >
              &times;
            </button>
            <h2 style={{ marginBottom: '1rem' }}>Booking Form</h2>
            <form>
              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="name" style={{ display: 'block', marginBottom: '0.25rem' }}>Name</label>
                <input type="text" id="name" name="name" style={{ width: '100%', padding: '0.5rem', borderRadius: '0.3rem', border: '1px solid #ccc' }} />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="email" style={{ display: 'block', marginBottom: '0.25rem' }}>Email</label>
                <input type="email" id="email" name="email" style={{ width: '100%', padding: '0.5rem', borderRadius: '0.3rem', border: '1px solid #ccc' }} />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="phone" style={{ display: 'block', marginBottom: '0.25rem' }}>Phone</label>
                <input type="tel" id="phone" name="phone" style={{ width: '100%', padding: '0.5rem', borderRadius: '0.3rem', border: '1px solid #ccc' }} />
              </div>
              <button
                type="submit"
                style={{
                  background: '#007bff',
                  color: '#fff',
                  padding: '0.75rem',
                  border: 'none',
                  borderRadius: '0.5rem',
                  width: '100%',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Submit Booking
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItineraryLayout;
