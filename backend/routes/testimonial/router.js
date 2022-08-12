const { YupRouter } = require("../../router-yup");
const { testimonialCreate } = require("./create");
const { testimonialGet } = require("./get");
const { testimonialDelete } = require("./delete");
const { testimonialUpdate } = require("./update");

const testimonialRouter = new YupRouter();

testimonialRouter.prefix("/testimonial");

testimonialRouter.addRoutes([
  testimonialCreate,
  testimonialGet,
  testimonialDelete,
  testimonialUpdate,
]);

exports.testimonialRouter = testimonialRouter;
