const { YupRouter } = require("../../router-yup");
const { sloganCreate } = require("./create");
const { sloganGet } = require("./get");
const { sloganDelete } = require("./delete");
const { sloganUpdate } = require("./update");

const sloganRouter = new YupRouter();

sloganRouter.prefix("/slogan");

sloganRouter.addRoutes([sloganCreate, sloganGet, sloganDelete, sloganUpdate]);

exports.sloganRouter = sloganRouter;
