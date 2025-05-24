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
        <div className="dashboard-row">
          <AnatomySection />
          <HealthStatusCards />
        </div>
        <div className="dashboard-row">
          <CalendarView />
        </div>
        <div className="dashboard-row">
          <UpcomingSchedule />
          <ActivityFeed />
        </div>
      </div>
    </main>
  );
}

export default Dashboard;