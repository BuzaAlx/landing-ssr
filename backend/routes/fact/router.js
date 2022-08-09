const { YupRouter } = require("../../router-yup");
const { factCreate } = require("./create");
const { factGet } = require("./get");
const { factDelete } = require("./delete");
const { factUpdate } = require("./update");

const factRouter = new YupRouter();

factRouter.prefix("/fact");

factRouter.addRoutes([factCreate, factGet, factDelete, factUpdate]);

exports.factRouter = factRouter;
