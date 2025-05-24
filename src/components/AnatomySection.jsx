import React from 'react';
import { healthData } from '../data/healthData';
import '../styles/AnatomySection.css';

function AnatomySection() {
  return (
    <div className="anatomy-section">
      <h2 className="section-title">Health Overview</h2>
      <div className="anatomy-container">
        <div className="human-body">
          {/* This would be replaced with an actual anatomy image */}
          <div className="anatomy-placeholder">
            <div className="body-outline"></div>
            {healthData.map((item, index) => (
              <div 
                key={index}
                className={`health-indicator ${item.status}`}
                style={{ top: `${item.position.top}%`, left: `${item.position.left}%` }}
              >
                <div className="indicator-dot"></div>
                <div className="indicator-label">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnatomySection;