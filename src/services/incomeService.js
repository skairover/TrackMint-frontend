import api from './api';

export const getIncomes = () => api.get('/api/incomes');
export const createIncome = (data) => api.post('/api/incomes', data);
export const deleteIncome = (id) => api.delete(`/api/incomes/${id}`);
