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
export const getExpenses = async () => {
  const res = await API.get('/expenses');
  return res.data;
};

// Add a new expense
export const createExpense = async (expense) => {
  const res = await API.post('/expenses', expense);
  return res.data;
};

// Delete an expense by ID
export const deleteExpense = async (id) => {
  const res = await API.delete(`/expenses/${id}`);
  return res.data;
};
