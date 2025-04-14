import React, { useState } from 'react';

const cabRates = {
  Dzire: { base: 1000, perKm: 10 },
  Ertiga: { base: 1200, perKm: 12 },
  'Inova Crysta': { base: 1600, perKm: 16 }
};

const PriceCalculatorModal = ({ show, onClose }) => {
  const [selectedCab, setSelectedCab] = useState('Dzire');
  const [distance, setDistance] = useState('');
  const [total, setTotal] = useState(null);

  const handleCalculate = () => {
    const cab = cabRates[selectedCab];
    const totalPrice = cab.base + cab.perKm * parseFloat(distance || 0);
    setTotal(totalPrice);
  };

  return (
    <div
      className={`modal fade ${show ? 'show d-block' : ''}`}
      tabIndex="-1"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      role="dialog"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">📏 Distance-Based Fare Calculator</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label className="form-label">Choose Cab</label>
              <select
                className="form-select"
                value={selectedCab}
                onChange={(e) => setSelectedCab(e.target.value)}
              >
                {Object.keys(cabRates).map((cab) => (
                  <option key={cab} value={cab}>
                    {cab}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Enter Distance (in km)</label>
              <input
                type="number"
                className="form-control"
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
                placeholder="e.g., 120"
              />
            </div>
            {total !== null && (
              <div className="alert alert-success">
                💰 Estimated Price: <strong>₹{total}</strong>
              </div>
            )}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" onClick={handleCalculate}>
              Calculate
            </button>
            <button type="button" className="btn btn-danger" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCalculatorModal;
