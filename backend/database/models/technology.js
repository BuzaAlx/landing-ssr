const { Schema, SchemaTypes } = require("mongoose");

const { TechnologyType } = require("../../utils/constants");

const { connection } = require("../connection");

const definition = {
  name: {
    type: SchemaTypes.String,
    required: true,
  },
  category: {
    type: SchemaTypes.String,
    enum: TechnologyType,
    required: true,
  },
  iconFile: {
    type: SchemaTypes.ObjectId,
    ref: "file",
    required: true,
  },
};

const schema = new Schema(definition, {
  versionKey: false,
});

const Technology = connection.model("technology", schema);

exports.Technology = Technology;
