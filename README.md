Amphora UI Automation Test Project
========================================================================


*Prerequisites
------------------------------------------------------
Node.js (version 16.x or later)
npm (version 8.x or later)

*Setup Instructions
----------------------------------------------------
1.Clone the repository
2.Navigate to the project directory
3.Install dependencies
    npm install



*Running Tests
--------------------------------------------------
1. Open Cypress Interactive Mode
npm run cypress:open


*Generate HTML Report
-------------------------------------------------

Primary Reporting Tools:

Mochawesome Reporter (cypress-mochawesome-reporter)
Multiple Cucumber HTML Reporter (multiple-cucumber-html-reporter)
Command:  npm run test:html



*Reports are generated in the following directory
-------------------------------------------------
Copycypress/reports/
├── html/           # Detailed HTML report
│   └── index.html  # Main report file
└── json/           # JSON report files


*After running npm run test:html
---------------------------------------------------
Navigate to cypress/reports/html/index.html
Open the index.html in any web browser

*Report Features
--------------------------------------------------------
Detailed test execution summary
Step-by-step test scenario details
Screenshots of failed tests
Browser and platform metadata


*Clean previous reports: npm run clean:reports


Screenshots and videos
---------------------------------------------------------
Configured to capture a screenshot if test run is failed
