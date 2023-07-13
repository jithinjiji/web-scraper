async function parsePage(page) {
  const h1Selector = await page.waitForSelector("h1");
  if (await h1Selector?.evaluate(el => el.textContent) === "Oops!") {
    return {}
  }
  await page.waitForSelector("button.l1ovpqvx.b65jmrv.v7aged4.dir.dir-ltr")
  await page.click("button.l1ovpqvx.b65jmrv.v7aged4.dir.dir-ltr");
  await page.waitForSelector("div.twad414.dir.dir-ltr")
  const parsedData = await page.evaluate(() => {
    const titleElement = document.body.querySelector("h1.hpipapi.i1pmzyw7.dir.dir-ltr")
    
    const bedroomXPathResult = document.evaluate(
      "//li[contains(., 'bedroom')]",
      document,
      null,
      XPathResult.ANY_TYPE,
      null
    );
    const bedroomElement = bedroomXPathResult.iterateNext();

    const bathroomXPathResult = document.evaluate(
      "//li[contains(., 'bathroom')]",
      document,
      null,
      XPathResult.ANY_TYPE,
      null
    );
    const bathroomElement = bathroomXPathResult.iterateNext();
    
    const amenities = []
    const amenityElements = document.body.querySelectorAll("div.twad414.dir.dir-ltr");
    amenityElements.forEach(amenity => {
      if (!amenity?.innerText?.includes("Unavailable")) {
        amenities.push(amenity.innerText)
      }
    })

    const propertyTypeElement = document.body.querySelector("h2.hpipapi.dir.dir-ltr")
    const propertyType = propertyTypeElement?.innerText?.split(' hosted')?.[0] ?? ""

    return {
      title: titleElement?.innerText,
      propertyType,
      bedrooms: bedroomElement?.innerText?.match(/\d+/)[0] ?? "",
      bathrooms: bathroomElement?.innerText?.match(/\d+/)[0] ?? "",
      amenities
    }
  })
  return parsedData;
}

module.exports = {
  parsePage
}