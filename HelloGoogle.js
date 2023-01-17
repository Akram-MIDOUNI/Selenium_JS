const {By, Key, Builder} = require("selenium-webdriver");
require("chromedriver");

async function test_case(){
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("https://google.com");
    //await new Promise(r => setTimeout(r, 1000));

    await driver.findElement(By.xpath("/html/body/div[2]/div[2]/div[3]/span/div/div/div/div[3]/div[1]/button[2]/div")).click();

    //await new Promise(r => setTimeout(r, 1000));

    await driver.findElement(By.name("q")).sendKeys("Hello, Google!", Key.RETURN);

    setInterval(function(){
        driver.quit();
    }, 3000);
}

test_case();