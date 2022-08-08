const user = require("./user");
const file = require("./file");
const technology = require("./technology");

module.exports = {
  ...user,
  ...file,
  ...technology,
};
