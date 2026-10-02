import { When, Then } from '@wdio/cucumber-framework';
import AccountPage from '../../automation-code/pageobjects/account.page.js';
import LoginPage from '../../automation-code/pageobjects/login.page.js';
import HeadersSection from '../../automation-code/pageobjects/sections/header.section.js';

const pages = {
  accountPage: AccountPage,
  loginPage: LoginPage,
  headersSection: HeadersSection,
};

Then(/^I am on the My account page$/, async () => {
  await pages.accountPage.isLoaded();
});

Then(/^I see my name in the header menu$/, async () => {
  const { first_name: firstName, last_name: lastName } = global.scenarioContext.user;
  await pages.headersSection.checkUserName(`${firstName} ${lastName}`);
});

When(/^I sign out$/, async () => {
  await pages.headersSection.signOut();
});

Then(/^I am logged out$/, async () => {
  await pages.loginPage.verifyLoginFormVisible();
});
