const yup = require("yup");
const { assignExistProperties } = require("../../utils/helpers");
const { User } = require("../../database");
const { generateToken } = require("./utils/generateToken");
const { mapUserToResponse } = require("./utils/mappers");
const bcrypt = require("bcryptjs");

const register = {
  path: "/register",
  method: "POST",
  validate: {
    body: {
      type: "json",
      schema: yup.object({
        username: yup.string().required(),
        password: yup.string().required(),
        confirmPassword: yup.string().required(),
        email: yup.string().required(),
      }),
    },
  },
  handler: async (context) => {
    const { body } = context.request;

    // console.log(body);
    if (body.password !== body.confirmPassword) {
      throw new Error("passwords do not match");
    }
    //validate here or use yup valid

    let password = await bcrypt.hash(body.password, 12);

    let user = new User({
      username: body.username,
      createdAt: new Date().toISOString(),
      password,
    });

    assignExistProperties(user, body, ["email"]);

    let res = await user.save();

    // mapResponse;
    res = mapUserToResponse(res);

    res.token = generateToken(res);

    context.status = 201;

    context.body = {
      response: {
        ...res,
      },
    };
  },
};

exports.register = register;
