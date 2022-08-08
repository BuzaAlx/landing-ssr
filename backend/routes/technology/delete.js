const yup = require("yup");
const { Technology } = require("../../database");

const technologyDelete = {
  path: "/:id",
  method: "DELETE",
  validate: {
    params: {
      schema: yup.object({
        id: yup.string().required(),
      }),
    },
  },
  handler: async (context) => {
    const { params } = context.request;

    const technology = await Technology.findByIdAndDelete(params.id);

    if (!technology) {
      context.status = 404;

      context.body = {
        response: null,
      };

      return;
    }

    context.status = 204;
  },
};

exports.technologyDelete = technologyDelete;
