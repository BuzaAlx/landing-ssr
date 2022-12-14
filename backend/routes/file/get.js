const { File } = require("../../database");
const { getFileUrl } = require("../../s3");
const { mapFileToResponse } = require("./utils/mappers");
const yup = require("yup");

const getFile = {
  path: "/:id?",
  method: "GET",
  validate: {
    params: {
      schema: yup.object({
        id: yup.objectId().optional(),
      }),
    },
  },
  handler: async (context) => {
    const { params } = context.request;

    // console.log(params);

    const query = File.find();

    if (params.id !== undefined) {
      query.where("_id", params.id);
    }

    const files = await query.exec();

    let res = await Promise.all(files.map(mapFileToResponse));

    context.status = 200;

    context.body = {
      response: res,
    };
  },
};

exports.getFile = getFile;
