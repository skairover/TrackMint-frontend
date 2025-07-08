import api from './api';

export const deleteExpense = (id) => {
  return api.delete(`/api/expenses/${id}`);
};



// Automatically attach JWT from localStorage
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Get all expenses
export const getExpenses = async () => {
  const res = await api.get('/expenses');
  return res.data;
};

// Add a new expense
export const createExpense = async (expense) => {
  const res = await api.post('/expenses', expense);
  return res.data;
};

// Delete an expense by ID

