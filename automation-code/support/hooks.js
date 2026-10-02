import { Before, After } from '@wdio/cucumber-framework';

Before(async () => {
  // fixed size instead of maximizeWindow(): a maximized headless window shrinks to 800x600 and the site switches to its mobile layout
  await browser.setWindowSize(1920, 1080);
  await browser.deleteCookies();
  // use this to share data between steps (accessible in step-defs)
  global.scenarioContext = {};
});

After(async (scenario) => {
  if (scenario.result.status === 'FAILED') {
    await browser.takeScreenshot();
  }
});
