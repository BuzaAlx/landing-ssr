const Router = require("@koa/router");

const { userRouter } = require("./user");

const router = new Router();

router.use(userRouter.middleware());

exports.router = router;
