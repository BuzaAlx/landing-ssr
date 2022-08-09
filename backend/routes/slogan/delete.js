const yup = require("yup");
const { Slogan } = require("../../database");

const sloganDelete = {
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

    const slogan = await Slogan.findByIdAndDelete(params.id);

    if (!slogan) {
      context.status = 404;

      context.body = {
        response: null,
      };

      return;
    }

    context.status = 204;
  },
};

exports.sloganDelete = sloganDelete;
