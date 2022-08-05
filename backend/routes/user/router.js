const { YupRouter } = require("../../router-yup");
const { login } = require("./login");
const { register } = require("./register");

const userRouter = new YupRouter();

userRouter.prefix("/user");

userRouter.addRoutes([login, register]);

exports.userRouter = userRouter;
