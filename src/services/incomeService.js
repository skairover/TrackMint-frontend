// services/expenseService.js
import api from './api';

// ✅ Fetch all expenses for the authenticated user
export const getIncomes = async () => {
  const res = await api.get('/api/incomes');
  return res.data; // Ensure only the data (array) is returned
};

// ✅ Create a new expense
export const createIncome = async (incomeData) => {
  const res = await api.post('/api/incomes', incomeData);
  return res.data; // Return the created expense object
};

// ✅ Delete an expense by ID
export const deleteIncome = async (id) => {
  const res = await api.delete(`/api/incomes/${id}`);
  return res.data; // Optionally return message or status
};
