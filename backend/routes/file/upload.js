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
      try {
        const result = await uploadFile(file);
      } catch (error) {
        console.log(error);
      }
    });

    const files = await File.insertMany(context.request.files);

    context.status = 201;

    let res = await Promise.all(files.map(mapFileToResponse));

    context.body = {
      response: res,
    };
  },
};

exports.fileUpload = fileUpload;
