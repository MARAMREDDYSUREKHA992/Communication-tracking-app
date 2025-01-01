import React from 'react';

const CommunicationList = () => {
  const communications = [
    { company: 'Company A', type: 'Email', date: '2024-12-01', status: 'Completed' },
    { company: 'Company B', type: 'LinkedIn Post', date: '2024-12-05', status: 'Overdue' }
  ];

  return (
    <div className="communication-list">
      <h3>Recent Communications</h3>
      <ul>
        {communications.map((com, index) => (
          <li key={index} className={com.status.toLowerCase()}>
            <p>{com.company}</p>
            <p>{com.type} on {com.date}</p>
            <p>Status: {com.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommunicationList;
