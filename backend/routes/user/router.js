const { YupRouter } = require("../../yup-router");
const { userGet } = require("./get");

const userRouter = new YupRouter();

userRouter.prefix("/user");

userRouter.addRoutes([userGet]);

exports.userRouter = userRouter;
