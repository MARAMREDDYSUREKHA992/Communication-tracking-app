import React, { useState } from 'react';

const CompanyForm = () => {
  const [company, setCompany] = useState({
    name: '',
    location: '',
    linkedin: '',
    emails: '',
    phoneNumbers: '',
    comments: ''
  });

  const handleChange = (e) => {
    setCompany({ ...company, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send company data to API
    console.log('Company added:', company);
  };

  return (
    <div className="company-form-container">
      <h2>Add New Company</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Company Name" value={company.name} onChange={handleChange} required />
        <input type="text" name="location" placeholder="Location" value={company.location} onChange={handleChange} />
        <input type="url" name="linkedin" placeholder="LinkedIn URL" value={company.linkedin} onChange={handleChange} />
        <input type="email" name="emails" placeholder="Email(s)" value={company.emails} onChange={handleChange} />
        <input type="text" name="phoneNumbers" placeholder="Phone Numbers" value={company.phoneNumbers} onChange={handleChange} />
        <textarea name="comments" placeholder="Comments" value={company.comments} onChange={handleChange}></textarea>
        <button type="submit">Add Company</button>
      </form>
    </div>
  );
};

export default CompanyForm;
