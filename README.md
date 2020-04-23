# Cucumber_Tutorial
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
In this tutorial we will use IntelliJ IDEA as our IDE, because it has a [IntelliJ IDEA Cucumber for Java plugin](https://plugins.jetbrains.com/plugin/7212-cucumber-for-java) to make our life easier.

5. **Cucumber**
* Instructions to install here: https://cucumber.io/docs/installation/java/


## Terminologies used in cucumber BDD

**Feature**: A feature would describe the current test script which has to be executed.

**Scenario**: Scenario describes the steps and expected outcome for a particular test case.

**Scenario Outline**: Same scenario can be executed for multiple sets of data using scenario outline. The data is provided by a tabular structure separated by (I I).

**Given**: It specifies the context of the text to be executed. By using datatables "Given", step can also be parameterized.

**When**: "When" specifies the test action that has to performed

**Then**: The expected outcome of the test can be represented by "Then"


