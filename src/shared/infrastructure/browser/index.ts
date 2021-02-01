import puppeteer from 'puppeteer-extra'
import StealthPlugin from 'puppeteer-extra-plugin-stealth'

export const puppeteerPage = async () => {
    return await puppeteer
        .use(StealthPlugin())
        .launch({ headless: true }).then(async browser => {
            return (await browser.pages())[0]
        })
}