const bodyParser = require("koa-bodyparser");

const makeJsonBodyParser = (options) => {
  return bodyParser({
    ...options,

    enableTypes: ["json"],
  });
};

exports.makeJsonBodyParser = makeJsonBodyParser;
