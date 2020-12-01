var expect = require("chai").expect;
var apihelper = require("../utils/apihelper");
var jsontestdata = require("../../resources/testdata.json");
var config = require("../../resources/config.json");
var movie = require("../apiwrappers/movie");

apihelper = new apihelper();
movie = new movie();

describe("#2 - VALIDATE MOVIE API - POSITIVE CASES", function () {
  /**
   * validate get movies API with valid test data
   * Test Cases :
   * #1 - Validate response code
   */
  it("validate_movie_response_code", async function () {
    this.timeout(80000);

    apihelper.log(`Running test cases --- ${this.test.title}`);

    let response = await movie.getMovie();
    let response_code = response[0];
    expect(response_code).to.equal(200);
  });

  /**
   * validate get movies API with valid test data
   * Test Cases :
   * #1 - Validate response body is not null for following cases :
   * id, name, runtimeInMinutes, budgetInMillions, boxOfficeRevenueInMillions, academyAwardNominations,
   * academyAwardWins,rottenTomatesScore
   */

  it("validate_movie_response_body_is_not_null", async function () {
    this.timeout(80000);
    apihelper.log(`Running test cases --- ${this.test.title}`);
    let response = await movie.getMovie();
    let response_body = response[1];
    for (let k = 0; k < response_body.docs.length; k++) {
      expect(response_body.docs[k]._id).to.not.be.null;
      expect(response_body.docs[k].name).to.not.be.null;
      expect(response_body.docs[k].runtimeInMinutes).to.not.be.null;
      expect(response_body.docs[k].budgetInMillions).to.not.be.null;
      expect(response_body.docs[k].boxOfficeRevenueInMillions).to.not.be.null;
      expect(response_body.docs[k].academyAwardNominations).to.not.be.null;
      expect(response_body.docs[k].academyAwardWins).to.not.be.null;
      expect(response_body.docs[k].rottenTomatesScore).to.not.be.null;
    }
  });

  /**
   * validate get movies API with valid test data
   * Test Cases :
   * #1 - Validate default other params in response body
   * total, limit, offset, page, pages
   */

  it("validate_movie_default_other_params", async function () {
    this.timeout(80000);
    apihelper.log(`Running test cases --- ${this.test.title}`);
    var testname = this.test.title;
    await Promise.all(
      jsontestdata.map(async (data) => {
        var testcasedata = data[testname];
        let response = await movie.getMovie();
        let response_body = response[1];
        expect(response_body.total).to.equal(testcasedata.total);
        expect(response_body.limit).to.equal(testcasedata.limit);
        expect(response_body.offset).to.equal(testcasedata.offset);
        expect(response_body.page).to.equal(testcasedata.page);
        expect(response_body.pages).to.equal(testcasedata.pages);
      })
    );
  });

  /**
   * validate get movies API using all movie ids.
   * Test Cases :
   * #1 - Validate total key is 1 after calling all movies.
   */
  it("validate_movie_with_all_ids", async function () {
    this.timeout(80000);
    apihelper.log(`Running test cases --- ${this.test.title}`);
    let response = await movie.getMovie();
    let response_body = response[1];
    let response_code = response[0];

    expect(response_code).to.equal(200);
    let movie_response = response_body;
    for (let k = 0; k < movie_response.docs.length; k++) {
      let response = await movie.getMovie(movie_response.docs[k]._id);
      let response_body = response[1];
      expect(response_body.total).to.be.equal(1);
    }
  });

  /**
   * validate get movies API using sort asc param
   * Test Cases :
   * #1 - Validate movies are sorted in ascending order
   */
  it("validate_movie_sort_params_asc", async function () {
    this.timeout(80000);
    apihelper.log(`Running test cases --- ${this.test.title}`);

    let response = await movie.getMovie();
    let response_without_sort = response[1];
    let movies_before_sort = [];
    for (let k = 0; k < response_without_sort.docs.length; k++) {
      movies_before_sort.push(response_without_sort.docs[k].name);
    }

    let sort_asc_params = "sort=name:asc";
    let response_sort_params = await movie.getMovieWithParams(sort_asc_params);
    let response_from_sort_params = response_sort_params[1];

    let movies_from_sort_params = [];
    for (let k = 0; k < response_from_sort_params.docs.length; k++) {
      movies_from_sort_params.push(response_from_sort_params.docs[k].name);
    }

    expect(movies_before_sort.sort()).to.deep.equal(movies_from_sort_params);
  });

  /**
   * validate get movies API using sort desc param
   * Test Cases :
   * #1 - Validate movies are sorted in descending order
   */
  it("validate_movie_sort_params_desc", async function () {
    this.timeout(80000);
    apihelper.log(`Running test cases --- ${this.test.title}`);

    let response = await movie.getMovie();
    let response_without_sort = response[1];
    let movies_before_sort = [];
    for (let k = 0; k < response_without_sort.docs.length; k++) {
      movies_before_sort.push(response_without_sort.docs[k].name);
    }
    let sort_desc_params = "sort=name:desc";
    let response_sort_params = await movie.getMovieWithParams(sort_desc_params);
    let response_from_sort_params = response_sort_params[1];

    let movies_from_sort_params = [];
    for (let k = 0; k < response_from_sort_params.docs.length; k++) {
      movies_from_sort_params.push(response_from_sort_params.docs[k].name);
    }
    //Sort Desc
    movies_before_sort.sort().reverse();
    expect(movies_before_sort).to.deep.equal(movies_from_sort_params);
  });

  /**
   * validate get movies API using limit param
   * Test Cases :
   * #1 - Validate movies are displayed based on limit param
   */
  it("validate_movie_limit", async function () {
    this.timeout(80000);
    apihelper.log(`Running test cases --- ${this.test.title}`);

    let param = "limit=1";
    let response = await movie.getMovieWithParams(param);
    let response_limit_params = response[1];
    expect(response_limit_params.docs.length).to.be.equal(1);
  });

  /**
   * validate get movies API using offset param
   * Test Cases :
   * #1 - Validate movies are displayed based on limit param
   */
  it("validate_movie_offset", async function () {
    this.timeout(80000);
    apihelper.log(`Running test cases --- ${this.test.title}`);

    let param = "offset=7";
    let response = await movie.getMovieWithParams(param);
    let response_offset_params = response[1];

    expect(response_offset_params.docs.length).to.be.equal(1);
    expect(response_offset_params.offset).to.be.equal(7);
  });
});

