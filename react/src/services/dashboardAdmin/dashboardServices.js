import {
    fetchReportProducts,
  } from './api/articleAPI';


/**
 * Fetch report products transaction.
 * @returns {Promise<Array>} Resolves with an array of products.
 * @throws {Error} Throws an error if the request fails.
 */
export const getReportProducts = async () => {
  try {
    const response = await fetchReportProducts();
    console.log('Response Data:', response.data.data);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching report products:', error);
    throw new Error('Failed to fetch report products. Please try again later.');
  }
}