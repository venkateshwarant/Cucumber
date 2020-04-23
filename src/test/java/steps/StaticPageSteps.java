package steps;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.concurrent.TimeUnit;

public class StaticPageSteps {
    private static WebDriver driver;
    private static String serverBaseURL= "http://192.168.33.14:8080";
    private static String webpageURI= "/helloworld";

    @Given("blank browser is opened")
    public void blankBrowserIsOpened() {
        System.setProperty("webdriver.chrome.driver" ,  "/Users/venkateshwaran/Downloads/chromedriver");
        driver=new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.manage().window().maximize();
    }

    @Then("test the content of the static page")
    public void testTheContentOfTheStaticPage() throws InterruptedException {
        driver.get(serverBaseURL+webpageURI);
        Thread.sleep(1000);
        String expectedString= "You have reached the same content here, but on a different web page. Congratulations!";
        String actualString= driver.findElement(By.id("content")).getText();
        Assert.assertEquals(expectedString, actualString);
        Thread.sleep(1000);
    }


    @Then("we close the static web page")
    public void weCloseTheBrowser() {
        driver.quit();
    }
}
