import api from './api';

export const getExpenses = () => api.get('/api/expenses');
export const createExpense = (data) => api.post('/api/expenses', data);
export const deleteExpense = (id) => api.delete(`/api/expenses/${id}`);
