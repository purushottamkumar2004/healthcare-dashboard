import React from 'react';
import { upcomingAppointments } from '../data/appointments';
import '../styles/UpcomingSchedule.css';

// Find the most recent appointment
const findMostRecentAppointment = (appointments) => {
  if (!appointments.length) return null;
  
  const now = new Date();
  const today = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
  const currentHour = now.getHours();

  // Convert day names to numbers
  const dayMap = {
    'Monday': 1,
    'Tuesday': 2,
    'Wednesday': 3,
    'Thursday': 4,
    'Friday': 5,
    'Saturday': 6,
    'Sunday': 0
  };

  // Sort appointments by day and time
  return appointments.sort((a, b) => {
    const dayDiffA = (dayMap[a.day] - today + 7) % 7;
    const dayDiffB = (dayMap[b.day] - today + 7) % 7;
    
    if (dayDiffA !== dayDiffB) return dayDiffA - dayDiffB;
    
    const timeA = parseInt(a.time.split(':')[0]);
    const timeB = parseInt(b.time.split(':')[0]);
    
    return timeA - timeB;
  })[0];
};

// Simple card with emoji already in the title
function SimpleAppointmentCard({ appointment, isRecent }) {
  return (
    <div className={`simple-appointment-card${isRecent ? ' recent' : ''}`}>
      <h4>{appointment.title}</h4>
      <span>{appointment.time}</span>
    </div>
  );
}

function UpcomingSchedule() {
  const mostRecent = findMostRecentAppointment(upcomingAppointments);
  
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
              <SimpleAppointmentCard 
                key={index} 
                appointment={appointment}
                isRecent={appointment === mostRecent}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default UpcomingSchedule;
