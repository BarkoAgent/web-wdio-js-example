import axios from 'axios';
import { apiConfig } from '../support/data.js';

// Set the base URL for all axios requests and define a default timeout
axios.defaults.baseURL = apiConfig.baseURL;
axios.defaults.timeout = 5000;

export default class APIBase {
  /**
   * Constructs the Authorization header with a Bearer token.
   * @param {string} token - The Bearer token for authorization.
   * @returns {Object} The headers object containing the Authorization token.
   */
  authHeader(token) {
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  }

  /**
   * Handles and logs errors from axios requests.
   * @param {Object} error - The error object from axios.
   * @throws Will re-throw the error after logging it.
   */
  handleError(error) {
    if (error.response && error.response.data) {
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
    throw error;
  }

  /**
   * Makes a GET request to the specified path.
   * @param {string} path - The API endpoint to send the GET request to.
   * @param {Object} [config={}] - Optional configuration for the request.
   * @returns {Object} The response from the API.
   * @throws Will handle and throw errors using handleError.
   */
  async get(path, config = {}) {
    try {
      const response = await axios.get(path, config);
      return response;
    } catch (error) {
      this.handleError(error);
    }
  }

  /**
   * Makes a POST request to the specified path.
   * @param {string} path - The API endpoint to send the POST request to.
   * @param {Object} payload - The payload to send in the body of the POST request.
   * @param {Object} [config={}] - Optional configuration for the request.
   * @returns {Object} The response from the API.
   * @throws Will handle and throw errors using handleError.
   */
  async post(path, payload, config = {}) {
    try {
      const response = await axios.post(path, payload, config);
      return response;
    } catch (error) {
      this.handleError(error);
    }
  }

  /**
   * Makes a PUT request to the specified path.
   * @param {string} path - The API endpoint to send the PUT request to.
   * @param {Object} payload - The payload to send in the body of the PUT request.
   * @param {Object} [config={}] - Optional configuration for the request.
   * @returns {Object} The response from the API.
   * @throws Will handle and throw errors using handleError.
   */
  async put(path, payload, config = {}) {
    try {
      const response = await axios.put(path, payload, config);
      return response;
    } catch (error) {
      this.handleError(error);
    }
  }

  /**
   * Makes a PATCH request to the specified path.
   * @param {string} path - The API endpoint to send the PATCH request to.
   * @param {Object} payload - The payload to send in the body of the PATCH request.
   * @param {Object} [config={}] - Optional configuration for the request.
   * @returns {Object} The data from the API response.
   * @throws Will handle and throw errors using handleError.
   */
  async patch(path, payload, config = {}) {
    try {
      const response = await axios.patch(path, payload, config);
      return response;
    } catch (error) {
      this.handleError(error);
    }
  }

  /**
   * Makes a DELETE request to the specified path.
   * @param {string} path - The API endpoint to send the DELETE request to.
   * @param {Object} [config={}] - Optional configuration for the request.
   * @returns {Object} The response from the API.
   * @throws Will handle and throw errors using handleError.
   */
  async delete(path, config = {}) {
    try {
      const response = await axios.delete(path, config);
      return response;
    } catch (error) {
      this.handleError(error);
    }
  }
}
