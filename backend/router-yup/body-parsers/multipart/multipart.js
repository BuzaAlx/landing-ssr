const { IncomingForm } = require("formidable");

const { createDeferred } = require("../../../utils/helpers");

const { makeFile } = require("./make-file");

const makeMultipartBodyParser = (options) => {
  const form = new IncomingForm({
    keepExtensions: true,
    hash: "sha256",

    ...options,
  });

  return async (context, next) => {
    const deferred = createDeferred();

    form.parse(context.req, (error, fields, files) => {
      if (error) {
        deferred.reject(error);

        return;
      }

      deferred.resolve({ fields, files });
    });

    const { fields, files } = await deferred.promise;

    context.request.body = fields;
    context.request.files = Object.values(files).map(makeFile);

    return next();
  };
};

exports.makeMultipartBodyParser = makeMultipartBodyParser;
