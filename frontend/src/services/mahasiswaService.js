import api from './api';

export const getAllMahasiswa = () => api.get('/mahasiswa');
export const getMahasiswaById = (id) => api.get(`/mahasiswa/${id}`);
export const createMahasiswa = (data) => api.post('/mahasiswa', data);
export const updateMahasiswa = (id, data) => api.put(`/mahasiswa/${id}`, data);
export const deleteMahasiswa = (id) => api.delete(`/mahasiswa/${id}`);
