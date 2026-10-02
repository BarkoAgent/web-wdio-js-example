import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
  /**
   * define selectors using getter methods
   */

  get inputEmail() {
    return $('[data-test="email"]');
  }

  get inputPassword() {
    return $('[data-test="password"]');
  }

  get buttonSignIn() {
    return $('[data-test="login-submit"]');
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  async login(email, password) {
    await this.inputEmail.setValue(email);

    await this.inputPassword.waitForClickable();
    await this.inputPassword.setValue(password);

    await this.buttonSignIn.waitForClickable();
    await this.buttonSignIn.click();
  }

  /**
   * Verifies that the login form is visible on the page.
   * @returns {Promise<void>} - Resolves when the verification of the login form's visibility is complete.
   */
  async verifyLoginFormVisible() {
    await expect(this.inputEmail).toBeDisplayed();
    await expect(this.inputPassword).toBeDisplayed();
    await expect(this.buttonSignIn).toBeDisplayed();
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  open() {
    return super.open('/auth/login');
  }
}

export default new LoginPage();
