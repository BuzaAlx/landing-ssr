const yup = require("yup");
const { Testimonial } = require("../../database");

const testimonialDelete = {
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

    const testimomoal = await Testimonial.findByIdAndDelete(params.id);

    if (!testimomoal) {
      context.status = 404;

      context.body = {
        response: null,
      };

      return;
    }

    context.status = 204;
  },
};

exports.testimonialDelete = testimonialDelete;
