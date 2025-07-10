// services/expenseService.js
import api from './api';

// ✅ Fetch all expenses for the authenticated user
export const getExpenses = async () => {
  const res = await api.get('/api/expenses');
  return res.data; // Ensure only the data (array) is returned
};

// ✅ Create a new expense
export const createExpense = async (expenseData) => {
  const res = await api.post('/api/expenses', expenseData);
  return res.data; // Return the created expense object
};

// ✅ Delete an expense by ID
export const deleteExpense = async (id) => {
  const res = await api.delete(`/api/expenses/${id}`);
  return res.data; // Optionally return message or status
};
