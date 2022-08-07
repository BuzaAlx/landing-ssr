const { config } = require("../../config");
const { File } = require("../../database");
const { uploadFile } = require("../../s3");
const { mapFileToResponse } = require("./utils/mappers");

const fileUpload = {
  path: "/upload",
  method: "POST",
  validate: {
    body: {
      type: "multipart",
      // options: {
      //   uploadDir: config.files.storagePath,
      // },
    },
  },
  handler: async (context) => {
    context.request.files.forEach(async (file) => {
      const result = await uploadFile(file);
    });

    const files = await File.insertMany(context.request.files);

    context.status = 201;

    context.body = {
      response: files.map(mapFileToResponse),
    };
  },
};

exports.fileUpload = fileUpload;
