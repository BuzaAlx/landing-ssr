const { YupRouter } = require("../../router-yup");
const { technologyCreate } = require("./create");
const { technologyGet } = require("./get");
const { technologyDelete } = require("./delete");
const { technologyUpdate } = require("./update");

const technologyRouter = new YupRouter();

technologyRouter.prefix("/technology");

technologyRouter.addRoutes([
  technologyCreate,
  technologyGet,
  technologyDelete,
  technologyUpdate,
]);

exports.technologyRouter = technologyRouter;
