import React from 'react';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';
import '../styles/Dashboard.css';

function Dashboard() {
  return (
    <main className="dashboard">
      <div className="dashboard-grid">
        <div className="main-overview-container">
          <div className="health-overview-section">
            <AnatomySection />
            <HealthStatusCards />
          </div>
          <div className="calendar-section">
            <CalendarView />
          </div>
        </div>
        <div className="dashboard-row">
          <ActivityFeed />
          <UpcomingSchedule />
        </div>
      </div>
    </main>
  );
}

export default Dashboard;