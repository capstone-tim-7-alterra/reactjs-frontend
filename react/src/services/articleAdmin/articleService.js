import axiosInstance from './api/axiosInstance';
import {
    fetchAllArticles,
    searchArticles,
    createArticle,
    editArticle,
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
  return response.data;
};

export const editPost = async (id, formData) => {
  const response = await editArticle(`/articles/${id}`, formData);
  return response.data;
};


export const submitArticle = async (formData) => {
  const response = await axiosInstance.put(`/api/v1/admin/articles/${formData.get('id')}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};