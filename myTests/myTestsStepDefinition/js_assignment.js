const {chromium} = require('@playwright/test');

let writeCommentToAssignedWorkOrders = async (workOrderId, userName, userPass, textDetails) => {
    const baseUrl = "https://ui-qa1.fndev.net/";
    var loginUrl = baseUrl+"login/";
    var logoutUrl = baseUrl+"logout/";
    var workOrderUrl = baseUrl+"workorders/"+workOrderId;
    var messageUrl = workOrderUrl+"/messages";
    const textAreaElement = "//div [@class='workorder-messages']//following::textarea";
    const sendButtonElement = "//button[@data-testid='Send']";
    // const textDetails = "This comment is put using JavaScript-1";


    // opening a chromium browser
    const browser = await chromium.launch({headless: true});
    const context = await browser.newContext({viewport:{width:1440, height:1080}});

    // open a new tab
    const page = await context.newPage();

    // navigate to login url
    await page.goto(loginUrl);

    // login with user data
    await page.fill("//input [@id='email']", userName);
    await page.fill("//input [@id='password']", userPass);
    await page.click("//button [@data-testid='Log in']");

    await page.waitForTimeout(10000);

    // navigate to message tab of the workorder
    await page.goto(messageUrl);
    await page.waitForTimeout(5000);

    // put your message, and click on send
    await page.fill(textAreaElement, textDetails);
    await page.click(sendButtonElement);
    await page.waitForTimeout(5000);

    await page.screenshot({path:workOrderId+'SS.png'});

    // navigate to logout url
    await page.goto(logoutUrl);
    await page.waitForTimeout(5000);

    // close the browser
    await browser.close();
}

const workOrderList = new Array(178047, 178049, 178042);
const providerCreds = ["benzema.goalmachine", "1"];
    // const buyerCreds = ["premierBuyerCompany1615273528", "1"];

    // generating random text 
const allCapsAlpha = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"]; 
const allLowerAlpha = [..."abcdefghijklmnopqrstuvwxyz"]; 
const allNumbers = [..."0123456789"];
    
const base = [...allCapsAlpha, ...allNumbers, ...allLowerAlpha];
    
const generator = (base, len) => {
    return [...Array(len)]
        .map(i => base[Math.random()*base.length|0])
        .join('');
};

for (woID in workOrderList){
   // put comment into an assigned work order
   var woText = workOrderList[woID] + generator(base, 28);
   console.log(woText);
   writeCommentToAssignedWorkOrders(workOrderList[woID], providerCreds[0], providerCreds[1], woText);
}