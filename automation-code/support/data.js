import 'dotenv/config';

export const apiConfig = {
  baseURL: process.env.API_URL || 'https://api.practicesoftwaretesting.com',
  endpoints: {
    register: '/users/register',
    login: '/users/login',
    me: '/users/me',
  },
};

/**
 * Builds a unique customer for a single test run, so parallel runs
 * (and repeated runs) never share an account or a cart.
 * @returns {Object} User payload accepted by POST /users/register.
 */
export const buildUser = () => {
  const unique = `${Date.now()}${Math.floor(Math.random() * 1000)}`;
  return {
    first_name: 'Test',
    last_name: 'User',
    dob: '1990-01-01',
    phone: '0612345678',
    email: `wdio.${unique}@example.com`,
    password: 'Welcome01!xyz',
    address: {
      street: 'Main St',
      city: 'Riga',
      state: 'LV',
      country: 'LV',
      postal_code: 'LV-1010',
    },
  };
};
