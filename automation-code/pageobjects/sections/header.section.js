class HeadersSection {
  /**
   * wdio find by data-test attribute example
   */
  byDataTest(name) {
    return $(`[data-test="${name}"]`);
  }

  get userMenu() {
    return this.byDataTest('nav-menu');
  }

  get buttonSignOut() {
    return this.byDataTest('nav-sign-out');
  }

  async checkUserName(fullName) {
    await this.userMenu.waitForDisplayed();
    await expect(await this.userMenu.getText()).toContain(fullName);
  }

  async signOut() {
    await this.userMenu.waitForClickable();
    await this.userMenu.click();
    await this.buttonSignOut.waitForClickable();
    await this.buttonSignOut.click();
  }

  /**
   * optional param example
   */
  async navigateTo(pageName) {
    switch (pageName) {
      case 'Cart':
        await this.byDataTest('nav-cart').click();
        await expect(browser).toHaveUrl(expect.stringContaining('/checkout'));
        break;
      default:
        throw `Unsupported navigation section: ${pageName}`;
    }
    return;
  }
}

export default new HeadersSection();
