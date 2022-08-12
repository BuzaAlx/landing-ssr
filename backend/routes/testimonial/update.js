const yup = require("yup");
const { assignExistProperties } = require("../../utils/helpers");
const { Testimonial } = require("../../database");
const { mapTestimonialToResponse } = require("./utils/mappers");

const testimonialUpdate = {
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
        customerName: yup.string().min(1).optional(),
        countryCode: yup.string().min(1).optional(),
        companyName: yup.string().min(1).optional(),
        customerPosition: yup.string().min(1).optional(),
        feedback: yup.string().min(1).optional(),
        sites: yup
          .array()
          .of(
            yup.object({
              name: yup.string().min(1).optional(),
              rate: yup.number().min(0).max(5).optional(),
              link: yup.string().url().optional(),
            })
          )
          .min(1)
          .optional(),
      }),
    },
  },
  handler: async (context) => {
    const { params, body } = context.request;

    const testimonial = await Testimonial.findById(params.id);

    if (!testimonial) {
      context.status = 404;

      context.body = {
        response: null,
      };

      return;
    }

    assignExistProperties(testimonial, body, [
      "customerName",
      "countryCode",
      "companyName",
      "customerPosition",
      "feedback",
      "sites",
    ]);

    await testimonial.save();

    let res = await mapTestimonialToResponse(testimonial);

    context.status = 200;

    context.body = {
      response: res,
    };
  },
};

exports.testimonialUpdate = testimonialUpdate;
