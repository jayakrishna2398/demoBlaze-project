import {chromium,Browser,BrowserContext,Page} from "playwright/index.js";
    
describe("handle sign up", () =>{
    let browser: Browser
    let context:BrowserContext
    let page:Page;
    jest.setTimeout(20000);
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
        await page.fill("input[id='loginpassword']","kicha23031998")
        await page.click("//button[text()='Log in']")
        const userName = await page.$("#nameofuser")
        if(userName!=null){
            await userName?.click();
            console.log(userName);
        }else console.log("null");
        })
    })