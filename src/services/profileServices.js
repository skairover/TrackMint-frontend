
import api from './api';

export const getProfile = () => api.get('/api/user/me');
export const updateProfile = (payload) => api.patch('/api/profile', payload);
export const uploadProfilePic = (formData) => 
  api.post('/api/user/upload-profile-pic', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  })