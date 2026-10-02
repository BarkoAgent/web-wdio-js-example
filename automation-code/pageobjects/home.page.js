import Page from './page.js';

class HomePage extends Page {
  get firstProductName() {
    return $('[data-test="product-name"]');
  }

  get buttonSort() {
    return $('[data-test="sort"]');
  }

  get price() {
    return $$('[data-test="product-price"]');
  }

  async isLoaded() {
    await this.firstProductName.waitForDisplayed();
  }

  // wdio built in dropdown helper example
  async selectSortOptionByName(name) {
    await this.buttonSort.waitForClickable();
    await this.buttonSort.selectByVisibleText(name);
  }

  // waitUntil the condition is fulfilled with a truthy value
  async optionSelected(name) {
    await browser.waitUntil(
      async () => {
        return (await this.buttonSort.$('option:checked').getText()) === name;
      },
      { timeout: 10000, timeoutMsg: 'expected sort option to be selected after 10s' }
    );
  }

  async checkAscendingOrder() {
    const priceList = [];
    for (let pr of await this.price) {
      let prices = await pr.getText();
      priceList.push(prices.replace('$', '').trim());
    }

    for (let i = 0; i < priceList.length - 1; i++) {
      if (priceList[i] > priceList[i - 1]) {
        await expect(this.priceList).toBe(true);
      }
      return true;
    }
  }

  open() {
    return super.open('/');
  }
}

export default new HomePage();
