const puppeteer = require('puppeteer');

(async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto('https://www2.darkino.ink/fr');

  await page.screenshot({ path: 'test.png'});
	
	await browser.close();
})();