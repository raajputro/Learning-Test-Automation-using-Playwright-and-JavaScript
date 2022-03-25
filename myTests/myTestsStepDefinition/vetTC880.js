// const { chromium } = require('@playwright/test');         // to load chromium module from playwright

// (
//     async () => {

//         // some needed urls and data
//         const workOrderId = "177947";                       // change this value only

//         const baseUrl = "https://ui-qa1.fndev.net/";
//         const loginUrl = baseUrl+"login/";
//         const logoutUrl = baseUrl+"logout/";        
//         const workOrderUrl = baseUrl+"workorders/"+workOrderId;
//         const findProviderUrl = workOrderUrl+"/providers";

//         // opening a chromium browser in incognito mode and with full screen viewpoint
//         const browser = await chromium.launch({ headless: false });        
//         const context = await browser.newContext({viewport: {width:1440, height:1080}});
        
//         // opening a new tab
//         const page = await context.newPage();

//         // going to a base url's login page
//         await page.goto(loginUrl);

//         // logging in with user data - as Buyer
//         await page.fill("//input [@id='email']", "premierBuyerCompany1615273528");
//         await page.fill("//input [@id='password']", '1');
//         await page.click("//button [@data-testid='Log in']");
        
//         // navigating to a particular work order details page        
//         await page.goto(workOrderUrl);

//         // navigating to find provider page
//         await page.goto(findProviderUrl);
//         await page.waitForTimeout(5000);

//         // putting selective provider and searching that provider
//         await page.fill("//input[@type='search']", '73249');
//         await page.press('body','Enter');        
//         await page.waitForTimeout(5000);

//         // find and click into Nearby tab        
//         await page.click("//div[@data-nw-file='TalentGridColumn']//child::li[text()='Nearby']", { state: `attached` });
//         await page.waitForTimeout(15000);

//         // clicking on Route button
//         await page.click("//div[@data-nw-file='DataTable']//child::button[@data-testid='Route']", { state: `attached` });
//         await page.waitForTimeout(15000);

//         // clicking on Pending Assignment tab
//         await page.click("//div[@data-nw-file='TalentGridColumn']//child::li[text()='Pending assignment']", { state: `attached` });
 
//         // go to logout page
//         await page.goto(logoutUrl);
//         await page.press('body', 'Enter');    
//         await page.waitForTimeout(5000);
 
//         // now login as provider, and have screenshot
//         await page.goto(loginUrl);
//         await page.fill("//input [@id='email']", "benzema.goalmachine");
//         await page.fill("//input [@id='password']", '1');
//         await page.click("//button [@data-testid='Log in']");
//         await page.waitForTimeout(15000);
 
//         // opening new tab
//         const page2 = await context.newPage();
//         await page2.waitForTimeout(5000);

//         // going to routed work order
//         await page2.goto(workOrderUrl);
//         await page2.waitForTimeout(5000);

//         // find Accept button, and click on that
//         await page2.click("//button[@type='button']//child::span[text()='Accept']");
//         await page2.waitForTimeout(5000);

//         // find acknowledge and accept button, and click on that
//         await page2.click("//button[@type='button']//child::span[text()='Acknowledge And Accept']");
//         await page2.waitForTimeout(5000);    

//         // logout provider
//          await page2.goto(logoutUrl);
//          await page2.press('body', 'Enter');    
//          await page2.waitForTimeout(5000);

//         // close browser
//         await browser.close();
//     }
// )();
