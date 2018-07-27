// 'use strict';
const puppeteer = require('../lib/puppeteer');

// const Downloader = require('puppeteer/utils/ChromiumDownloader');
// const {chromium_revision} = require('puppeteer/package.json').puppeteer;
// const info = Downloader.revisionInfo(Downloader.currentPlatform(), chromium_revision);
// console.log(info);

// const user = 'bwbuser1';
// const pass = 'Bwb@2016#';
// const ip ='http://10.104.66.70'
// const port = '8080'
// const headers = new Map();
// headers.set(
//   'Authorization',
//   `Basic ${new Buffer(`${user}:${pass}`).toString('base64')}`
// );

// (async () => {
//     const browser = await puppeteer.launch({headless : false,ignoreHTTPSErrors: true});
//     const page = await browser.newPage();
//     // await page.authenticate({username:"bwbuser1", password:"Bwb@2016#"});
//     await page.goto('https://bwb-dotnet-core-bwb-openshift-devteam.caas.nz.service.dev/');
//     await page.screenshot({path: 'example.png'});
  
//     // await browser.close();
//   })();

it("launch g", () => {
    puppeteer.launch({xecutablePath: './chrome-win32/chrome.exe'}).then(async browser => {
        const page = await browser.newPage();
        await page.goto('https://www.google.com');
        // other actions...
        // await browser.close();
      });

});

// it("hi test", async() => {
// // async function helloWorld() {

//   const browser = await puppeteer.launch({headless: false,args: ['--start-fullscreen']});
//   const page = await browser.newPage();

//   await page.goto('https://en.wikipedia.org/wiki/%22Hello,_World!%22_program');

//   const firstPar = await page.$eval('#mw-content-text p', el => el.innerText);

//   console.log(firstPar); // A "Hello, World!" program is a computer program that outputs ...

//   await browser.close();
// // }

// // helloWorld();
// },10000);

// it("launch", () => {
//     // async function run() {
//         const browser = await puppeteer.launch();
//         const page = await browser.newPage();
        
//         await page.goto('https://github.com');
//         await page.screenshot({ path: 'screenshots/github.png' });
        
//         browser.close();
//     //   }
      
//     //   run(); 
// });