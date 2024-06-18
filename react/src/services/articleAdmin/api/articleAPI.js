import axiosInstance from './axiosInstance';

export const fetchAllArticles = () => axiosInstance.get('/api/v1/admin/articles');
export const searchArticles = (item) => {
    return axiosInstance.get('/api/v1/admin/articles/search?limit=5&offset=0', {
      params: { item }
    });
  };