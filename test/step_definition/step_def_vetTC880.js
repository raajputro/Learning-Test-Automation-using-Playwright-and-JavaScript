// const {chromium} = require('playwright');
// const {expect} = require('chai');
// const {Given, When, Then, setDefaultTimeout} = require('@cucumber/cucumber');
// setDefaultTimeout(50*1000);

// Given(/^I navigate to FieldNation$/, async function () {

//         this.baseUrl = "https://ui-qa1.fndev.net/";
//         this.browser = await chromium.launch({ headless: false });        
//         this.context = await this.browser.newContext({viewport: {width:1440, height:1080}});    
//         // opening a new tab
//         this.page = await this.context.newPage();
//         // going to a base url's login page
//         await this.page.goto(this.baseUrl);
//         // return 'pending';
//     });

// When(/^I login as username '(.+)' and password '(.+)'$/, async function (username, password) {

//     // creating login url, then navigating there    
//         this.loginUrl = this.baseUrl+"login/";
//         await this.page.goto(this.loginUrl);
//         await this.page.waitForTimeout(5000);

//     // accepting username and password, then clicking on login button
//         await this.page.fill("//input [@id='email']", username);
//         await this.page.fill("//input [@id='password']", password);
//         await this.page.click("//button [@data-testid='Log in']");
//         // return 'pending';    
//     });

// Then(/^I verify {string} is visible for buyer$/, async function (string) {
    
//         // verifying login successful, by checking a particular text visible
//         const element = await this.page.waitForSelector("//h1[@data-nw-file='index']", { state: `attached` });
//         const actualText = await element.innerText();        
//         expect(actualText).to.equal('Flightboard');
//         // await this.page.screenshot({path: '[1] Buyer Flightboard.png'});                 // taking a screenshot of login success        
//         // return 'pending';
//     });

// When('I navigate to workorder {string}', async function (workOrderId) {
//     // Write code here that turns the phrase above into concrete actions
//         this.workOrderUrl = this.baseUrl+"workorders/"+workOrderId;
//         console.log(this.workOrderUrl);        
//         await this.page.goto(this.workOrderUrl);
//         await this.page.waitForTimeout(5000);
//         // return 'pending';
//     });

// When('I click on route button to {string} provider', async function (userId) {
//     // Write code here that turns the phrase above into concrete actions
//         const findProviderUrl = this.workOrderUrl+"/providers";
//         await this.page.goto(findProviderUrl);
//         await this.page.waitForTimeout(5000);
//     // putting selective provider and searching that provider
//         await this.page.fill("//input[@type='search']", userId);
//         await this.page.press('body','Enter');        
//         await this.page.waitForTimeout(5000);
//     // find and click into Nearby tab        
//         await this.page.click("//div[@data-nw-file='TalentGridColumn']//child::li[text()='Nearby']", { state: `attached` });
//         await this.page.waitForTimeout(15000);
//     // clicking on Route button
//         await this.page.click("//div[@data-nw-file='DataTable']//child::button[@data-testid='Route']", { state: `attached` });
//         await this.page.waitForTimeout(5000);
//         return 'pending';
//     });

// Then('I verify workorder status is routed', async function () {
//     // Write code here that turns the phrase above into concrete actions
//     // clicking on Pending Assignment tab
//         await this.page.click("//div[@data-nw-file='TalentGridColumn']//child::li[text()='Pending assignment']", { state: `attached` });
//         await this.page.waitForTimeout(5000);
//     // checking for routed text now
//         // verifying work order has been routed -- not testing it at this moment
//         const element = await this.page.waitForSelector("//strong[text()='Routed']",{state: `attached`});
//         eleText = await element.innerText();
//         console.log(eleText);
//         expect(eleText).to.equal('ROUTED');
//         //await page.screenshot({ path:'[7] Check routed text.png'});

//         return 'pending';
//     });

// Then('I logout', async function(){
//     // going to logout url and clicking enter button from there
//         const logoutUrl = this.baseUrl+"logout/";
//         await this.page.goto(logoutUrl);
//         await this.page.press('body', 'Enter');
//         await this.page.waitForTimeout(5000);
//     // closing this browser instance
//         await this.browser.close();

//         return 'pending';
//     });

// Then('I verify {string} is visible for provider', async function (string) {
//     // Write code here that turns the phrase above into concrete actions
//     // return 'pending';
//     });

// When('I click on accept button', async function () {
//     // Write code here that turns the phrase above into concrete actions
//     // find Accept button, and click on that
//         await this.page.click("//button[@type='button']//child::span[text()='Accept']");
//         await this.page.waitForTimeout(5000);
//         return 'pending';
//     });

// When('I click on acknowledge button', async function () {
//     // Write code here that turns the phrase above into concrete actions
//     // find acknowledge and accept button, and click on that
//         await this.page.click("//button[@type='button']//child::span[text()='Acknowledge And Accept']");
//         await this.page.waitForTimeout(5000);  
//         return 'pending';
//     });

// Then('I verify workorder status is accepted', async function () {
//     // Write code here that turns the phrase above into concrete actions
//     // verify work order has been assigned to provider
//         element = this.page.waitForSelector("//div[@data-nw-file='GridColumn']//child::span/span/span[text()='Assigned']");
//         eleText = element.innerText();
//         console.log(eleText);
//         expect(eleText).to.equal('Assigned');
//         // await page2.screenshot({path: '[12] WO_Status_2.png'});      
//         await this.page.waitForTimeout(5000);
//         return 'pending';
//     });