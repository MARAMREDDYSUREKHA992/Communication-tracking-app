import React from 'react';
import { Link } from 'react-router-dom';
import CommunicationList from './CommunicationList';

const UserDashboard = () => {
  return (
    <div>
      <h2>User Dashboard</h2>
      <CommunicationList />
      <Link to="/user/calendar">Go to Calendar</Link>
    </div>
  );
};

export default UserDashboard;
