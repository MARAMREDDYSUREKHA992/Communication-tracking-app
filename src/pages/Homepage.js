// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Communication Tracking App</h1>
      <p>Track your communication effectively with our tools.</p>
      <div>
        <Link to="/admin">Go to Admin Dashboard</Link>
        <Link to="/user">Go to User Dashboard</Link>
      </div>
    </div>
  );
};

export default HomePage;
