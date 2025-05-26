import React from 'react';
import '../styles/Calendar.css';
import { upcomingAppointments } from '../data/appointments';

// Only showing slots from 10 AM to 4 PM
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

// Convert "11:00 AM" → "11:00" or "02:30 PM" → "14:30"
const convertTo24Hour = (timeString) => {
  const [time, period] = timeString.split(' ');
  let [hours, minutes = '00'] = time.split(':');
  hours = parseInt(hours);

  if (period === 'PM' && hours !== 12) hours += 12;
  if (period === 'AM' && hours === 12) hours = 0;

  return `${hours.toString().padStart(2, '0')}:${minutes}`;
};

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
    
    const timeA = parseInt(convertTo24Hour(a.time.split(' - ')[0]));
    const timeB = parseInt(convertTo24Hour(b.time.split(' - ')[0]));
    
    return timeA - timeB;
  })[0];
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
  const mostRecent = findMostRecentAppointment(upcomingAppointments);

  const addedSlots = matchingAppointments
    .map((appt) => ({
      time: convertTo24Hour(appt.time.split(' - ')[0]),
      isRecent: appt === mostRecent,
      title: appt.title
    }))
    .filter((slot) => {
      const hour = slot.time.split(':')[0];
      return timeSlots.includes(`${hour}:00`);
    });

  return {
    ...dayEntry,
    appointments: addedSlots,
  };
});

const CalendarView = () => {
  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <span>October 2025</span>
        <div className="calendar-nav">
          <button>{'<'}</button>
          <button>{'>'}</button>
        </div>
      </div>

      <div className="calendar-grid">
        {calendarData.map(({ day, date, appointments }, idx) => (
          <div key={idx} className="calendar-column">
            <div className="day-label">{day}</div>
            <div className="date-label">{date}</div>
            <div className="time-slot-group">
              {timeSlots.map((time) => {
                const appointment = appointments.find(a => a.time.startsWith(time.split(':')[0]));
                const className = appointment
                  ? `time-slot active${appointment.isRecent ? ' selected' : ''}`
                  : 'time-slot';
                return (
                  <div key={time} className={className} title={appointment?.title || ''}>
                    {time}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;
