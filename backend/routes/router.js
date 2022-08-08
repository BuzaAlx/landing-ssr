const Router = require("@koa/router");

const { userRouter } = require("./user");
const { fileRouter } = require("./file");
const { technologyRouter } = require("./technology");

const router = new Router();

router.use(
  userRouter.middleware(),
  fileRouter.middleware(),
  technologyRouter.middleware()
);

exports.router = router;
