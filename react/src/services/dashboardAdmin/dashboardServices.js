import { fetchReportProducts, fetchReportEvents, fetchSummaryDashboard } from "./api/dashboardAPI";


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

/**
 * Fetch report events transaction.
 * @returns {Promise<Array>} Resolves with an array of events.
 * @throws {Error} Throws an error if the request fails.
 */ 
export const getReportEvents = async () => {
  try {
    const response = await fetchReportEvents();
    console.log('Response Data:', response.data.data);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching report events:', error);
    throw new Error('Failed to fetch report events. Please try again later.');
  }
}

/**
 * @returns {Promise<Array>} Resolves with an array of summary dashboard.
 * @throws {Error} Throws an error if the request fails.
 */
export const getSummaryDashboard = async () => {
  try {
    const response = await fetchSummaryDashboard();
    console.log('Response Data:', response.data.data);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching summary dashboard:', error);
    throw new Error('Failed to fetch summary dashboard. Please try again later.');
  }
}
