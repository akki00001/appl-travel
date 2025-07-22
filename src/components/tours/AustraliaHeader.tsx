import React from 'react';
import './AustraliaHeader.scss';

const AustraliaHeader: React.FC = () => {
  return (
    <div className="australia-header">
      <div className="header-grid">
        <div className="main-img">
          <img src="/images/Australia/01.jpg" alt="Main" />
        </div>
        <div className="side-img">
          <img src="/images/Australia/02.jpg" alt="Destinations" />
          <span className="caption">Destinations</span>
        </div>
        <div className="side-img">
          <img src="/images/Australia/03.jpg" alt="Stays" />
          <span className="caption">Stays</span>
        </div>
        <div className="side-img">
          <img src="/images/Australia/04.jpg" alt="Sightseeing" />
          <span className="caption">Activity & Sightseeing</span>
        </div>
        <div className="side-img view-all">
          <img src="/images/Australia/05.jpg" alt="Gallery" />
          <button className="view-btn">📷 View All Images</button>
        </div>
      </div>

      <div className="header-details">
        <h1>Australia Explorer: Sydney to Gold Coast</h1>
        <div className="trip-info">
          <span className="badge">9D/8N</span>
          <span>2 Days in Sydney</span>
          <span>3 Days in Melbourne</span>
          <span>3 Days in Gold Coast</span>
        </div>

        <div className="includes">
          <p>🛫 Transfer Included</p>
          <p>🏨 Stay Included</p>
          <p>🍽️ Meals Included</p>
          <p>🗺️ Sightseeing Included</p>
        </div>

        <div className="price-box">
          <div className="price">
            <h2>INR 1,09,000</h2>
            <p className="old">INR 1,25,000</p>
            <span className="tag">✨ MONSOON SALE!</span>
            <span className="rating">⭐ 4.5 (3.6k)</span>
          </div>
          <button className="enquiry-btn">Send Enquiry</button>
        </div>
      </div>
    </div>
  );
};

export default AustraliaHeader;
