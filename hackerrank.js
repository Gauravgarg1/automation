let pup = require("puppeteer");

let gpage;
let email = "xoroho1952@jmpant.com";
let pass = "Gaurav@1";

pup
    .launch({ 
        headless: false ,
        defaultViewport:null,
        args: ["--start-maximized"],
        slowMo: 60,

    })
    .then(function (browser) {

        return browser.pages();
    })
    /////////////////////////////////////////////
    .then(function (pageArr) {
        gpage = pageArr[0];

        return gpage.goto("https://www.hackerrank.com/auth/login");

    })
    ///////////////////////////
    .then(function () {
        return gpage.type("#input-1", email);
    })
    //////////////////////////////////
    .then(function () {
        return gpage.type("#input-2", pass);
    })
    ///////////////////
    .then(function () {
        return Promise.all([
            gpage.waitForNavigation(),
            gpage.click("[data-analytics='LoginPassword']"),

        ]);

    })
    ///////////////////////////////
    .then(function () {
        return Promise.all([
            gpage.waitForNavigation(),
            gpage.click("[data-attr1='interview-preparation-kit']"),

        ]);

    })
    .then(function(){
        return gpage.waitForSelector("[data-attr1='warmup']");

    })
    .then(function () {
        return Promise.all([
            gpage.waitForNavigation(),
            gpage.click("[data-attr1='warmup']"),

        ]);

    })
    .then(function(){
        return gpage.waitForSelector(".ui-btn.ui-btn-normal.primary-cta.ui-btn-primary.ui-btn-styled");

    })
    .then(function () {
        return Promise.all([
            gpage.waitForNavigation(),
            gpage.click(".ui-btn.ui-btn-normal.primary-cta.ui-btn-primary.ui-btn-styled"),

        ]);

    })
    .then(function(){
        return gpage.waitForSelector("[data-attr2='Editorial']");

    })
    .then(function () {
        return Promise.all([
            gpage.waitForNavigation(),
            gpage.click("[data-attr2='Editorial']"),

        ]);

    })
    .then(function(){
        return handlelockbtn(".ui-btn.ui-btn-normal.ui-btn-primary.ui-btn-styled");

    })
    .then(function(){
        return gpage.evaluate(
            function()
            {
                let allcodes=document.querySelectorAll(
                    ".challenge-editorial-block.editorial-setter-code h3"
                );
                let alllanguages=document.querySelectorAll(
                    ".challenge-editorial-block.editorial-setter-code .highlight"
                );
                let obj={};
                obj.code=allcodes[0].innerText;
                obj.language=alllanguages[0].innerText;
                return obj;

            }
        )
    })
    .then(function(obj){
        console.log(obj);
    })
    
    .catch(function (err) {
        console.log(err);
    }

    );

    function handlelockbtn(selector)
    {
        return new Promise(function(resolve,reject)
        {
            gpage.waitForSelector(selector)
            .then(function(){
                gpage.click(selector);
            })
            .then(function(){
                //lock btn click kr chuke honge
                resolve();
            })
            .catch(function(){
                resolve();
            })
        })
    }
