import React from 'react';
import '../styles/ActivityFeed.css';

const activityData = [
  { 
    day: 'Mon', 
    values: [
      { height: 60, isSecondary: false },
      { height: 40, isSecondary: true }
    ]
  },
  { 
    day: 'Tues', 
    values: [
      { height: 30, isSecondary: false },
      { height: 45, isSecondary: true }
    ]
  },
  { 
    day: 'Wed', 
    values: [
      { height: 50, isSecondary: false },
      { height: 25, isSecondary: true }
    ]
  },
  { 
    day: 'Thurs', 
    values: [
      { height: 70, isSecondary: false },
      { height: 35, isSecondary: true }
    ]
  },
  { 
    day: 'Fri', 
    values: [
      { height: 45, isSecondary: false },
      { height: 55, isSecondary: true }
    ]
  },
  { 
    day: 'Sat', 
    values: [
      { height: 35, isSecondary: false },
      { height: 25, isSecondary: true }
    ]
  },
  { 
    day: 'Sun', 
    values: [
      { height: 55, isSecondary: false },
      { height: 20, isSecondary: true }
    ]
  }
];

function ActivityFeed() {
  return (
    <div className="activity-feed">
      <h2 className="section-title">Activity</h2>
      <p className="activity-summary">3 appointments on this week</p>
      <div className="activity-chart">
        <div className="grid-lines">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="grid-line" />
          ))}
        </div>
        {activityData.map((item, index) => (
          <div key={index} className="chart-bar-container">
            <div className="bars-group">
              {item.values.map((value, valueIndex) => (
                <div
                  key={valueIndex}
                  className={`chart-bar ${value.isSecondary ? 'secondary' : ''}`}
                  style={{ height: `${value.height}%` }}
                />
              ))}
            </div>
            <span className="chart-label">{item.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivityFeed;