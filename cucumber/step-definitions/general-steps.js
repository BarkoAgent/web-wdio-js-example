import { When } from '@wdio/cucumber-framework';
import HeadersSection from '../../automation-code/pageobjects/sections/header.section.js';

const pages = {
  headersSection: HeadersSection,
};

When(/^I navigate to "([^"]*)" page$/, async (pageName) => {
  await pages.headersSection.navigateTo(pageName);
});
