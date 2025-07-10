import api from './api';

export const deleteIncome = (id) => {
  return api.delete(`/api/incomes/${id}`);
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
export const getIncomes = async () => {
  const res = await api.get('/incomes');
  return res.data;
};

// Add a new expense
export const createIncome = async (income) => {
  const res = await api.post('/incomes', income);
  return res.data;
};

// Delete an expense by ID

