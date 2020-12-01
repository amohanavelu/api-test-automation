var expect = require("chai").expect;
var chai = require("chai");
var apihelper = require("../utils/apihelper");
var jsontestdata = require("../../resources/testdata.json");
const config = require("../../resources/config.json");
var book = require("../apiwrappers/book");

// var env = require("minimist")(process.argv.slice(2)).env;

apihelper = new apihelper();
book = new book();

describe("#1 - VALIDATE BOOK API", function () {
  /**
   * validate get books API
   * Test Cases :
   * #1 - Response Code
   * #2 - Docs Length - Returns 3 books
   * #3 - Default Total
   * #4 - Default Offset
   * #5 - Default Limit
   * #6 - Default Page and Pages
   * #7 - Book Names
   */

  it("validate_books", async function () {
    this.timeout(80000);
    var testname = this.test.title;
    apihelper.log(`Running test cases --- ${this.test.title}`);
    await Promise.all(
      jsontestdata.map(async (data) => {
        var testcasedata = data[testname];
        let response = await book.getBook();
        let response_code = response[0];
        let response_body = response[1];
        expect(response_code).to.equal(testcasedata.response_code);
        expect(response_body.docs.length).to.be.equal(testcasedata.total);
        expect(response_body.total).to.be.equal(testcasedata.total);
        expect(response_body.limit).to.be.equal(testcasedata.limit);
        expect(response_body.offset).to.be.equal(testcasedata.offset_default);
        expect(response_body.page).to.be.equal(testcasedata.page);
        expect(response_body.pages).to.be.equal(testcasedata.pages);
        let books = [];
        for (let k = 0; k < response_body.docs.length; k++) {
          books.push(response_body.docs[k].name);
        }
        expect(books).to.deep.equal(testcasedata.books);
      })
    );
  });
});
