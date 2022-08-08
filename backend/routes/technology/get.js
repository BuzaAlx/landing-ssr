const yup = require("yup");
const { Technology } = require("../../database");
const { mapTechnologyToResponse } = require("./utils/mappers");

const technologyGet = {
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

    const query = Technology.find();

    if (params.id !== undefined) {
      query.where("_id", params.id);
    }

    query.populate({
      path: "iconFile",
    });

    const technologies = await query.exec();

    let res = await Promise.all(technologies.map(mapTechnologyToResponse));

    context.status = 200;

    context.body = {
      response: res,
    };
  },
};

exports.technologyGet = technologyGet;