describe("#3 - VALIDATE MOVIE API - NEGATIVE CASES", function () {
  it("validate_movie_invalid_path", async function () {
    this.timeout(80000);
    apihelper.log(`Running test cases --- ${this.test.title}`);

    var testname = this.test.title;
    /**
     * validate get movies API - runs test with multiple set of test data
     * Test Cases :
     * #1 - Validate invalid path - 500
     * #2 - Validate invalid uri - 404
     */

    await Promise.all(
      jsontestdata.map(async (data) => {
        var testnamefromjson = data[testname];
        var paramsarray = apihelper.readtestdata(testnamefromjson);
        for (i = 0; i < paramsarray.length; i++) {
          var uri = `${config.api_uri}${paramsarray[i].invalid_path}`;
          let response = await movie.getMovieWithURI(uri);
          expect(response.status).to.be.equal(paramsarray[i].response_code);
        }
      })
    );
  });

  /**
   * validate get movies API with invalid auth_token
   * Test Cases :
   * #1 - Validate error message
   * #2 - Validate error code is 401
   * #3 - Validate success is false
   */
  it("validate_movie_unauthorized", async function () {
    this.timeout(80000);
    apihelper.log(`Running test cases --- ${this.test.title}`);
    var testname = this.test.title;
    await Promise.all(
      jsontestdata.map(async (data) => {
        var testcasedata = data[testname];
        let response = await movie.getMovie(
          testcasedata.invalid_auth,
          testcasedata.invalid_auth
        );
        response_body = response[1];
        response_code = response[0];
        expect(response_code).to.equal(testcasedata.response_code);
        expect(response_body.success).to.equal(testcasedata.success);
        expect(response_body.message).to.equal(testcasedata.message);
      })
    );
  });

  /**
   * validate get movies API with invalid offset value
   * Test Cases :
   * #1 - Validate error message
   * #2 - Validate error code
   * #3 - Validate success is false
   */

  it("validate_movie_invalid_offset", async function () {
    this.timeout(80000);
    apihelper.log(`Running test cases --- ${this.test.title}`);
    var testname = this.test.title;
    await Promise.all(
      jsontestdata.map(async (data) => {
        var testcasedata = data[testname];
        let response = await movie.getMovieWithParams(testcasedata.params);
        response_body = response[1];
        response_code = response[0];
        expect(response_code).to.equal(testcasedata.response_code);
        expect(response_body.success).to.equal(testcasedata.success);
        expect(response_body.message).to.equal(testcasedata.message);
      })
    );
  });
});

describe("#4 - VALIDATE MOVIE API - QUOTES", function () {
  /**
   * validate get movies API - runs test with multiple set of test data
   * Test Cases :
   * #1 - Validate movie quotes using movie id
   * #2 - Validate quote length
   */
  it("validate_movie_quotes", async function () {
    this.timeout(80000);
    apihelper.log(`Running test cases --- ${this.test.title}`);
    var testname = this.test.title;

    this.timeout(80000);
    var testname = this.test.title;
    let response = await movie.getMovie();
    let movie_response = response[1];

    await Promise.all(
      jsontestdata.map(async (data) => {
        var testnamefromjson = data[testname];
        var paramsarray = apihelper.readtestdata(testnamefromjson);
        for (i = 0; i < paramsarray.length; i++) {
          for (let k = 0; k < movie_response.docs.length; k++) {
            if (movie_response.docs[k].name == paramsarray[i].movie_names) {
              let movie_quotes_response = await movie.getMovieQuotes(
                movie_response.docs[k]._id
              );
              let movie_quotes_response_body = movie_quotes_response[1];
              expect(movie_quotes_response_body.total).to.be.equal(
                paramsarray[i].quote_total
              );
            }
          }
        }
      })
    );
  });
});
