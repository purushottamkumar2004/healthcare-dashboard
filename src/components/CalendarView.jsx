import React from 'react';
import { calendarData } from '../data/calendar';
import '../styles/Calendar.css';

function CalendarView() {
  return (
    <div className="calendar-section">
      <h2 className="section-title">October 2021</h2>
      <div className="calendar-grid">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="calendar-day-header">{day}</div>
        ))}
        
        {calendarData.days.map((day, index) => (
          <div key={index} className={`calendar-day ${day.hasAppointment ? 'has-appointment' : ''}`}>
            <span className="day-number">{day.number}</span>
            {day.appointments && (
              <div className="appointment-times">
                {day.appointments.map((time, i) => (
                  <span key={i} className="appointment-time">{time}</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="appointment-cards">
        <div className="appointment-card">
          <h3>Dentist</h3>
          <p>Dr. Sarah Johnson</p>
          <p>Oct 15, 2021 at 09:00 AM</p>
        </div>
        <div className="appointment-card">
          <h3>Physiotherapy Appointment</h3>
          <p>Dr. Michael Brown</p>
          <p>Oct 18, 2021 at 02:30 PM</p>
        </div>
      </div>
    </div>
  );
}

export default CalendarView;