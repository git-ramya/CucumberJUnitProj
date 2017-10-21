package com.feature.stepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginSteps {

	WebDriver driver;
	@Given("^Open Login page in browser$")
	public void open_Login_page_in_browser() throws Throwable {
		System.setProperty("webdriver.chrome.driver","C:\\Users\\USER\\Downloads\\selenium_releated\\selenium-2.53.1\\chromedriver.exe");
        driver = new ChromeDriver();
	    //driver.manage().window().maximize();
	    driver.get("http://www.google.co.in");
	    driver.findElement(By.id("gb_70")).click();
	}

	/*@When("^I enter valid username and valid password$")
	public void i_enter_valid_username_and_valid_password() throws Throwable {
		Thread.sleep(5000);
		driver.findElement(By.id("identifierId")).sendKeys("ramyag898@gmail.com");
		// click on next
		Thread.sleep(5000);
		driver.findElement(By.id("identifierNext")).click();
		
		
		// type the password in textbox
		Thread.sleep(5000);
		driver.findElement(By.name("password")).sendKeys("ramya230$");
		
		
		// click on sign in button
		
	}*/
	
	@When("^I enter valid \"([^\"]*)\" and valid \"([^\"]*)\"$")
	public void i_enter_valid_username_and_valid_password(String username, String password) throws Throwable  {
		Thread.sleep(5000);
		driver.findElement(By.id("identifierId")).sendKeys(username);
		// click on next
		Thread.sleep(5000);
		driver.findElement(By.id("identifierNext")).click();
		
		
		// type the password in textbox
		Thread.sleep(5000);
		driver.findElement(By.name("password")).sendKeys(password);
		
		
		// click on sign in button
		
	}


	@Then("^user should be able to login successfully$")
	public void user_should_be_able_to_login_successfully() throws Throwable {
		Thread.sleep(5000);
		driver.findElement(By.id("passwordNext")).click();
	}
}
