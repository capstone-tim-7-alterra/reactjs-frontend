import { fetchProfile } from "./api/navbarAPI";

/**
 * 
 * @returns {Promise<Array>} Resolves with an array of profile.
 * @throws {Error} Throws an error if the request fails.
 */
export const getProfile = async () => {
    try {
        const response = await fetchProfile();
        console.log('Response Data:', response.data.data);
        return response.data.data;
    } catch (error) { 
        console.error('Error fetching profile:', error);
        throw new Error('Failed to fetch profile. Please try again later.');
    }
}