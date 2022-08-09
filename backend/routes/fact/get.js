const yup = require("yup");
const { Fact } = require("../../database");
const { mapFactToResponse } = require("./utils/mappers");

const factGet = {
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

    const query = Fact.find();

    if (params.id !== undefined) {
      query.where("_id", params.id);
    }

    query.populate({
      path: "iconFile",
    });

    const facts = await query.exec();

    context.status = 200;

    let res = await Promise.all(facts.map(mapFactToResponse));

    context.body = {
      response: res,
    };
  },
};

exports.factGet = factGet;
