import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://studio-biskoot-backend.onrender.com';

/**
 * Sends a contact form message to the Django API.
 * 
 * @param {Object} payload
 * @param {string} payload.email - Visitor's email address
 * @param {string} payload.subject - Message subject
 * @param {string} payload.message - Message body
 * @returns {Promise<{success: boolean, message: string}>}
 */
export async function sendContactMessage({ email, subject, message }) {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/contact/`, {
      email,
      subject,
      message,
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw error.response.data;
    }
    throw {
      success: false,
      message: 'Unable to connect to the server. Please check your connection and try again.',
    };
  }
}
