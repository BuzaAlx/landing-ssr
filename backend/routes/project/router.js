const { YupRouter } = require("../../router-yup");
// const { login } = require("./login");
// const { register } = require("./register");

const projectRouter = new YupRouter();

projectRouter.prefix("/project");

projectRouter.addRoutes([]);

exports.projectRouter = projectRouter;
