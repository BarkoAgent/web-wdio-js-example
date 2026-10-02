import { When } from '@wdio/cucumber-framework';
import ProductsPage from '../../automation-code/pageobjects/products.page.js';

const pages = {
  productsPage: ProductsPage,
};

When(/^I select "([^"]*)" product$/, async (productName) => {
  await pages.productsPage.selectProduct(productName);
  await pages.productsPage.checkProductTitle(productName);
  // prices on the public shop change, so remember the one shown here and compare it in the cart
  global.scenarioContext.productPrice = await pages.productsPage.getUnitPrice();
});

When(/^I add to cart$/, async () => {
  await pages.productsPage.clickButtonAddToCart();
});
