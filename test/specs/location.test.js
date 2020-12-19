var expect = require("chai").expect;
var chai = require("chai");
var apihelper = require("../utils/apihelper");
var jsontestdata = require("../../resources/testdata.json");
const config = require("../../resources/config.json");
const testrequest = require("../../resources/request.json");

var location = require("../apiwrappers/location");

// var env = require("minimist")(process.argv.slice(2)).env;

apihelper = new apihelper();
location = new location();

describe("#1 - VALIDATE LOCATION API", function () {
  /**
   * validate location API
   * Test Cases :
   * #1 - Response Code
   * #2 - Message
   * #3 - ErrorCode
   * #4 - Validate geo location
   * #5 - Validate locationIds
   * #6 - Validate Lat and Long
   * #7 - Validate geo location is empty for invalid location ID
   */

  it("validate_location", async function () {
    this.timeout(80000);
    var testname = this.test.title;
    apihelper.log(`Running test cases --- ${this.test.title}`);
    await Promise.all(
      jsontestdata.map(async (data) => {
        var testcasedata = data[testname];
        let response = await location.postlocation(
          testcasedata.overwrite_value
        );
        let response_code = response[0];
        let response_body = response[1];
        apihelper.log(response);
        console.log(response_code, testcasedata.response_code);

        expect(response_code).to.equal(testcasedata.response_code);
        expect(response_body.status).to.be.equal(testcasedata.status);
      })
    );
  });

  it("validate_invalid_location", async function () {
    this.timeout(80000);
    var testname = this.test.title;
    apihelper.log(`Running test cases --- ${this.test.title}`);
    await Promise.all(
      jsontestdata.map(async (data) => {
        var testcasedata = data[testname];
        let response = await location.postlocation(
          testcasedata.overwrite_value
        );
        let response_code = response[0];
        let response_body = response[1];
        apihelper.log(response);
        console.log(response_code, testcasedata.response_code);
        expect(response_code).to.equal(testcasedata.response_code);
        expect(response_body.message).to.be.equal(testcasedata.message);
        expect(response_body.errorCode).to.be.equal(testcasedata.errorCode);
      })
    );
  });
  it("validate_geo_location_lat_long", async function () {
    this.timeout(80000);
    var testname = this.test.title;
    apihelper.log(`Running test cases --- ${this.test.title}`);
    await Promise.all(
      jsontestdata.map(async (data) => {
        var testcasedata = data[testname];
        let locationId = testrequest[1].id;
        let response = await location.verifygeolocation(locationId);
        let response_code = response[0];
        let response_body = response[1];
        apihelper.log(response);
        expect(response_code).to.equal(200);
        console.log(testrequest[1]);
        expect(response_body.responses[0].locationId).to.be.equal(
          testrequest[1].id
        );

        let expectedlat = parseFloat(
          response_body.responses[0].geocodedLatLng.lat
        ).toFixed(2);
        let actuallat = parseFloat(testrequest[1].latLng.lat).toFixed(2);
        console.log(expectedlat, actuallat);

        expect(expectedlat).to.be.equal(actuallat);
        let expectedlng = parseFloat(
          response_body.responses[0].geocodedLatLng.lng
        ).toFixed(0);
        let actuallng = parseFloat(testrequest[1].latLng.lng).toFixed(0);
        expect(expectedlng).to.be.equal(actuallng);
      })
    );
  });

  it("validate_invalid_geo_location", async function () {
    this.timeout(80000);
    var testname = this.test.title;
    apihelper.log(`Running test cases --- ${this.test.title}`);
    await Promise.all(
      jsontestdata.map(async (data) => {
        var testcasedata = data[testname];
        let locationId = testrequest[0].id;
        let response = await location.verifygeolocation(locationId);
        let response_code = response[0];
        let response_body = response[1];
        apihelper.log(response);
        expect(response_code).to.equal(200);
        expect(response_body.responses).to.be.empty;
      })
    );
  });
});
