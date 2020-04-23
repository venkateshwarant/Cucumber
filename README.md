# Cucumber Tutorial
Getting started with Cucumber BDD framework

## General overview
This tutorial aims in writing behaviour driven test cases by integrating cucumber and selenium. Similar to the previous tutorials we will consider the [Web-based Hello World case study](https://github.com/acapozucca/helloworld) as our product to be tested. 
The test cases will be similar to that of [TestNG tutorial](https://github.com/acapozucca/TestNG), but here we will use the combination of JUnit-Cucumber-Selenium. JUnit for test cases, Cucumber for Behaviour driven development, and Selenium to write user acceptance test for our hello world web application.


## Assumptions/Pre-requisites

### Hardware
Laptop with at least 8 Gb memory (recommended 16 Gb, ideally 32 Gb)

### Software

1. The Web-based Hello World case study
* Instructions to install here: https://github.com/acapozucca/helloworld/blob/master/product.helloworld/README.md
* You need to complete (at least) until the step 3 (included) of the section 
"Check local testing environment setup", and
(at least) until step 3 (included) of the section
"Run the application"

2. **Maven** (v 3.6.2, or higher)
* Instructions to install here: https://maven.apache.org/download.cgi
* Check installation with the command `mvn --version`

3. **Git** (version 2.21.1)
* Instructions to install here: https://help.ubuntu.com/lts/serverguide/git.html
* Check installation with the command `git --version`

4. **IntelliJ IDEA IDE**
* In this tutorial we will use IntelliJ IDEA as our IDE, because it has a [IntelliJ IDEA Cucumber for Java plugin](https://plugins.jetbrains.com/plugin/7212-cucumber-for-java) to make our life easier.
* After installing the IDE, get the above plugin installed in it.

5. **Cucumber**
* Instructions to install here: https://cucumber.io/docs/installation/java/


## Terminologies used in cucumber BDD

**Feature**: A feature would describe the current test script which has to be executed.

**Scenario**: Scenario describes the steps and expected outcome for a particular test case.

**Scenario Outline**: Same scenario can be executed for multiple sets of data using scenario outline. The data is provided by a tabular structure separated by (I I).

**Given**: It specifies the context of the text to be executed. By using datatables "Given", step can also be parameterized.

**When**: "When" specifies the test action that has to performed

**Then**: The expected outcome of the test can be represented by "Then"

## Project details
Our project consist of three folders-

i) feature

ii) step

iii) testcases

### Feature files

* Each feature file corresponds to particular feature of our product to be tested, in this file we mention the scenario and steps for testing. This is easily readable by business analyst, thus encouraging collaboration across roles to build shared understanding of the problem to be solved.

* Here we have three feature files,
i) FirstServlet.feature
ii) LandingPage.feature
iii) StaticPage.feature

### Step files
* Each feature has its own step files, defined in this folder.

### Test Glue files
To run the cucumber test case with maven, we need to write a test case which glues the corresponding feature with the step definitions. Here we have 3 test cases.

* here we bind the FirstServlet.feature and FirstServletSteps using the following annotation.

```
@CucumberOptions(features = {"src/test/java/feature/FirstServlet.feature"},
        strict = false, plugin = {"pretty",
        "json:target/cucumber_json_reports/home-page.json",
        "html:target/first-servlet"},
        glue = {"steps"})
```
**NOTE**: 
The step file location should be given inside glue, and no method in the step file should be ambiguous.

## Test case details
* Please refer to the [TestNG tutorial](https://github.com/acapozucca/TestNG). The test cases here are same as that of that tutorial.


## Running the test cases using IDE
* you can right click inside the feature file to run it as Cucumber feature.
* you can also run the test cases from the Test glue file, to do so, just right click and run the test.


## Running test cases with maven
* Navigate to the location of the pom.xml

```
cd ~/<git_root_folder>/Cucumber_Tutorial/product.hellworld.testing.cucumber
```

* execute the following command

```
mvn test
```

```
Result:

-------------------------------------------------------
 T E S T S
-------------------------------------------------------
Running FirstServletTest
Apr 23, 2020 8:05:43 PM io.cucumber.junit.Cucumber <init>
WARNING: By default Cucumber is running in --non-strict mode.
This default will change to --strict and --non-strict will be removed.
You can use --strict or @CucumberOptions(strict = true) to suppress this warning

Scenario: Test the first servlet feature                        # src/test/java/feature/FirstServlet.feature:4
SLF4J: Failed to load class "org.slf4j.impl.StaticLoggerBinder".
SLF4J: Defaulting to no-operation (NOP) logger implementation
SLF4J: See http://www.slf4j.org/codes.html#StaticLoggerBinder for further details.
Starting ChromeDriver 80.0.3987.106 (f68069574609230cf9b635cd784cfb1bf81bb53a-refs/branch-heads/3987@{#882}) on port 41127
Only local connections are allowed.

.....

Tests run: 3, Failures: 0, Errors: 0, Skipped: 0

[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------

```

## Final remarks

These guidelines explain how to write behaviour driven development test cases using cucumber:

- To write user acceptance test by integrating Cucumber, JUnit, Selenium
- To run cucumber test cases using maven



