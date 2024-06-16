import axiosInstance from './axiosInstance';

export const fetchAllArticles = () => axiosInstance.get('/api/v1/articles');