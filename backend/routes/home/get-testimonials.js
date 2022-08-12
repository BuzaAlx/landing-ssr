const { Testimonial } = require("../../database");
const { mapTestimonialToResponse } = require("../testimonial/utils/mappers");

const getTestimonials = {
  path: "/get-testimonials",
  method: "GET",
  handler: async (context) => {
    const testimonials = await Testimonial.find();

    let res = await testimonials.map(mapTestimonialToResponse);

    context.status = 200;

    context.body = {
      response: res,
    };
  },
};

exports.getTestimonials = getTestimonials;
