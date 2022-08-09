const { YupRouter } = require("../../router-yup");
const { projectCreate } = require("./create");
const { projectGet } = require("./get");
const { projectDelete } = require("./delete");
const { projectUpdate } = require("./update");

const projectRouter = new YupRouter();

projectRouter.prefix("/project");

projectRouter.addRoutes([
  projectCreate,
  projectGet,
  projectDelete,
  projectUpdate,
]);

exports.projectRouter = projectRouter;
