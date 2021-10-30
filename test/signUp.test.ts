import {chromium,Browser,BrowserContext,Page} from "playwright/index.js";
    
describe("handle sign up", () =>{
    let browser: Browser
    let context:BrowserContext
    let page:Page;
    jest.setTimeout(10000);
    beforeAll(async() =>{
        browser = await chromium.launch({
            headless: false
        })
         context = await browser.newContext();
         page = await context.newPage();
        await page.goto("https://demoblaze.com/")
    })

    test("sign Up", async() =>{
    await page.click("a[id='signin2']")
    await page.fill("input[id='sign-username']", "jayakrishnaarasu34")
    await page.fill("input[id='sign-password']","kicha23031998")
    await page.click("//button[text()='Sign up']")
    //await browser.close();
})
})