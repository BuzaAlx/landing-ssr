const yup = require("yup");
const { TechnologyType } = require("../../utils/constants");
const { assignExistProperties } = require("../../utils/helpers");
const { Technology } = require("../../database");
const { mapTechnologyToResponse } = require("./utils/mappers");

const technologyUpdate = {
  path: "/:id",
  method: "PUT",
  validate: {
    params: {
      schema: yup.object({
        id: yup.objectId().required(),
      }),
    },
    body: {
      type: "json",
      schema: yup.object({
        name: yup.string().min(1).optional(),
        category: yup.string().oneOf(Object.values(TechnologyType)).optional(),
        iconFileId: yup.objectId().optional(),
      }),
    },
  },
  handler: async (context) => {
    const { params, body } = context.request;

    let technology = await Technology.findById(params.id);

    if (!technology) {
      context.status = 404;

      context.body = {
        response: null,
      };

      return;
    }

    if (body.iconFileId !== undefined) {
      technology.iconFile = body.iconFileId;
    }

    assignExistProperties(technology, body, ["name", "category"]);

    await technology.save();

    technology.populate({
      path: "iconFile",
    });

    technology = await technology.execPopulate();

    let res = await mapTechnologyToResponse(technology);

    context.status = 200;

    context.body = {
      response: res,
    };
  },
};

exports.technologyUpdate = technologyUpdate;
