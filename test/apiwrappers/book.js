var apihelper = require("../utils/apihelper");
apihelper = new apihelper();
const config = require("../../resources/config.json.js");
let api_uri = config.api_uri;

class book {
  /**
   * Get Books API
   * @return {jsonResponse} JSON Response of book API.
   */
  async getBook() {
    apihelper.log(`Calling the book api ${api_uri}/book`);
    let response = await apihelper.get(`${api_uri}/book`);
    return response;
  }
}
module.exports = book;
