const yup = require("yup");
const { Fact } = require("../../database");

const factDelete = {
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

    const fact = await Fact.findByIdAndDelete(params.id);

    if (!fact) {
      context.status = 404;

      context.body = {
        response: null,
      };

      return;
    }

    context.status = 204;
  },
};

exports.factDelete = factDelete;
