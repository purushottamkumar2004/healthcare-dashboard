import React from 'react';
import { healthData } from '../data/healthData';
import '../styles/HealthStatusCards.css';

function HealthStatusCards() {
  return (
    <div className="health-status-cards">
      <h2 className="section-title">Status</h2>
      <div className="cards-container">
        {healthData.map((item, index) => (
          <div key={index} className={`health-card ${item.status}`}>
            <div className="card-icon">{item.icon}</div>
            <div className="card-content">
              <h3>{item.label}</h3>
              <p>{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HealthStatusCards;