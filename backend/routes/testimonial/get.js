const yup = require("yup");
const { Testimonial } = require("../../database");
const { mapTestimonialToResponse } = require("./utils/mappers");

const testimonialGet = {
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

    const query = Testimonial.find();

    if (params.id !== undefined) {
      query.where("_id", params.id);
    }

    const testimonials = await query.exec();

    let res = await testimonials.map(mapTestimonialToResponse);

    context.status = 200;

    context.body = {
      response: res,
    };
  },
};

exports.testimonialGet = testimonialGet;
