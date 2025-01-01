import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminDashboard from './components/Admin/AdminDashboard';
import UserDashboard from './components/User/UserDashboard';
import CalendarView from './components/User/CalendarView';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/user/dashboard" element={<UserDashboard />} />
        <Route path="/user/calendar" element={<CalendarView />} />
      </Routes>
    </div>
  );
};

export default App;
