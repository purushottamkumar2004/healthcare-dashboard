import React from 'react';
import '../styles/SimpleAppointmentCard.css';
import { FiClock } from 'react-icons/fi';

function SimpleAppointmentCard({ appointment }) {
  return (
    <div className="simple-appointment-card">
      <div className="card-icon">
        <FiClock />
      </div>
      <div className="card-content">
        <h3>{appointment.title}</h3>
        <p>{appointment.time}</p>
      </div>
    </div>
  );
}

export default SimpleAppointmentCard;