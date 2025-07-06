// services/expenseServices.js
import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
    withCredentials: true
});

export const getExpenses = async () => {
  const res = await API.get('/expenses');
  return res.data;
};

export const createExpense = async (expense) => {
  const res = await API.post('/expenses', expense);
  return res.data;
};

// 🗑️ Delete an expense (if needed later)
export const deleteExpense = async (id) => {
  const res = await API.delete(`/expenses/${id}`);
  return res.data;
};
