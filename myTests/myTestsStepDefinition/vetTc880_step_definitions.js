const {chromium} = require('@playwright/test');
const {expect} = require('chai');
const {Given, When, Then, setDefaultTimeout, Before, After} = require('@cucumber/cucumber');
setDefaultTimeout(10*1000);

Given('I navigate to Field Nation Site', async function () {
    // Write code here that turns the phrase above into concrete actions
    this.browser = await chromium.launch({headless: false});
    this.context = await this.browser.newContext({viewport: {width:1440, height:1080}});
    this.page = await this.context.newPage();

    this.baseUrl = "https://ui-qa1.fndev.net/";
    var loginUrl = this.baseUrl+"login";

    await this.page.goto(loginUrl);
    // await this.page.waitForTimeout(5000);

    var pageTitle = await this.page.title();
    console.log(pageTitle);
    var actualText = 'Log in to Field Nation';

    expect(actualText).to.equal(pageTitle);
    // return 'pending';
  });

When('I login using username {string} and password {string}', async function (string, string2) {
    // Write code here that turns the phrase above into concrete actions
    var element = "//input [@id='email']";
    await this.page.fill(element, string);
    element = "//input [@id='password']";
    await this.page.fill(element, string2);
    element = "//button [@data-testid='Log in']";
    await this.page.click(element);

    // await this.page.waitForTimeout(5000);
    // return 'pending';
  });

Then('I verify {string} is visible for buyer user', async function (string) {
    // Write code here that turns the phrase above into concrete actions
    var element = "//h1[@data-nw-file='index']";
    element = await this.page.waitForSelector(element, {state: `attached`});
    var actualText = await element.innerText();

    expect(actualText).to.equal(string);

    await this.page.screenshot({path: 'Buyer Flightboard.png'});
    // return 'pending';
  });

Then('I verify {string} is visible for provider user', async function (string) {
    // Write code here that turns the phrase above into concrete actions
    var element = "//button[@type='button']//child::span[text()='Reset Filters']";
    element = await this.page.waitForSelector(element, {state: `attached`});
    var actualText = await element.innerText();

    expect(actualText).to.equal(string);

    await this.page.screenshot({path: 'Provider Flightboard.png'});
    // return 'pending';
  });

Then('I logout from user', async function(){
    // Write code here that turns the phrase above into concrete actions
    var logoutUrl = this.baseUrl+"/logout";
    await this.page.goto(logoutUrl);

    this.browser.close();
    // return 'pending';
  });


When('I navigate to a specific workorder {string}', async function(string){
    // Write code here that turns the phrase above into concrete actions
    this.workOrderUrl = this.baseUrl+"workorders/"+string;
    var testUrl = this.workOrderUrl;
    console.log(testUrl);
    await this.page.goto(testUrl);

    var element = "//span[@data-testid=work-order-id']";
    element = await this.page.waitForSelector(element, {state: `attached`});
    var actualText = await element.innerText();

    expect(actualText).to.equal(string);
    
    await this.page.screenshot({path: 'Work order details page.png'});      
    // return 'pending';
  });

When('I click on route button to given {string} provider', async function(string){
    // Write code here that turns the phrase above into concrete actions
    var findProviderUrl = this.workOrderUrl+"/providers";

    await this.page.goto(findProviderUrl);    

    var element = "//span[@data-nw-file='Button' and (text()='Clear Filters')]";
    element = await this.page.waitForSelector(element, {state: `attached`});
    var actualText = await element.innerText();

    expect(actualText).to.equal('Clear Filters');
    // putting selective provider and searching that provider
    element = "//input[@type='search']";
    await this.page.fill(element, userId);
    await this.page.press('body','Enter');        
    await this.page.waitForTimeout(5000);
    // find and click into Nearby tab        
    element = "//div[@data-nw-file='TalentGridColumn']//child::li[text()='Nearby']";
    await this.page.click(element);
    await this.page.waitForTimeout(5000);
    // clicking on Route button
    element = "//div[@data-nw-file='DataTable']//child::button[@data-testid='Route']";
    await this.page.click(element);
    await this.page.waitForTimeout(5000);      
    // return 'pending';
});

Then('I verify workorder status is routed in pending assignment tab', async function(){
    // Write code here that turns the phrase above into concrete actions
    // clicking on Pending Assignment tab
    var element = "//div[@data-nw-file='TalentGridColumn']//child::li[text()='Pending assignment']";
    await this.page.click(element);
    await this.page.waitForTimeout(5000);
    // checking for routed text now
    // verifying work order has been routed -- not testing it at this moment
    element = await this.page.waitForSelector("//strong[text()='Routed']",{state: `attached`});
    eleText = await element.innerText();
    //console.log(eleText);
    expect(eleText).to.equal('ROUTED');
    //await page.screenshot({ path:'[7] Check routed text.png'});
      
    // return 'pending';
});