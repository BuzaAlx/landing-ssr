const yup = require("yup");
const { Slogan } = require("../../database");
const { assignExistProperties } = require("../../utils/helpers");
const { mapSloganToResponse } = require("./utils/mappers");

const sloganUpdate = {
  path: "/:id?",
  method: "PUT",
  validate: {
    body: {
      type: "json",
      schema: yup.object({
        title: yup.string().required(),
        text: yup.string().required(),
        selected: yup.boolean().optional(),
      }),
    },
    params: {
      schema: yup.object({
        id: yup.objectId().required(),
      }),
    },
  },
  handler: async (context) => {
    const { params, body } = context.request;

    const slogan = await Slogan.findById(params.id);

    if (!slogan) {
      context.status = 404;

      context.body = {
        response: null,
      };

      return;
    }

    assignExistProperties(slogan, body, ["title", "text", "selected"]);

    await slogan.save();

    context.status = 200;

    context.body = {
      response: mapSloganToResponse(slogan),
    };
  },
};

exports.sloganUpdate = sloganUpdate;
