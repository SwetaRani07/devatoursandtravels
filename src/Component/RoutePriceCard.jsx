import React from 'react';

const RoutePriceCard = ({ title, prices }) => {
  return (
    <div className="route-card">
      <h3 className="route-title">🚖 {title}</h3>
      <ul className="price-list">
        {prices.map((item, index) => (
          <li key={index}>
            <span className="cab-name">{item.cab}:</span> <span className="cab-price">₹{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoutePriceCard;