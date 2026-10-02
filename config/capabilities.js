import 'dotenv/config';

// Set HEADLESS=true (env var or .env) to run the browsers without a window.
export const headless = process.env.HEADLESS === 'true';

export const chrome = (maxInstances) => ({
  maxInstances,
  browserName: 'chrome',
  acceptInsecureCerts: true,
  ...(headless && { 'goog:chromeOptions': { args: ['--headless=new'] } }),
});

export const firefox = (maxInstances) => ({
  maxInstances,
  browserName: 'firefox',
  acceptInsecureCerts: true,
  ...(headless && { 'moz:firefoxOptions': { args: ['-headless'] } }),
});
