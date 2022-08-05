const {
  makeJsonBodyParser,
  makeMultipartBodyParser,
} = require("./body-parsers");

const { BodyType } = require("./constants");

const factories = {
  [BodyType.JSON]: makeJsonBodyParser,
  [BodyType.MULTIPART]: makeMultipartBodyParser,
};

const makeBodyParser = (type, options = {}) => {
  const factory = factories[type];

  if (factory === undefined) {
    throw new Error(`unsupported body type: ${type}`);
  }

  return factory(options);
};

exports.makeBodyParser = makeBodyParser;
