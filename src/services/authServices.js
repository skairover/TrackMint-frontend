import axios from 'axios';

const baseURL = import.meta.env.VITE_API_BASE_URL;

export const register = (formData) => {
  return axios.post(`${baseURL}/api/auth/register`, formData);
};

export const login = (data) => {
  return axios.post(`${baseURL}/api/auth/login`,data,{withCredentials:true});
};
