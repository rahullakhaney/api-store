// Phantombuster configuration {
"phantombuster command: nodejs"
"phantombuster package: 5"
"phantombuster flags: save-folder"
"phantombuster dependencies: lib-api-store-DEV.js, lib-StoreUtilities-DEV.js"

import Buster from "phantombuster"
import puppeteer from "puppeteer"
import { IUnknownObject, isUnknownObject } from "./lib-api-store-DEV"
import StoreUtilities from "./lib-StoreUtilities-DEV"

const buster = new Buster()
const utils: StoreUtilities = new StoreUtilities(buster)
// }

const formatXhrContent = (hit: IUnknownObject): IUnknownObject => {
	const res = { name: "", city: "", country: "", website: "" } as IUnknownObject

	res.name = hit.name || null
	res.city = hit.city || null
	res.country = hit.country || null
	if (isUnknownObject(hit.external_urls)) {
		res.website = hit.external_urls.homepage
		res.twitter = hit.external_urls.twitter
		res.crunchbase = hit.external_urls.crunchbase
		res.linkedin = hit.external_urls.linkedin
		res.facebook = hit.external_urls.facebook
		res.angellist = hit.external_urls.angellist
	}
	return res
}

/**
 * @param {puppeteer.Page} page - Puppeteer page instance
 * @param {string} url - URL to open
 * @return Scraped startups
 */
const scrapeWebsubmit = async (page: puppeteer.Page, url: string): Promise<IUnknownObject[]> => {
	const startups: IUnknownObject[] = []
	const res = await page.goto(url, { waitUntil: "domcontentloaded" })
	if (res && res.status() === 200) {
		while (true) {
			const timeLeft = await utils.checkTimeLeft()
			if (!timeLeft.timeLeft) {
				utils.log(timeLeft.message, "warning")
				break
			}
			const research = await page.waitForResponse((xhr) => {
				return xhr.url().indexOf("/1/indexes/*/queries") > -1 && xhr.status() === 200
			}, { timeout: 60000 })
			const xhrJson = await research.json()
			for (const one of xhrJson.results) {
				if (one.hits) {
					for (const hit of one.hits) {
						startups.push(formatXhrContent(hit))
					}
				}
			}
			utils.log(`${startups.length} startup scraped`, "info")
			const element = await page.$("button.ais-InfiniteHits-loadMore")
			if (element) {
				// const className = await element.getProperty("className")
				await page.click("button.ais-InfiniteHits-loadMore")
			} else {
				break
			}
		}
	}
	utils.log(`${startups.length} startup scraped`, "done")
	return startups
}

(async () => {
	const browser = await puppeteer.launch({ args: ["--no-sandbox"] })
	utils.log("Opening https://websummit.com/featured-startups", "info")
	const page = await browser.newPage()
	const res = await scrapeWebsubmit(page, "https://websummit.com/featured-startups")
	await browser.close()
	await utils.saveResults(res, res, null, null, true)
	process.exit()
})()
.catch((err) => {
	process.exit(1)
})
