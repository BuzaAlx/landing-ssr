const yup = require("yup");
const bcrypt = require("bcryptjs");
const { generateToken } = require("./utils/generateToken");
const { User } = require("../../database");

const login = {
  path: "/login",
  method: "POST",
  validate: {
    body: {
      type: "json",
      schema: yup.object({
        username: yup.string().required(),
        password: yup.string().required(),
      }),
    },
  },
  handler: async (context) => {
    const {
      body: { username, password },
    } = context.request;

    const query = User.findOne({ username });

    const user = await query.exec();

    if (user === undefiend) {
      throw new Error("User is not exist");
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      throw new Error("Wrong crendetials");
    }

    const token = generateToken(user);

    context.status = 200;

    context.body = {
      respose: { ...user, token },
    };
  },
};

exports.login = login;
