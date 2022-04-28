// const {chromium} = require('@playwright/test');
// // const {expect} = require('chai');

// // resources

// (async () => {
//     const baseUrl = "https://az1d3pvglstudydesignerappqaweb.azurewebsites.net/#/schedule-designer";
//     const browser = await chromium.launch({headless: false});
//     const context = await browser.newContext({viewport: {width:1440, height:1080}});

//     const page = await context.newPage();

//     await page.goto(baseUrl);

//     await page.fill("//*[@id='mat-dialog-0']/app-study-protocol-selector-dialog/div/app-dialog-frame/div/div[2]/div[1]/div/div[1]/div/div[1]/div/input", "uTestSponsor QA_UB_SD");
//     await page.press('body', 'Enter');
//     await page.click("//*[@id='mat-dialog-0']/app-study-protocol-selector-dialog/div/app-dialog-frame/div/div[2]/div[1]/div/div[1]/div/div[2]/div");


//     await page.fill("//*[@id='mat-dialog-0']/app-study-protocol-selector-dialog/div/app-dialog-frame/div/div[2]/div[1]/div/div[2]/div/div[1]/div/input", "Planned-2 01-Apr-2022");
//     await page.press('body', 'Enter');
//     await page.click("//*[@id='mat-dialog-0']/app-study-protocol-selector-dialog/div/app-dialog-frame/div/div[2]/div[1]/div/div[2]/div/div[2]/div");

//     await page.click("//*[@id='mat-dialog-0']/app-study-protocol-selector-dialog/div/app-dialog-frame/div/div[2]/div[2]/button[1]/span");

//     await page.waitForTimeout(15000);    

//     await browser.close();
// })();