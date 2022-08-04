const { Schema, SchemaTypes } = require("mongoose");

const { connection } = require("../connection");

const definition = {
  username: {
    type: SchemaTypes.String,
    required: true,
  },
  password: {
    type: SchemaTypes.String,
    required: true,
  },
  email: {
    type: SchemaTypes.String,
    required: true,
  },
  createdAt: {
    type: SchemaTypes.String,
    default: false,
  },
};

const schema = new Schema(definition, {
  versionKey: false,
});

const User = connection.model("user", schema);

exports.User = User;
