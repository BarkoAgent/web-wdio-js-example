import Page from './page.js';

class CartPage extends Page {
  get itemTitle() {
    return $('[data-test="product-title"]');
  }

  get itemQuantity() {
    return $('[data-test="product-quantity"]');
  }

  get itemPrice() {
    return $('[data-test="product-price"]');
  }

  async validateCartItem(item) {
    for await (const hash of item) {
      // the cart title carries a trailing space on the site
      await expect((await this.itemTitle.getText()).trim()).toEqual(hash['Product']);
      await expect(await this.itemQuantity.getValue()).toEqual(hash['Quantity']);
    }
  }

  async checkItemPrice(price) {
    await expect((await this.itemPrice.getText()).trim()).toEqual(`$${price}`);
  }
}

export default new CartPage();
