package steps;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.concurrent.TimeUnit;

public class FirstServletSteps {

    private static WebDriver driver;
    private static String serverBaseURL= "http://192.168.33.14:8080";
    private static String webpageURI= "/helloworld/FirstServlet";

    @Given("empty browser is opened")
    public void emptyBrowserIsOpened() {
        System.setProperty("webdriver.chrome.driver" ,  "/Users/venkateshwaran/Downloads/chromedriver");
        driver=new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.manage().window().maximize();
    }

    @And("navigate to the FirstServlet URL")
    public void navigateToTheFirstServletURL() throws InterruptedException {
        driver.get(serverBaseURL+webpageURI);
        Thread.sleep(1000);
    }

    @Then("test whether Hi there content is there in the web page")
    public void testWhetherHiThereContentIsThereInTheWebPage() {
        String expectedString= "Hi There!";
        String actualString= driver.findElement(By.id("hi")).getText();
        Assert.assertEquals(expectedString, actualString);
    }

    @Then("test whether the expected date and time is present in it")
    public void testWhetherTheExpectedDateAndTimeIsPresentInIt() throws InterruptedException {
        driver.get(serverBaseURL+webpageURI);
        Thread.sleep(1000);
        String actualDate= driver.findElement(By.id("date")).getText();
        Thread.sleep(1000);
        String expectedDate= "Date=Fri Apr 10 10:30:46 UTC 2020";
        Assert.assertEquals(expectedDate, actualDate);
    }

    @And("close the first servlet web page")
    public void closeTheBrowser() {
        driver.quit();
    }
}
