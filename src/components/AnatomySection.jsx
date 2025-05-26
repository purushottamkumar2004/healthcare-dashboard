import React from 'react';
import { healthData } from '../data/healthData';
import anatomyImage from '../assets/anatomy.jpg';
import { FiMaximize } from 'react-icons/fi';
import '../styles/AnatomySection.css';

function AnatomySection() {
  return (
    <div className="anatomy-section">
      <h2 className="section-title">Health Overview</h2>
      <div className="anatomy-container">
        <div className="human-body">
          <div className="anatomy-placeholder">
            <img src={anatomyImage} alt="Human Anatomy Model" className="anatomy-image" />
            {healthData.map((item, index) => (
              <div 
                key={index}
                className={`health-indicator ${item.status}`}
                style={{ top: `${item.position.top}%`, left: `${item.position.left}%` }}
                data-position={item.side}
              >
                <div className="indicator-dot"></div>
                <div className="indicator-label">{item.label}</div>
              </div>
            ))}
            <div className="qr-scanner">
              <FiMaximize />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnatomySection;