const puppeteer = require('puppeteer');
const mysql     = require('mysql');

let tr_buttons;

function get_movies_download_url (movie_url) {
    return new Promise(async (resolve, reject) => {
            const browser = await puppeteer.launch({ headless: false});
            const page = await browser.newPage();

            await page.goto(movie_url, { waitUntil: 'domcontentloaded'});
            await page.waitForSelector('button.flex');
            
            let handles = await page.$$('button.flex');
            let handle = handles[3];
            await handle.click();
            console.log(handle.innerHtml);

            // let urls = await page.evaluate(() => {
            //     let results = [];
            //     let items = document.querySelectorAll('button.flex'); 

            //     for (let index = 0; index < items.length; index++) {
            //         const element = items[index];

            //         if (index == 3) {
            //             tr_buttons = element;
            //         }

            //         results.push(element.innerText);
            //     }

            //     return results;
            // });
            //browser.close();
            //return resolve(urls);
    })
}

get_movies_download_url("https://www2.darkino.ink/fr/post/films/874971-dune").then(console.log).catch(console.error);