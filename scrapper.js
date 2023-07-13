const parser = require('./parser/airbnb');

async function scrapePage(browser, url){
  const page = await browser.newPage();
  await page.goto(url)
  const data = await parser.parsePage(page)
  return {
    url,
    data
  }
}

module.exports = {
	scrapePage
};