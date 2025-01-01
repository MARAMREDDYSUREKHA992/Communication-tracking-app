import axios from 'axios';

const API_URL = 'https://api.example.com';  // Replace with your backend API

export const addCompany = (companyData) => {
  return axios.post(`${API_URL}/companies`, companyData);
};

export const getCompanies = () => {
  return axios.get(`${API_URL}/companies`);
};

export const getCommunicationMethods = () => {
  return axios.get(`${API_URL}/communication-methods`);
};
