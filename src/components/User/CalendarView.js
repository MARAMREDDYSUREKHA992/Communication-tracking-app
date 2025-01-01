import React from 'react';
import Calendar from 'react-calendar';

const CalendarView = () => {
  const [date, setDate] = React.useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div>
      <h2>Communication Calendar</h2>
      <Calendar onChange={onChange} value={date} />
      <div>
        <p>Selected Date: {date.toDateString()}</p>
      </div>
    </div>
  );
};

export default CalendarView;
