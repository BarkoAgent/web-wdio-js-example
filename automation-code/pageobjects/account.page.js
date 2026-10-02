import Page from './page.js';

class AccountPage extends Page {
  get pageTitle() {
    return $('[data-test="page-title"]');
  }

  async isLoaded() {
    await expect(browser).toHaveUrl(expect.stringContaining('/account'));
    await expect(await this.pageTitle.getText()).toEqual('My account');
  }
}

export default new AccountPage();
