


function setStatus() {
    async function scrapeProduct(url) {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(url);
    
        const [el] = await page.$x('//*[@id="site-wrapper"]/section/div[1]/span/div[1]/table/tbody/tr[6]/td');
        const txt = await el.getProperty('textContent');
        const players = await txt.jsonValue();
    
        console.log({players});
    
        browser.close();

        
    }
    
scrapeProduct('https://minecraft-server-list.com/server/467807/')
}