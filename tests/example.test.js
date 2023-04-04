const { describe, it } = require('node:test')
const puppeteer = require('puppeteer')
const expect = require ('chai').expect

describe('My First Puppeteer test', () =>{
    it('Should launch the browser', async function(){
        const browser = await puppeteer.launch({headless: false, slowMo:10, devtools: false})
        const page = await browser.newPage()
        await page.goto('https://devexpress.github.io/testcafe/example/')
        // await page.waitForTimeout(3000)
        // await page.waitForSelector('h1')
        // await page.reload()
        // await page.waitForTimeout(3000)
        //await page.waitForSelector('h1')
        //await page.goto('http://dev.to')
        //await page.waitForSelector('#page-route-change')
        //await page.waitForTimeout(3000)
        //await page.goBack()
        //await page.waitForSelector('h1')
        //await page.waitForTimeout(3000)
        //await page.goForward()
        // handle Inputs
        // await page.type('#developer-name', 'Mike' /*,{ delay: 200 any delay is recommanded for prod testing}*/)
        // await page.waitForTimeout(3000)
        // Deal with checkbox
        // await page.click('#tried-test-cafe', { clickCount: 1})
        // await page.waitForTimeout(3000)
        // Deal with DropDown
        // await page.select('#preferred-interface', 'JavaScript API')
        // Pass a content as var or constant
        // const message = 'Lets fill the message with some text'
        // await page.type('#comments', message) 
        // deal with buttons
        // await page.click('#submit-button', { clickCount: 1})
        // await page.waitForTimeout(3000)

        // grab page title and url
        const title = await page.title()
        const url = await page.url()
        // Get element text
        const text = await page.$eval('h1', e => e.textContent)
        //  console.log('Text in h1 is: ' + text)
        // Get element count
        const count = await page.$$eval('p', e => e.length)
        console.log('there is ' + count +' p tags')
         // Assertions
         expect(title).to.be.a('string', 'TestCafe Example Page')
         expect(url).to.include('https://devexpress.github.io/testcafe/')
         expect(text).to.be.a('string', 'Example')
         expect(count).to.be.equal(9)
         // Set defaulTimeout
         // in standard of puppeteer timeout is for 40 seconds
         // Overide standard timeOut
         await page.setDefaultTimeout(5000)
         await page.setDefaultNavigationTimeout(10000)
        await browser.close()
        
    })
})