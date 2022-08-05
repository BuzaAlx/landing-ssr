const jwt = require("jsonwebtoken");
const { config } = require("../../../config");

function generateToken(user) {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      username: user.username,
    },
    config.jwt.SECRET_KEY,
    { expiresIn: "1h" }
  );
}

exports.generateToken = generateToken;
