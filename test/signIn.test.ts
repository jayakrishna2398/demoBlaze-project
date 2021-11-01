import {chromium,Browser,BrowserContext,Page} from "playwright/index.js";
    
describe("handle sign up", () =>{
    let browser: Browser
    let context:BrowserContext
    let page:Page;
    jest.setTimeout(40000);
    beforeAll(async() =>{
        browser = await chromium.launch({
            headless: false
        })
         context = await browser.newContext();
         page = await context.newPage();
        await page.goto("https://demoblaze.com/")
    })
    test("sign in", async() =>{
        await page.click("a[id='login2']")
        await page.fill("input[id='loginusername']", "jayakrishnaarasu34")
        await page.fill("input[id='loginpassword']","")
        await page.click("//button[text()='Log in']")
        // const userName = await page.getAttribute("//a[.='Welcome jayakrishnaarasu34']","value")
        // if(userName!=null){
        //     console.log(userName);}     //*tried to bring username*///
        })

    test("inner elements", async() =>{
        await page.$("#itemc");    //*laptop button//
        await page.click("text='Sony vaio i5'");
        await page.click("a[href='index.html']");
        await page.$("//a[contains(normalize-space(),'Phones')]");      //*phone button//
        await page.click("text='Nokia lumia 1520'");
        await page.click("a[href='index.html']");
        await page.click("//a[starts-with(text(),'Monitors')]")   //*Monitor button//
        await page.click("text='Apple monitor 24'");
            await page.click("//a[@class='btn btn-success btn-lg']")
            page.on("dialog", async (dialog) =>{
            await dialog.accept();
        })
            await page.click("//a[contains(text(),'Cart')]");
            await page.click("//a[contains(.,'Delete')]");  //deleting single element
            await page.click("//tbody/tr[1]/td[4]/a[1]");   //deleting particular element
            await page.click("//tbody/tr[2]/td[4]/a[1]");   //deleting multiple elements

    })
    afterAll(async()=>{
        await browser.close();
        await context.close();
        await page.close();
    })
    })