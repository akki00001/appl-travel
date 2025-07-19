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
      <form className="row g-3 align-items-end">
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
            />
            <span className="input-group-text bg-white border-start-0"><FaUser /></span>
          </div>
        </div>

        {/* Search Button */}
        <div className="col-auto">
          <button type="submit" className="btn btn-danger px-4 py-2 d-flex align-items-center gap-2">
            Search <FaSearch />
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
