import { Then } from '@wdio/cucumber-framework';
import { cucumberTableParser } from '../../automation-code/support/utils.js';
import CartPage from '../../automation-code/pageobjects/cart.page.js';

const pages = {
  cartPage: CartPage,
};

Then(/^I see the cart contains the product and correct quantity:$/, async (table) => {
  const parsedTable = cucumberTableParser(table.hashes());
  global.scenarioContext.cartItem = parsedTable;
  await pages.cartPage.validateCartItem(global.scenarioContext.cartItem);
});

Then(/^the cart price matches the product page price$/, async () => {
  await pages.cartPage.checkItemPrice(global.scenarioContext.productPrice);
});
