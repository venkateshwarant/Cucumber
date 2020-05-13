$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/feature/LandingPage.feature");
formatter.feature({
  "name": "TestLandingPage",
  "description": "  In this feature, we test whether the landing page of our product works fine.",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Test the landing page feature",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "browser is opened",
  "keyword": "Given "
});
formatter.match({
  "location": "testcases.TestLandingPage.browserIsOpened()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "test the content of the landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "testcases.TestLandingPage.testTheContentOfTheLandingPage()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#content\"}\n  (Session info: chrome\u003d81.0.4044.113)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0-alpha-4\u0027, revision: \u0027c2d955b49e\u0027\nSystem info: host: \u0027Venkateshwarans-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:1413:2f28:72:7d9a%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.4\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.113, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: /var/folders/07/lh13dwy166x...}, goog:chromeOptions: {debuggerAddress: localhost:49716}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 6149513c0a120e2084e990c0c39b7e9d\n*** Element info: {Using\u003did, value\u003dcontent}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:196)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:129)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:161)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:582)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:333)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:381)\n\tat org.openqa.selenium.By$ById.findElement(By.java:194)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:325)\n\tat testcases.TestLandingPage.testTheContentOfTheLandingPage(TestLandingPage.java:31)\n\tat ✽.test the content of the landing page(file:///Users/venkateshwaran/IdeaProjects/product.hellworld.testing.cucumber/src/test/java/feature/LandingPage.feature:6)\n",
  "status": "failed"
});
formatter.step({
  "name": "we close the landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "testcases.TestLandingPage.weCloseTheBrowser()"
});
formatter.result({
  "status": "skipped"
});
});