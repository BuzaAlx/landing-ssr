const yup = require("yup");
const { assignExistProperties } = require("../../utils/helpers");
const { Fact } = require("../../database");
const { mapFactToResponse } = require("./utils/mappers");

const factCreate = {
  path: "/",
  method: "POST",
  validate: {
    body: {
      type: "json",
      schema: yup.object({
        title: yup.string().required(),
        text: yup.string().required(),
        iconFileId: yup.objectId().required(),
        showOnHomePage: yup.boolean().optional(),
      }),
    },
  },
  handler: async (context) => {
    const { body } = context.request;

    let fact = new Fact({
      iconFile: body.iconFileId,
    });

    assignExistProperties(fact, body, ["title", "text", "showOnHomePage"]);

    await fact.save();

    fact.populate({
      path: "iconFile",
    });

    fact = await fact.execPopulate();

    context.status = 201;

    const res = await mapFactToResponse(fact);

    context.body = {
      response: res,
    };
  },
};

exports.factCreate = factCreate;
