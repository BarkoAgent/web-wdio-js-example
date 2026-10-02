import { Given, When } from '@wdio/cucumber-framework';
import LoginPage from '../../automation-code/pageobjects/login.page.js';
import HomePage from '../../automation-code/pageobjects/home.page.js';
import UsersApi from '../../automation-code/api-helpers/users.api.js';
import { buildUser } from '../../automation-code/support/data.js';

const pages = {
  login: LoginPage,
  home: HomePage,
};

Given(/^a registered customer exists$/, async () => {
  const user = buildUser();
  await new UsersApi().registerUser(user);
  global.scenarioContext.user = user;
});

Given(/^I open the "(.*)" page$/, async (page) => {
  await pages[page].open();
});

When(/^I log in as the registered customer$/, async () => {
  const { email, password } = global.scenarioContext.user;
  await pages.login.login(email, password);
});
