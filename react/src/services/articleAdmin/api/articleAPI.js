import axiosInstance from './axiosInstance';

export const fetchAllArticles = () => axiosInstance.get('/api/v1/admin/articles');

export const searchArticles = (item) => {
    return axiosInstance.get('/api/v1/admin/articles/search?limit=5&offset=0', {
      params: { item }
    });
  };

export const createArticle = (articleData) => {
    return axiosInstance.post('/api/v1/admin/articles', articleData);
};

export const editArticle = (id, articleData) => axiosInstance.put(`/api/v1/admin/articles/${id}`, articleData);

export const fetchArticleById = (id) => axiosInstance.get(`/api/v1/admin/articles/${id}`);

export const deleteArticle = (id) => axiosInstance.delete(`/api/v1/admin/articles/${id}`);

