import axios from "axios";

const apiUrl = import.meta.env.VITE_API_PRODUCT_URL;

const axiosInstance = axios.create({
  baseURL: apiUrl,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error("Error fetching token:", error.message);
    return Promise.reject(error);
  }
);

export default axiosInstance;
