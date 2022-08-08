const yup = require("yup");
const { TechnologyType } = require("../../utils/constants");
const { assignExistProperties } = require("../../utils/helpers");
const { Technology } = require("../../database");
const { mapTechnologyToResponse } = require("./utils/mappers");

const technologyCreate = {
  path: "/",
  method: "POST",
  validate: {
    body: {
      type: "json",
      schema: yup.object({
        name: yup.string().required(),
        category: yup.string().oneOf(Object.values(TechnologyType)).required(),
        iconFileId: yup.objectId().required(),
      }),
    },
  },
  handler: async (context) => {
    const { body } = context.request;

    let technology = new Technology({
      iconFile: body.iconFileId,
    });

    technology.populate({
      path: "iconFile",
    });

    assignExistProperties(technology, body, ["name", "category"]);

    await technology.save();

    context.status = 201;

    let res = await mapTechnologyToResponse(technology);

    context.body = {
      response: res,
    };
  },
};

exports.technologyCreate = technologyCreate;
