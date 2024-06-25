import axios from 'axios';

// Create axios instance with base URL from environment variables
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_PROD_URL,
});

// Request interceptor to add Authorization header with token from localStorage
axiosInstance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token'); // Retrieve token from localStorage
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`; // Add token to headers
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  )

export default axiosInstance;
