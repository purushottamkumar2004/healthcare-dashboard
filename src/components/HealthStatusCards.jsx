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
            <div className="card-icon">
              {item.icon}
            </div>
            <div className="card-content">
              <div className="card-title">{item.label}</div>
              <div className="card-date">{item.date}</div>
              <div className="progress-bar">
                <div className="progress-fill"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HealthStatusCards;