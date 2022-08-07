const Router = require("@koa/router");

const { userRouter } = require("./user");
const { fileRouter } = require("./file");

const router = new Router();

router.use(userRouter.middleware(), fileRouter.middleware());

exports.router = router;
