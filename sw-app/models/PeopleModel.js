const axios = require("axios");
const URL = "https://swapi.dev/api/people/1";

async function getPeople() {
  return (await axios(URL)).data;
}
module.exports = { getPeople };