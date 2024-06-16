import {
    fetchAllArticles,
  } from './api/articleAPI';

export const getAllArticles = async () => {
    const response = await fetchAllArticles();
    console.log('Response Data:', response.data.data)
    return response.data.data;
};