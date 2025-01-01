import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <Link to="/admin/company">Add New Company</Link>
      <br />
      <Link to="/admin/communication-method">Add Communication Method</Link>
    </div>
  );
};

export default AdminDashboard;
