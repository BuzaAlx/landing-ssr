const json = require("./json");
const multipart = require("./multipart");

module.exports = {
  ...json,
  ...multipart,
};
