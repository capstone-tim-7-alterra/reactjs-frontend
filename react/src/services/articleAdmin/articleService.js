import {
    fetchAllArticles,
    searchArticles,
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