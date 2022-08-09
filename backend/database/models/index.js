const user = require("./user");
const file = require("./file");
const technology = require("./technology");
const project = require("./project");
const slogan = require("./slogan");
const fact = require("./fact");

module.exports = {
  ...user,
  ...file,
  ...technology,
  ...project,
  ...slogan,
  ...fact,
};
