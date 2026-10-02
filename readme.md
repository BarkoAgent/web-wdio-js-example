# web-wdio-js-example

Example project for WDIO (WebdriverIO) with Cucumber and Allure reports, running against the public
[Practice Software Testing - Toolshop](https://practicesoftwaretesting.com) demo shop, which exists for test automation training.
The project does not depend on any private systems.

This is a training example for the _Test Automation with AI Agents & BarkoAgent_ course. It shows how to set up a web automation framework and may contain defects as part of the exercises, so it is not a production template.

WDIO is a highly configurable automation framework, which supports all forms of automated testing, including mobile. This framework provides plug-and-play integrations with various device farm services (Sauce Labs, BrowserStack etc.).
A lot of 3rd party services are integrated to this framework, full list can be visible check SERVICES section from this link to get more info https://webdriver.io/docs/gettingstarted.
Framework provides its own custom selectors as well as selectors built specifically for React components.

Disadvantages- few things are documented too lightly and a lot of SO answers to WDIO questions point to the old version docs which are no longer supported.

## What is covered

| Feature             | What it does                                                                                |
| ------------------- | ------------------------------------------------------------------------------------------- |
| `account.feature`   | Logs in as a new customer, checks the My account page and the name in the header, signs out |
| `sort.feature`      | Sorts the product list by price on the home page                                            |
| `view.cart.feature` | Adds a product to the cart and checks the cart row                                          |

Every scenario that needs a customer registers a brand new one through the shop's API (see `buildUser()` in
`automation-code/support/data.js`), so runs never share an account or a cart and nothing needs cleaning up.

## Project structure

```
automation-code/
  api-helpers/   axios helpers for the shop's REST API (registration, login)
  pageobjects/   page objects and shared sections
  support/       test data, Cucumber hooks, utilities
config/          WDIO configs (base, Chrome, Firefox, both)
cucumber/
  features/      Gherkin feature files
  step-definitions/
```

## Installation

Node v18 or later is required (the project is tested on Node 24), together with NPM.
Chrome and Firefox need to be installed to run the tests.
For reports install the Allure CLI (it needs Java), can be done via NPM:

```bash
npm install -g allure-commandline
```

To install project dependencies, use clean install, to ensure that package-lock.json file is not rebuilt:

```bash
npm ci
```

Recommended plugins for VSCode are included as well, so it would be the preferred code editor for this project

## Configuration

The defaults point to the public shop and need no setup. To override them, copy `.env.example` to `.env`:

| Variable   | Default                                   | Purpose                                                  |
| ---------- | ----------------------------------------- | -------------------------------------------------------- |
| `BASE_URL` | `https://practicesoftwaretesting.com`     | Shop UI                                                  |
| `API_URL`  | `https://api.practicesoftwaretesting.com` | Shop REST API used for test data setup                   |
| `HEADLESS` | `false`                                   | Set to `true` to run Chrome and Firefox without a window |

The shop is a shared public demo, so it can be slow or briefly unavailable, and its data can be reset at any time.

## Usage

### Running the tests

To run all tests on FF and Chrome:

```bash
npm run test
```

To run only on Chrome:

```bash
npm run test:chrome
```

To run only on FF:

```bash
npm run test:ff
```

To run headless (no browser window):

```bash
HEADLESS=true npm run test
```

To run a single feature:

```bash
npm run test:chrome -- --spec cucumber/features/account.feature
```

### Reporting

Mainly used with CI setup, so locally historical trends can show incorrect results. (Running multiple times the report generation locally will cause duplicate history entries). To generate a report locally:

```bash
npm run report
```

To delete local reports and history:

```bash
npm run delete-local-report
```

### Pre-commit hooks

Linters are triggered as a part of a pre-commit hook. Commits that contain errors won't be permitted. If there are warnings and they can be fixed automatically (simple code-style fixes) they will be fixed by the Prettier lib in this configuration. Other warnings will go through, meaning that your commit won't be blocked. Keep in mind there aren't any automatic fixes on feature files. So you will have to fix them by yourself and will have to re-add and commit them again automatically.

Known issue: Gherkin linter will go through the whole .feature files (EVEN the ones that are not part of the commit, so keep that in mind).

##### Yolo commits

You can bypass the pre-commit hooks (though strongly discouraged) by passing the `--no-verify` flag when commiting

```bash
git commit --no-verify
```

### Linters

JS and Gherkin linters are set up. Though these are triggered automatically, you can run them manually by using:

```bash
npm run linters
```
