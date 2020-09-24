const fetch = require("node-fetch");
require("mocha-allure-reporter");

class apihelper {
  /**
   * Post Rest API
   * @param {url} url http url of API
   * @param {body} body http body of API
   * @param {headers} headers http headers of a API
   * @return {jsonResponse} JSON response of post API.
   */
  async post(url, body, headers) {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: headers,
    });
    console.log("Response -- ", response);
    const jsonResponse = await response.json();
    return [jsonResponse, response.status];
  }

  /**
   * Get Rest API
   * @param {url} url Url of API
   * @param {token} token Auth  Token to be passed in headers
   * @return {response_body} JSON response of get API.
   * @return {response_code} Response code of get API.
   *
   */

  async get(url, token) {
    if (token) {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const response_body = await response.json();
      this.log(`Response -->>> ${JSON.stringify(response_body)}`);
      return [response.status, response_body];
      // return { response_code: response.status, response_body: response_body };
    } else {
      const response = await fetch(url);
      const response_body = await response.json();
      this.log(`Response -->>> ${response_body}`);
      // return { response_code: response.status, response_body: response_body };
      return [response.status, response_body];
    }
  }

  /**
   * Put Rest API
   * @param {url} url Url of API
   * @param {body} body Body of API
   * @return {putResponse} JSON response of put API.
   */
  async put(url, body, headers) {
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: headers,
    });
    const putResponse = await response.json();
    console.log("Response ==>", putResponse);
    return [putResponse, response.status];
  }

  /**
   * DELETE Rest API
   * @param {url} url Url of API
   * @param {body} body Body of API
   * @return {deleteResponse} JSON response of delete API.
   */
  async delete(url, body, headers) {
    const response = await fetch(url, {
      method: "DELETE",
      body: JSON.stringify(body),
      headers: headers,
    });
    const deleteResponse = await response.json();
    console.log("Response ==>", deleteResponse);
    return [deleteResponse, response.status];
  }

  /**
   * Read JSON Object and return a formatted Array
   * @param {testdataJSON} testdataJSON json object
   * @return {paramsarray} formated array.
   */

  readtestdata(testdataJSON) {
    let paramsarray = [];
    const keys = Object.keys(testdataJSON);
    var length = testdataJSON[keys[0]].length;
    for (var i = 0; i < length; i++) {
      const params = {};
      keys.map((key) => {
        params[key] = testdataJSON[key][i];
      });
      paramsarray.push(params);
    }
    return paramsarray;
  }

  allurelog(statement) {
    return allure.createStep(statement, () => {});
  }

  log(statement) {
    if (statement) {
      var log4js = require("log4js");
      log4js.configure({
        appenders: {
          cheese: { type: "file", filename: "./log/execution.log" },
        },
        categories: { default: { appenders: ["cheese"], level: "All" } },
      });
      var logger = log4js.getLogger("cheese");
      logger.info(statement);
      console.log(statement);
      this.allurelog(JSON.stringify(statement))();
    } else {
      console.log("Statement is undefined");
    }
  }
}

module.exports = apihelper;
