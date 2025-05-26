import React from 'react';
import { upcomingAppointments } from '../data/appointments';
import '../styles/UpcomingSchedule.css';

// Simple card with emoji already in the title
function SimpleAppointmentCard({ appointment }) {
  return (
    <div className="simple-appointment-card">
      <h4>{appointment.title}</h4>
      <span>{appointment.time}</span>
    </div>
  );
}

function UpcomingSchedule() {
  const grouped = upcomingAppointments.reduce((acc, item) => {
    const day = item.day.trim();
    if (!acc[day]) acc[day] = [];
    acc[day].push(item);
    return acc;
  }, {});

  return (
    <div className="upcoming-schedule">
      <h2 className="section-title">The Upcoming Schedule</h2>
      {Object.entries(grouped).map(([day, entries]) => (
        <div className="day-group" key={day}>
          <h3 className="day-title">On {day}</h3>
          <div className="appointments-list-row">
            {entries.map((appointment, index) => (
              <SimpleAppointmentCard key={index} appointment={appointment} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default UpcomingSchedule;
