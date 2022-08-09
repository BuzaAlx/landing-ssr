const yup = require("yup");
const { assignExistProperties } = require("../../utils/helpers");
const { Fact } = require("../../database");
const { mapFactToResponse } = require("./utils/mappers");

const factUpdate = {
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
        title: yup.string().min(1).optional(),
        text: yup.string().min(1).optional(),
        iconFileId: yup.objectId().optional(),
        showOnHomePage: yup.boolean().optional(),
      }),
    },
  },
  handler: async (context) => {
    const { params, body } = context.request;

    let fact = await Fact.findById(params.id);

    if (!fact) {
      context.status = 404;

      context.body = {
        response: null,
      };

      return;
    }

    if (body.iconFileId !== undefined) {
      fact.iconFile = body.iconFileId;
    }

    assignExistProperties(fact, body, ["title", "text", "showOnHomePage"]);

    await fact.save();

    fact.populate({
      path: "iconFile",
    });

    fact = await fact.execPopulate();

    const res = await mapFactToResponse(fact);

    context.status = 200;

    context.body = {
      response: res,
    };
  },
};

exports.factUpdate = factUpdate;
