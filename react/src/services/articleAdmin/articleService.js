import {
    fetchAllArticles,
    searchArticles,
    createArticle,
    editArticle,
    fetchArticleById,
    deleteArticle
  } from './api/articleAPI';

export const getAllArticles = async () => {
    const response = await fetchAllArticles();
    console.log('Response Data:', response.data.data)
    return response.data.data;
};

export const searchForArticles = async (item) => {
    try {
      const response = await searchArticles(item);
      console.log('Response Data:', response.data.data);
      return response.data.data;
  } catch (error) {
      console.error('Error searching articles:', error.response ? error.response.data : error.message);
      throw error;
  }
};

export const createPost = async (formData) => {
  const response = await createArticle(formData);
  return response.data.data;
};

export const getArticleById = async (id) => {
  const response = await fetchArticleById(id);
  return response.data.data;
};

export const updatePost = async (id, formData) => {
  const response = await editArticle(id, formData);
  return response.data.data;
};


export const removeArticle = async (id) => {
  const response = await deleteArticle(id);
  return response.data.data;
};

