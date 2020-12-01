var apihelper = require("../utils/apihelper");
apihelper = new apihelper();
const config = require("../../resources/config.json");
const fetch = require("node-fetch");
let api_uri = config.api_uri;
let token_from_config = config.api_key;

class movie {
  /**
   * Get Books API
   * @param token(Optional) Passing token from spec
   * @param id(Optional) Passing movie_id from spec
   * @return {response} JSON Array of response_body and response_code of movie API.
   */
  async getMovie(id, token) {
    if (token) {
      apihelper.log(`Calling the movie api ${api_uri}/movie`);
      let response = await apihelper.get(`${api_uri}/movie`, token);
      return response;
    } else if (id) {
      apihelper.log(
        `Calling the movie api ${api_uri}/movie/${id} with ${token_from_config} with ${id}`
      );
      let response = await apihelper.get(
        `${api_uri}/movie/${id}`,
        token_from_config
      );
      return response;
    } else {
      {
        apihelper.log(
          `Calling the movie api ${api_uri}/movie with ${token_from_config}`
        );
        let response = await apihelper.get(
          `${api_uri}/movie`,
          token_from_config
        );
        return response;
      }
    }
  }

  /**
   * Get Books API using params
   * @param token(Optional) Passing token from spec
   * @param params(Optional) Passing params from spec
   * @return {response} JSON Array of response_body and response_code of movie API.
   */
  async getMovieWithParams(params) {
    if (params) {
      apihelper.log(`Calling the movie api ${api_uri}/movie?${params}`);
      let response = await apihelper.get(
        `${api_uri}/movie?${params}`,
        token_from_config
      );
      return response;
    } else {
      apihelper.log(`please pass params`);
    }
  }

  /**
   * Get Books API using params
   * @param uri(Optional) Passing uri from spec
   * @return {response} JSON Array of response_body and response_code of movie API.
   *
   */
  async getMovieWithURI(uri) {
    if (uri) {
      apihelper.log(`Calling the movie api ${uri}`);
      const response = await fetch(uri, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${config.api_key}`,
        },
      });
      return response;
    } else {
      apihelper.log(`please pass params`);
    }
  }

  /**
   * Get Books API using params
   * @param id Passing params from specs
   * @return {response} JSON Array of response_body and response_code of movie API.
   */
  async getMovieQuotes(id) {
    if (id) {
      apihelper.log(`Calling the movie api ${api_uri}/movie/${id}/quote`);
      let response = await apihelper.get(
        `${api_uri}/movie/${id}/quote`,
        token_from_config
      );
      return response;
    } else {
      apihelper.log(`please pass params`);
    }
  }
}
module.exports = movie;
