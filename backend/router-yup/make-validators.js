const { ValidationError } = require("yup");

const propertiesForValidate = ["headers", "params", "query", "body"];

const defaultOptions = {
  errorStatusCode: 400,
};

const makeValidators = (rawRoute, options = defaultOptions) => {
  const middlewares = [];

  for (const property of propertiesForValidate) {
    const propertyOptions = rawRoute.validate[property];

    if (propertyOptions === undefined) {
      continue;
    }

    const { schema } = propertyOptions;

    if (schema === undefined) {
      continue;
    }

    const validator = async (context, next) => {
      const input = context.request[property] || {};

      let output;

      try {
        output = await schema.validate(input, {
          abortEarly: false,
          stripUnknown: true,
        });
      } catch (error) {
        if (!(error instanceof ValidationError)) {
          throw error;
        }

        context.status = options.errorStatusCode;

        context.body = error.errors;

        return;
      }

      context.request[property] = output;

      await next();
    };

    middlewares.push(validator);
  }

  return middlewares;
};

exports.makeValidators = makeValidators;
