import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_PROD_URL,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

axiosInstance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('tokenAdmin'); // Ambil token dari localStorage
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`; // Tambahkan token ke header
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  )

export default axiosInstance;
