import Page from './page.js';

class ProductsPage extends Page {
  get productTitle() {
    return $('h1[data-test="product-name"]');
  }

  get unitPrice() {
    return $('[data-test="unit-price"]');
  }

  get buttonAddToCart() {
    return $('[data-test="add-to-cart"]');
  }

  get cartQuantity() {
    return $('[data-test="cart-quantity"]');
  }

  // xpath example
  async productByName(name) {
    return $(`//*[@data-test="product-name" and normalize-space()="${name}"]`);
  }

  async selectProduct(productToSelect) {
    const product = await this.productByName(productToSelect);
    await product.waitForClickable();
    await product.click();
  }

  async checkProductTitle(title) {
    await expect(await this.productTitle.getText()).toEqual(title);
  }

  async getUnitPrice() {
    return (await this.unitPrice.getText()).trim();
  }

  async clickButtonAddToCart() {
    await this.buttonAddToCart.waitForClickable();
    await this.buttonAddToCart.click();
    // the cart is created through the API; wait until the header badge confirms it
    await this.cartQuantity.waitForDisplayed();
  }
}

export default new ProductsPage();
