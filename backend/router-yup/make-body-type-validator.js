const { BodyType } = require("./constants");

const bodyTypes = {
  [BodyType.JSON]: {
    type: "json",
    errorMessage: "expected json",
  },
  [BodyType.MULTIPART]: {
    type: "multipart/*",
    errorMessage: "expected multipart",
  },
};

const defaultOptions = {
  errorStatusCode: 400,
};

const makeBodyTypeValidator = (type, options = defaultOptions) => {
  const bodyType = bodyTypes[type];

  if (bodyType === undefined) {
    throw new Error(`unsupported body type: ${type}`);
  }

  return (context, next) => {
    if (!context.request.is(bodyType.type)) {
      return context.throw(options.errorStatusCode, bodyType.errorMessage);
    }

    return next();
  };
};

exports.makeBodyTypeValidator = makeBodyTypeValidator;
