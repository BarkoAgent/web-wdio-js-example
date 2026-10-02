import { existsSync, mkdirSync } from 'fs';
import { copySync } from 'fs-extra';

export const reportCleanup = async () => {
  try {
    const isWin = process.platform === 'win32';

    let destDir = `${process.cwd()}/allure-results/history`;
    let sourceDir = `${process.cwd()}/allure-report/history`;

    if (isWin) {
      destDir = `${process.cwd()}\\allure-results\\history`;
      sourceDir = `${process.cwd()}\\allure-report\\history`;
    }

    if (!existsSync(destDir)) {
      mkdirSync(destDir, { recursive: true });
    }

    if (!existsSync(sourceDir)) {
      mkdirSync(sourceDir, { recursive: true });
    }

    copySync(sourceDir, destDir, { overwrite: true }, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('success!');
      }
    });
  } catch (e) {
    console.error(e);
    return 1;
  }
};
