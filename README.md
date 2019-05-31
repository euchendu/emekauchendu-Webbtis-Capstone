# emekauchendu-Webbtis-Capstone
Web-Base Book Tracking Information System(WEBBTIS) - Capstone Project


The basic steps to follow when using TDD are:

1. Requirement is translated to a test
2. Run and fail the test
3. Write the code
4. Run and pass the test
5. Refactor the code / pass test again
6. Repeat

Below is steps how I init project structure and implement TDD for search functionality:

1. Create directory 'webbtis' for project. ('mkdir webbtis')
2. Go to above directory and 'npm init' to create a NodeJS application. There is package.json only.
3. Install packages by command 'npm <package-name> --save-dev'. E.g. 'npm install express --save-dev'
  3.1 express: framework for our app (REST API)
  3.2 body-parser: middleware to handle incoming requests as JSON.
  3.3 mocha: test framework.
  3.4 chai: assertion library for mocha.
  3.5 chai-http: to send requests to our API from our tests.
We can install all package from a command line: 'npm install express body-parser mocha chai chai-http --save-dev'

4. Create a directory 'test' to contain test.js
5. In test.js we will create first test case to verify app (REST API) is existed.
/**
 * test/test.js
 * Basic tests for Auth system API
 */
const chai = require('chai');
const expect = chai.expect;

// Start app (REST API)
const app = require('../api/app');

describe('App', () => {
  it('Should exists', () => {
    expect(app).to.be.a('function');})
})

6. Configure the test script in the package.json to launch mocha
/**
 * package.json
 * NodeJS app properties
 */
"scripts": {
  "test": "./node_modules/.bin/mocha",
}

7. Run mocha test by command 'npm test'
There is Error: Cannot find module '../app'

8. Create NodeJS app to pass first test case
8.1 Create directory 'api'
8.2 Add app.js into this directory
/**
 * api/app.js
 * Exports an express app (REST API).
 */
const express = require('express')
// Initializes express app
const app = express();
module.exports = app;

9. Run mocha test again by command 'npm test'
It should be passed first test case

10. Add test case for Valid Search by ISBN into test.js
// Import chai-http to send requests to the app
const http = require('chai-http');
chai.use(http);
describe('Search Book', () => {
  it('Valid Search by ISBN', (done) => {
    //send request to the app
    chai.request(app).get('/api/book')
	  .query({isbn:'1234-1234'}) // api/book?isbn='1234-1234'
      .then((res) => {
        //assertions
        console.log(res.body);
        expect(res).to.have.status(200);
        //expect(res.body).to.have.key('books');
		expect(res.body.books.length).to.be.equal(1);
		expect(res.body.errors.length).to.be.equal(0);
        done();
    }).catch(err => {
      console.log(err.message);
    })
  });
})

11. Run mocha test again by command 'npm test'
The first test case still passed but new test case is fail because we do not have handle end point /api/book

12. Add routes.js to directory api to handle for all end points

13. Add router to Express app (REST API)
/**
 * api/app.js
 * Exports an express app (REST API).
 */
...
// Import router with endpoints definitions
const router = require('./routes');

// Attach routes as a middleware
app.use(router);

14. Run mocha test again by 'npm test'
All test cases should passed

15. Continue add test cases for search functionality
