const { url } = require('inspector');
const browser = require('./browser');
const scrapper = require('./scrapper');


/* 
Please write some code that scrapes property name, property type (e.g Apartment),
number of bedrooms, bathrooms and list of the amenities for the following 3 properties:
https://www.airbnb.co.uk/rooms/33571268
https://www.airbnb.co.uk/rooms/20669368
https://www.airbnb.co.uk/rooms/50633275

 */
let urls = [
  "https://www.airbnb.co.uk/rooms/33571268",
  "https://www.airbnb.co.uk/rooms/20669368",
  "https://www.airbnb.co.uk/rooms/50633275"
];

if (process.argv.length > 2) {
  urls = process.argv.slice(2)
}

browser.startBrowser().then(
  async (browserInstance) => {
    try {
      const scrapedPages = await Promise.allSettled(
        urls.map(url=>scrapper.scrapePage(browserInstance, url))
      )
      console.log("scrapedPages =>",JSON.stringify(scrapedPages.map(page => page.value), null, 4));
      await browserInstance.close();
    } catch (err) {
      console.error(err)
    }
  }
)



