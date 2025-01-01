import React from 'react';
import FullCalendar from '@fullcalendar/react'; // Import the FullCalendar component
import dayGridPlugin from '@fullcalendar/daygrid'; // Import the day grid plugin

const CalendarView = () => {
  return (
    <div>
      <h2>Calendar View</h2>
      <FullCalendar
        plugins={[dayGridPlugin]} // Pass the plugin to the FullCalendar
        initialView="dayGridMonth" // Default view of the calendar
        events={[
          { title: 'Meeting with Client', date: '2024-12-31' },
          { title: 'Follow-up Email', date: '2024-12-30' },
        ]}
      />
    </div>
  );
};

export default CalendarView;
