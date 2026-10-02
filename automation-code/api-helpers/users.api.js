import APIBase from './api-base.js';
import { apiConfig } from '../support/data.js';

export default class UsersApi extends APIBase {
  /**
   * Register a new customer.
   * @param {Object} user - Payload built by buildUser().
   * @returns {Object} The created customer.
   */
  async registerUser(user) {
    const response = await this.post(apiConfig.endpoints.register, user);
    return response.data;
  }

  /**
   * Log in and obtain an access token.
   * @param {string} email - The user's email.
   * @param {string} password - The user's password.
   * @returns {string} The access token.
   */
  async login(email, password) {
    const response = await this.post(apiConfig.endpoints.login, { email, password });
    return response.data.access_token;
  }

  /**
   * Retrieve the logged-in customer's profile.
   * @param {string} token - The access token for authentication.
   * @returns {Object} The customer profile.
   */
  async fetchCurrentUser(token) {
    const response = await this.get(apiConfig.endpoints.me, this.authHeader(token));
    return response.data;
  }
}
