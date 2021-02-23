# Cypress-e2e-testing-framework
#### _Cypress e2e testing framework based on page object model with reporting and visual testing_
[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Cypress is a next generation end to end testing tool built for the modern web. 

Cypress is most often compared to Selenium; however Cypress is both fundamentally and architecturally different. Cypress is not constrained by the same restrictions as Selenium.

This enables you to write faster, easier and more reliable tests.
#### Major advantages
- One doesn’t need to add explicit or implicit wait commands in test scripts, unlike Selenium. Cypress waits automatically for commands and assertions.
- As the programmer writes commands, Cypress executes them in real-time, providing visual feedback as they run.
- The automatic scrolling operation ensures that an element is in view before performing any action
- Developers or QAs can use Spies, Stubs, and Clocks to verify and control the behavior of server responses, functions, or timers.
- Screeshots with videos
- No flaky, inconsistent tests anymore.....✨Magic ✨

### Current Trend
![npm trend](https://raw.githubusercontent.com/soammohanty/cypress-e2e-framework/main/assets/trends.png)

##### Realtime execution with visual feedback

![Preview 0](https://raw.githubusercontent.com/soammohanty/cypress-e2e-framework/main/assets/preview0.webp)

##### Support all relevent browsers

![Preview 1](https://raw.githubusercontent.com/soammohanty/cypress-e2e-framework/main/assets/preview1.webp)

![Preview video](https://github.com/soammohanty/cypress-e2e-framework/blob/main/assets/run-tests.gif?raw=true)


## Reporting
Using mochawesome npm module for reporting

## Visual Regression Testing
![Image compare](https://docs.cypress.io/img/guides/visual-testing/diff.df5baaae.png)
**To Set the base folder for visual comparison:**
```sh
npm run e2e-tests-base
```

##### Scripts
```sh
npm install
```
To run entire suite on chrome browser
```sh
npm run e2e-tests
```
To run on otherbrowser create/change the script in package.json 
--<browser-name>

## License
MIT
**Free Software, Hell Yeah!**
