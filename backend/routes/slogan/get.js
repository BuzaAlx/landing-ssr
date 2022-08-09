const yup = require("yup");
const { Slogan } = require("../../database");
const { mapSloganToResponse } = require("./utils/mappers");

const sloganGet = {
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

    const query = Slogan.find();

    if (params.id !== undefined) {
      query.where("_id", params.id);
    }

    const slogans = await query.exec();

    context.status = 200;

    context.body = {
      response: slogans.map(mapSloganToResponse),
    };
  },
};

exports.sloganGet = sloganGet;
