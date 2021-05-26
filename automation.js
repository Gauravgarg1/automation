let pup = require("puppeteer");

let gpage;

pup
    .launch({ headless: false })
    .then(function (browser) {

        return browser.newPage();
    })
    /////////////////////////////////////////////
    .then(function (page) {
        gpage = page;

        return page.goto("https://www.google.co.in/");

    })
///////////////////////////
    .then(function () {
        return gpage.type("input.gLFyf.gsfi", "cats");
    })
//////////////////////////////////
    .then(function () {
        return Promise.all([
            gpage.waitForNavigation(),
            gpage.click(".FPdoLc.lJ9FBc [value='Google Search']"),

        ]);

    })
    ///////////////////////////////
    .then(function () {
        return Promise.all([
            gpage.waitForNavigation(),
            gpage.click("[data-hveid='CAEQAw']"),

        ]);

    })
////////////////////

    .then(function () {
        return gpage.screenshot({ path: "ss.png" });
    })
    .catch(function (err) {
        console.log(err);
    }

    );
