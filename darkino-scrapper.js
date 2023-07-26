const puppeteer = require('puppeteer');
const mysql     = require('mysql');

function get_movies () {
    return new Promise(async (resolve, reject) => {
        try {
            // let db = connect_db();
            // db.connect();

            // let query = db.query('SELECT * FROM db.movies', function (error, results, fields) {
            //     if (error) throw error;

            //     results.forEach(result => {
            //         console.log(result.solution);
            //     });
            // });
            
            try {
                const browser = await puppeteer.launch();
                const page = await browser.newPage();
                // darkino link ... may change sometimes
                await page.goto("https://www2.darkino.ink/fr/posts?category=2");
                let urls = await page.evaluate(() => {
                    let results = [];
                    let items = document.querySelectorAll('h4');

                    items.forEach((item) => {
                        let movie_link = item.parentElement.getAttribute('href');

                        let download_url = 0;                        
                        let data = {
                            darkino_id: item.parentElement.parentElement.getAttribute('data-id'),//item.innerText, //item.getAttribute('href')   
                            title: item.parentElement.innerText,
                            link: movie_link,
                            download_url: download_url,
                            thumbmail: item.parentElement.parentElement.querySelector('img').getAttribute('src')
                        };


                        results.push(data);

                        // let query = db.query('INSERT INTO db.movies SET ?', data, function (error, results, fields) {
                        //     if (error) throw error;
                        // });

                        // console.log(query.sql);
                    });
                    return results;
                })

                browser.close();
                return resolve(urls);
            } catch (e) {
                return reject(e);
            }

            db.end();
        } catch (e) {
            return reject(e);
        }
    })
}

get_movies().then(console.log).catch(console.error);