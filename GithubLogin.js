const {By, Key, Builder} = require("selenium-webdriver");
require("chromedriver");

async function test_case(){
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("https://github.com");
    
    //await new Promise(r => setTimeout(r, 7000));
    
     await driver.findElement(By.partialLinkText("Sign in")).click();
     await new Promise(r => setTimeout(r, 500));
    
     console.log(await driver.getTitle());

     if (await driver.getTitle() === "Sign in to GitHub · GitHub"){
        console.log("Test 1 success");
     }
     else {
        console.log("Test 1 failed");
        return;
     }
     
    await driver.findElement(By.name("login")).sendKeys("mail");
    await driver.findElement(By.name("password")).sendKeys("pwd", Key.RETURN);
    
    if (await driver.findElement(By.className("flash-close js-flash-close")).isDisplayed() ){

        console.log("Test 2 success");
    }

    driver.quit();
    //setInterval(function(){
    //    driver.quit();
   // }, 1000);
}

test_case();