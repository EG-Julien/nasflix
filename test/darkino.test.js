const puppeteer = require('puppeteer')

describe("My first Setup Testing",()=>{
     it("Home landing page",async()=>{
        const browser = await puppeteer.launch({headless:false})
        const page = await browser.newPage();

        page.goto("https://www2.darkino.ink/fr");
        page.screenshot({path: 'darkino.net'});
     });
});