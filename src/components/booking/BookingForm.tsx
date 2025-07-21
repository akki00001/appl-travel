import React, { useState } from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaUser, FaSearch } from 'react-icons/fa';
import { MdHotel, MdRestaurant, MdDirectionsCar, MdLocalActivity } from 'react-icons/md';
const tabs = [
  { id: 'tour', label: 'Tour', icon: <FaMapMarkerAlt /> },
  { id: 'hotel', label: 'Hotel', icon: <MdHotel /> },
  { id: 'restaurant', label: 'Restaurant', icon: <MdRestaurant /> },
  { id: 'rental', label: 'Rental', icon: <MdDirectionsCar /> },
  { id: 'activity', label: 'Activity', icon: <MdLocalActivity /> },
  { id: 'carRental', label: 'Car Rental', icon: <MdDirectionsCar /> },
];

const BookingForm: React.FC = () => {
  const [activeTab, setActiveTab] = useState('tour');
  const [destination, setDestination] = useState('');
  const [checkin, setCheckin] = useState('');
  const [checkout, setCheckout] = useState('');
  const [guest, setGuest] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!destination || !checkin || !checkout || !guest) {
      alert('Please fill in all fields.');
      return;
    }

    setIsSubmitting(true);

    const formData = {
      activeTab,
      destination,
      checkin,
      checkout,
      guest,
    };

    try {
      const response = await fetch('http://localhost:5000/send-booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitting(false);
        setShowThankYou(true);
        // Reset form
        setDestination('');
        setCheckin('');
        setCheckout('');
        setGuest('');
      } else {
        setIsSubmitting(false);
        alert('Failed to send email. Please try again later.');
      }
    } catch (error) {
      setIsSubmitting(false);
      alert('Failed to send email. Please try again later.');
      console.error(error);
    }
  };

  return (
    <div className="bg-white rounded shadow p-4" style={{ paddingTop: '20px' }}>
      {/* Tabs */}
      <ul className="nav nav-tabs mb-4">
        {tabs.map((tab) => (
          <li className="nav-item" key={tab.id}>
            <button
              className={`nav-link d-flex align-items-center gap-2 ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
              type="button"
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          </li>
        ))}
      </ul>

      {/* Form Fields */}
      <form className="row g-3 align-items-end" onSubmit={handleSubmit}>
        {/* Destination */}
        <div className="col">
          <label htmlFor="destination" className="form-label fw-semibold">Destinations:</label>
          <div className="input-group">
            <span className="input-group-text bg-white border-end-0"><FaMapMarkerAlt /></span>
            <input
              type="text"
              id="destination"
              className="form-control border-start-0"
              placeholder="Where are you going . . ."
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>
        </div>

        {/* Check In */}
        <div className="col">
          <label htmlFor="checkin" className="form-label fw-semibold">Check In:</label>
          <div className="input-group">
            <input
              type="date"
              id="checkin"
              className="form-control"
              value={checkin}
              onChange={(e) => setCheckin(e.target.value)}
            />
            <span className="input-group-text bg-white border-start-0"><FaCalendarAlt /></span>
          </div>
        </div>

        {/* Check Out */}
        <div className="col">
          <label htmlFor="checkout" className="form-label fw-semibold">Check Out:</label>
          <div className="input-group">
            <input
              type="date"
              id="checkout"
              className="form-control"
              value={checkout}
              onChange={(e) => setCheckout(e.target.value)}
            />
            <span className="input-group-text bg-white border-start-0"><FaCalendarAlt /></span>
          </div>
        </div>

        {/* Guest */}
        <div className="col">
          <label htmlFor="guest" className="form-label fw-semibold">Guest:</label>
          <div className="input-group">
            <input
              type="text"
              id="guest"
              className="form-control"
              placeholder="+ Add Guests"
              value={guest}
              onChange={(e) => setGuest(e.target.value)}
            />
            <span className="input-group-text bg-white border-start-0"><FaUser /></span>
          </div>
        </div>

        {/* Search Button */}
        <div className="col-auto">
          <button type="submit" className="btn btn-danger px-4 py-2 d-flex align-items-center gap-2" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Search'} <FaSearch />
          </button>
        </div>
      </form>

      {/* Thank You Popup */}
      {showThankYou && (
        <div className="thank-you-popup fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">Thank You!</h2>
            <p>Your submission has been received.</p>
            <button
              className="mt-4 btn btn-primary"
              onClick={() => setShowThankYou(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingForm;
