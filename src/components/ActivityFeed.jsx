import React from 'react';
import '../styles/ActivityFeed.css';

function ActivityFeed() {
  const activityData = [
    { day: 'Mon', value: 20 },
    { day: 'Tue', value: 40 },
    { day: 'Wed', value: 30 },
    { day: 'Thu', value: 60 },
    { day: 'Fri', value: 50 },
    { day: 'Sat', value: 30 },
    { day: 'Sun', value: 10 }
  ];

  return (
    <div className="activity-feed">
      <h2 className="section-title">Activity</h2>
      <p className="activity-summary">3 appointments on this week</p>
      <div className="activity-chart">
        {activityData.map((item, index) => (
          <div key={index} className="chart-bar-container">
            <div 
              className="chart-bar" 
              style={{ height: `${item.value}%` }}
            ></div>
            <span className="chart-label">{item.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivityFeed;