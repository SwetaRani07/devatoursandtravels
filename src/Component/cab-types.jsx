import React from 'react';

const CabCard = ({ image, name, capacity, rent, ratePerKm }) => {
  return (
    <div className="cab-card">
      <img src={image} alt={name} className="cab-image" />
      <div className="cab-details">
        <h3 className="cab-name">{name}</h3>
        <p className="cab-capacity">👥 Seats: {capacity}</p>
        <p className="cab-price">🚖 Base Rent: {rent}</p>
        <p className="cab-rate">📍 ₹ per Km: {ratePerKm}</p>
      </div>
    </div>
  );
};

export default CabCard;
