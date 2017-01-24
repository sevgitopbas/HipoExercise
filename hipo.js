var assert = require ("assert");
require('chromedriver');
var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder()
	.forBrowser('chrome')
	.build();

	driver.get("https://www.google.com.tr/")
	driver.getTitle().then(fuction(title){			//Comparison of return value from system
		console.log(title)
		assert.aqual("google",title) 
	)};
	driver.findElement(webdriver.By.classname("gsfi lst-d-f")).click();
	driver.findElement(webdriver.By.classname("gsfi lst-d-f")).sendKeys("Hipo Labs");
	driver.findElement(By.id("Value")).sendKeys(Keys.ENTER);	 // OR driver.findElement(webdriver.By.xpath("//*[@id="_fZl"]/span/svg")).click()
	fuction check_title() {						//Control of Hipo Labs Web Page from Google Search
		var check = driver.getTitle()
		.then(fuction (title){
				if (title == 'Hipo Labs - Google Search') {
					console.log('success');
					return true;
				}
				else {
					console.log('fail --' + title);
				}
			}
		);
		return check;
	}
	driver.sleep(2000);
	driver.findElement(webdriver.By.xpath('//*[@id="rso"]/div[1]/div/div/div/h3/a')).click();
	driver.getTitle().then(fuction(hipotitle){    //Control of Hipo Labs Web Page 
		console.log(hipotitle)
		assert.aqual("Hipo",hipotitle) 
	)};
	driver.sleep(2000);
	driver.findElement(webdriver.By.css("#menuMaximizedButtonTeam > a")).click();		//Click Team Button
	
	var buttonId = webdriver.getElementById("pageTeamApplynowButton");	//Text Control for "APPLY NOW"
	var controlText = buttonId.getAttribute("APPLY NOW");				
	alert(controlText);

	var screenshot = require('screenshot');			
	driver.takeScreenshot().then(function(data){		//  screenshot, saved to applyNowButton.png
		driver.writeScreenShot('applyNowButton.png', data, 'base64');
	});

	driver.sleep(2000);
	driver.quit();