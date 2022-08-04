const yup = require("yup");
const User = require("../../database");

const userGet = {
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

    const query = User.find();

    if (params.id !== undefined) {
      query.where("_id", params.id);
    }

    const user = await query.exec();

    context.status = 200;

    context.body = {
      respose: user,
    };
  },
};

exports.userGet = userGet;
