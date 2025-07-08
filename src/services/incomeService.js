import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

// Automatically attach JWT from localStorage
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Get all expenses
export const getIncomes = async () => {
  const res = await API.get('/incomes');
  return res.data;
};

// Add a new expense
export const createIncome = async (income) => {
  const res = await API.post('/incomes', income);
  return res.data;
};

// Delete an expense by ID
export const deleteIncome = async (id) => {
  const res = await API.delete(`/incomes/${id}`);
  return res.data;
};
