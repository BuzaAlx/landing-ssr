const { Schema, SchemaTypes } = require("mongoose");

const { connection } = require("../connection");

const definition = {
  title: {
    type: SchemaTypes.String,
    required: true,
  },
  text: {
    type: SchemaTypes.String,
    required: true,
  },
  iconFile: {
    type: SchemaTypes.ObjectId,
    ref: "file",
    required: true,
  },
  showOnHomePage: {
    type: SchemaTypes.Boolean,
    default: false,
  },
};

const schema = new Schema(definition, {
  versionKey: false,
});

const Fact = connection.model("fact", schema);

exports.Fact = Fact;
