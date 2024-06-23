import {
    // fetchSummaryArticles,
    fetchAllArticles,
    searchArticles,
    createArticle,
    editArticle,
    fetchArticleById,
    deleteArticle
  } from './api/articleAPI';

  
// export const getSummaryArticles = async () => {
//     const response = await fetchSummaryArticles();
//     console.log('Response Data:', response.data.data)
//     return response.data.data;
// };


/**
 * Fetch all articles with pagination.
 * @param {number} page - Page number (default is 1).
 * @returns {Promise<Array>} Resolves with an array of articles.
 * @throws {Error} Throws an error if the request fails.
 */
export const getAllArticles = async (page = 1) => {
  try {
    const response = await fetchAllArticles(page);
    console.log('Response Data:', response.data.data);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching all articles:', error);
    throw new Error('Failed to fetch articles. Please try again later.');
  }
};


/**
 * Create a new article.
 * @param {object} formData - Article data to create.
 * @returns {Promise<object>} Resolves with the created article data.
 * @throws {Error} Throws an error if the request fails.
 */
export const searchForArticles = async (item) => {
  try {
    const response = await searchArticles(item);
    console.log('Response Data:', response.data.data);
    return response.data.data;
  } catch (error) {
    console.error('Error searching articles:', error);
    throw new Error('Failed to search articles. Please try again later.');
  }
};


/**
 * Create a new article.
 * @param {object} formData - Article data to create.
 * @returns {Promise<object>} Resolves with the created article data.
 * @throws {Error} Throws an error if the request fails.
 */
export const createPost = async (formData) => {
  try {
    const response = await createArticle(formData);
    console.log('Data Create:', response.data.data);
    return response.data.data;
  } catch (error) {
    console.error('Error creating article:', error);
    throw new Error('Failed to create article. Please try again.');
  }
};


/**
 * Fetch article by ID.
 * @param {string} id - Article ID.
 * @returns {Promise<object>} Resolves with the article data.
 * @throws {Error} Throws an error if the request fails.
 */
export const getArticleById = async (id) => {
  try {
    const response = await fetchArticleById(id);
    console.log('Data Edit:', response.data.data);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching article by ID:', error);
    throw new Error('Failed to fetch article details. Please try again later.');
  }
};


/**
 * Update an existing article.
 * @param {string} id - Article ID to update.
 * @param {object} formData - Updated article data.
 * @returns {Promise<object>} Resolves with the updated article data.
 * @throws {Error} Throws an error if the request fails.
 */
export const updatePost = async (id, formData) => {
  try {
    const response = await editArticle(id, formData);
    return response.data.data;
  } catch (error) {
    console.error('Error updating article:', error);
    throw new Error('Failed to update article. Please try again.');
  }
};


/**
 * Delete an article by ID.
 * @param {string} id - Article ID to delete.
 * @returns {Promise<string>} Resolves with the ID of the deleted article.
 * @throws {Error} Throws an error if the request fails.
 */
export const removeArticle = async (id) => {
  try {
    const response = await deleteArticle(id);
    return response.data.data;
  } catch (error) {
    console.error('Error deleting article:', error);
    throw new Error('Failed to delete article. Please try again.');
  }
};
