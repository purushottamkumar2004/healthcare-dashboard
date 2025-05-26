import React from 'react';
import { upcomingAppointments } from '../data/appointments';
import '../styles/UpcomingSchedule.css';

function SimpleAppointmentCard({ appointment }) {
  return (
    <div className="simple-appointment-card">
      <h4>
        {appointment.title}
        {appointment.icon && <span className="appointment-icon">{appointment.icon}</span>}
      </h4>
      <span>{appointment.time}</span>
    </div>
  );
}

function UpcomingSchedule() {
  const appointmentsByDay = upcomingAppointments.reduce((acc, appointment) => {
    if (!acc[appointment.day]) {
      acc[appointment.day] = [];
    }
    acc[appointment.day].push(appointment);
    return acc;
  }, {});

  return (
    <div className="upcoming-schedule">
      <h2 className="section-title">The Upcoming Schedule</h2>
      {Object.entries(appointmentsByDay).map(([day, appointments]) => (
        <div key={day} className="day-group">
          <h3 className="day-title">On {day}</h3>
          <div className="appointments-list-row">
            {appointments.map((appointment, index) => (
              <SimpleAppointmentCard key={index} appointment={appointment} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default UpcomingSchedule;
