const Router = require("@koa/router");

const { userRouter } = require("./user");
const { fileRouter } = require("./file");
const { technologyRouter } = require("./technology");
const { projectRouter } = require("./project");
const { sloganRouter } = require("./slogan");
const { factRouter } = require("./fact");

const router = new Router();

router.use(
  userRouter.middleware(),
  fileRouter.middleware(),
  technologyRouter.middleware(),
  projectRouter.middleware(),
  sloganRouter.middleware(),
  factRouter.middleware()
);

exports.router = router;
