
import '../styles/Calendar.css'

import  { useState } from 'react';

const Calendar = () => {
    // Get current date
    const [date, setDate] = useState(new Date());
  
    // Function to get the array of days in a month
    const getDaysInMonth = (date) => {
      const year = date.getFullYear();
      const month = date.getMonth();
      const firstDayOfMonth = new Date(year, month, 1);
      const lastDayOfMonth = new Date(year, month + 1, 0);
      const startDay = firstDayOfMonth.getDay(); // Day of the week (0 - 6) of the first day of the month
      const daysInMonth = lastDayOfMonth.getDate();
      const days = [];
  
      // Add empty placeholders for days before the start day of the month
      for (let i = 0; i < startDay; i++) {
        days.push(null);
      }
  
      // Add days of the month
      for (let i = 1; i <= daysInMonth; i++) {
        const day = new Date(year, month, i);
        days.push(day);
      }
  
      return days;
    };
  
    // Function to get the name of the month
    const getMonthName = (date) => {
      const options = { month: 'long' };
      return new Intl.DateTimeFormat('en-US', options).format(date);
    };
  
    // Function to handle previous month button click
    const prevMonth = () => {
      setDate(new Date(date.getFullYear(), date.getMonth() - 1));
    };
  
    // Function to handle next month button click
    const nextMonth = () => {
      setDate(new Date(date.getFullYear(), date.getMonth() + 1));
    };
  
    // Render
    return (
      <div className="calendar">
        <div className="header">
          <button onClick={prevMonth}><i class="fa-solid fa-less-than mntIcon"></i></button>
          <h2 className='mnthName'>{getMonthName(date)}</h2>
          <button onClick={nextMonth}><i class="fa-solid fa-greater-than mntIcon"></i></button>
        </div>
        <div className="weekdays">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
            <div key={index} className="weekday">{day}</div>
          ))}
        </div>
        <div className="days">
          {getDaysInMonth(date).map((day, index) => (
            <div key={index} className={`day ${day ? '' : 'placeholder'} ${day && day.getDay() === 0 ? 'sunday' : ''} ${day && day.getDate() === new Date().getDate() && day.getMonth() === new Date().getMonth() && day.getFullYear() === new Date().getFullYear() ? 'today' : ''}`}>{day && day.getDate()}</div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Calendar;