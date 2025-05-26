import React from 'react';
import '../styles/Calendar.css';
import { upcomingAppointments } from '../data/calendar'; // <-- External appointment data

// Only showing slots from 10 AM to 2 PM
const timeSlots = ['10:00', '11:00', '12:00', '13:00', '14:00'];

// Base calendar days and dates
const baseCalendarData = [
  { day: 'Mon', date: '25', appointments: [] },
  { day: 'Tues', date: '26', appointments: [] },
  { day: 'Wed', date: '27', appointments: [] },
  { day: 'Thurs', date: '28', appointments: [] },
  { day: 'Fri', date: '29', appointments: [] },
  { day: 'Sat', date: '30', appointments: [] },

];

// Convert "02:30 PM - 03:15 PM" → "14:00"
const convertTo24Hour = (timeRange) => {
  const [start] = timeRange.split(' - ');
  const [time, period] = start.split(' ');
  let [hour] = time.split(':').map(Number);

  if (period === 'PM' && hour !== 12) hour += 12;
  if (period === 'AM' && hour === 12) hour = 0;

  return `${hour.toString().padStart(2, '0')}:00`;
};

// Sync appointments with calendar data
const calendarData = baseCalendarData.map((dayEntry) => {
  const fullDayMap = {
    Mon: 'Monday',
    Tues: 'Tuesday',
    Wed: 'Wednesday',
    Thurs: 'Thursday',
    Fri: 'Friday',
    Sat: 'Saturday',
  };

  const fullDay = fullDayMap[dayEntry.day];
  const matchingAppointments = upcomingAppointments.filter((appt) => appt.day === fullDay);

  const addedSlots = matchingAppointments
    .map((appt) => convertTo24Hour(appt.time))
    .filter((slot) => timeSlots.includes(slot)); // Only keep allowed slots

  return {
    ...dayEntry,
    appointments: [...new Set([...dayEntry.appointments, ...addedSlots])],
    selected: addedSlots.length > 0 ? addedSlots[0] : null,
  };
});

const CalendarView = () => {
  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <span>October 2021</span>
        <div className="calendar-nav">
          <button>{'<'}</button>
          <button>{'>'}</button>
        </div>
      </div>

      <div className="calendar-grid">
        {calendarData.map(({ day, date, appointments, selected }, idx) => (
          <div key={idx} className="calendar-column">
            <div className="day-label">{day}</div>
            <div className="date-label">{date}</div>
            <div className="time-slot-group">
            {timeSlots.map((time) => (
  <div
    key={time}
    className={`time-slot ${appointments.includes(time) ? 'active' : ''} ${
      selected === time ? 'selected' : ''
    }`}
  >
    {time}
  </div>
))}

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;
