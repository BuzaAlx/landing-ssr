const yup = require("yup");

const { Testimonial } = require("../../database");

const { mapTestimonialToResponse } = require("./utils/mappers");

const testimonialCreate = {
  path: "/",
  method: "POST",
  validate: {
    body: {
      type: "json",
      schema: yup.object({
        customerName: yup.string().required(),
        countryCode: yup.string().required(),
        companyName: yup.string().required(),
        customerPosition: yup.string().required(),
        feedback: yup.string().required(),
        sites: yup
          .array()
          .of(
            yup.object({
              name: yup.string().required(),
              rate: yup.number().min(0).max(5).required(),
              link: yup.string().url().required(),
            })
          )
          .min(1)
          .required(),
      }),
    },
  },
  handler: async (context) => {
    const testimonial = await Testimonial.create(context.request.body);

    context.status = 201;

    context.body = {
      response: mapTestimonialToResponse(testimonial),
    };
  },
};

exports.testimonialCreate = testimonialCreate;
