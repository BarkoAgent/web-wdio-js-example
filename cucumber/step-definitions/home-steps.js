import { When, Then } from '@wdio/cucumber-framework';
import HomePage from '../../automation-code/pageobjects/home.page.js';

const pages = {
  homePage: HomePage,
};

When(/^I am on the Home page$/, async () => {
  await pages.homePage.isLoaded();
});

When(/^Sort the products by "([^"]*)"$/, async (sortOption) => {
  await pages.homePage.selectSortOptionByName(sortOption);
  await pages.homePage.optionSelected(sortOption);
});

Then(/^I see that products are sorted by price in ascending way$/, async () => {
  await pages.homePage.checkAscendingOrder();
});
