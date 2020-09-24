# Functional API automation with node-fetch

This repository was created to functional test automation of [the-one-api.dev](https://the-one-api.dev/).

Technologies used:

- [node-fetch](https://www.npmjs.com/package/node-fetch)
- [mocha](https://mochajs.org/)
- [allure](http://allure.qatools.ru/)
- [log4js](https://www.npmjs.com/package/log4js)

## Setup

To setup the test suite:

- Open terminal.
- Navigate to the path the project was cloned in.
- Run `npm install`

## Allure reports (default)

The default report generator is Allure Reports. This is the reporter that you will use when the test suite is executed.

## Running test suite

To run our test suite:

- Navigate to the path the project was cloned in.
- Run `npm test`
- Open ./log/execution.log for test execution results
- Run `npm run report`

## Test Coverage - specs files

- Contains 2 specs files (book.test.js and movie.test.js)
- Contains 4 describe functions for all the 4 scenarios given in the assignment
- Contains 13 test scenarios running with multiple set of test data

## Utils

- apihelper.js
  Contains functions to call rest-apis.
  Contains functions to read test data from json file
  Contains functions for reports

## API Wrappers

- book.js - contains wrappers to call the book api
- movie.js - contains wrappers to call movie api with various params

## Resources

- testdata.json - testdata to run the test suite
- config.json - config file to run the test suite
