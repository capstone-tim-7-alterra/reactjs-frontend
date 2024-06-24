import axiosInstance from './axiosInstance';

// export const fetchSummaryArticles = async () => {
//   const response = await axios.get('/api/summary-articles');
//   return response;
// };

export const fetchAllArticles = (page = 1) => {
  return axiosInstance.get(`/api/v1/admin/articles?page=${page}&limit=6`);
};

export const searchArticles = (item) => {
  return axiosInstance.get('/api/v1/admin/articles/search', {
    params: { item, limit: 5, offset: 0 }
  });
};

export const createArticle = (articleData) => {
  return axiosInstance.post('/api/v1/admin/articles', articleData);
};

export const editArticle = (id, articleData) => {
  return axiosInstance.put(`/api/v1/admin/articles/${id}`, articleData);
};

export const fetchArticleById = (id) => {
  return axiosInstance.get(`/api/v1/admin/articles/${id}`);
};

export const deleteArticle = (id) => {
  return axiosInstance.delete(`/api/v1/admin/articles/${id}`);
};

