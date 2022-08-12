const { YupRouter } = require("../../router-yup");

const { getSlogan } = require("./get-slogan");
const { getFacts } = require("./get-facts");
const { getProjects } = require("./get-projects");
const { getTechnologies } = require("./get-technologies");
const { getTestimonials } = require("./get-testimonials");

const homeRouter = new YupRouter();

homeRouter.prefix("/home");

homeRouter.addRoutes([
  getSlogan,
  getFacts,
  getProjects,
  getTechnologies,
  getTestimonials,
]);

exports.homeRouter = homeRouter;
