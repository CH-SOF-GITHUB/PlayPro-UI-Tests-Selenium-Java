/*
package ai;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;
import com.ai4s.AI4Selenium;

public class AI4SeleniumWithBrowserStackExample {
    public static void main(String[] args) {
        // Set up Selenium WebDriver (ensure you have the right path to your chromedriver)
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver");
        WebDriver driver = new ChromeDriver();

        // Initialize AI4Selenium with WebDriver
        AI4Selenium ai4selenium = new AI4Selenium(driver);

        // Navigate to BrowserStack website
        driver.get(https://www.browserstack.com/");

        // Use AI4Selenium to find the login button (dynamic locator)
        WebElement loginButton = ai4selenium.findElement(By.xpath("//a[contains(text(), 'Login')]"));
        loginButton.click();

        // Use AI4Selenium to find the email input field (dynamic locator)
        WebElement emailInput = ai4selenium.findElement(By.id("user_email"));
        emailInput.sendKeys("abc@gmail.com");

        // Use AI4Selenium to find the password input field (dynamic locator)
        WebElement passwordInput = ai4selenium.findElement(By.id("user_password"));
        passwordInput.sendKeys("your-password");

        // Find and click the submit button (dynamic locator)
        WebElement submitButton = ai4selenium.findElement(By.xpath("//button[@type='submit']"));
        submitButton.click();

        // Close the browser after test
        driver.quit();
    }
}*/
