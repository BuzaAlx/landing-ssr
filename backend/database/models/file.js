const { Schema, SchemaTypes } = require("mongoose");

const { connection } = require("../connection");

const definition = {
  name: {
    type: SchemaTypes.String,
    required: true,
  },
  extension: {
    type: SchemaTypes.String,
    required: true,
  },
  savedAs: {
    type: SchemaTypes.String,
    required: true,
  },
  mimeType: {
    type: SchemaTypes.String,
    required: true,
  },
  size: {
    type: SchemaTypes.Number,
    required: true,
  },
  hash: {
    type: SchemaTypes.String,
    required: true,
  },
  uploadedAt: {
    type: SchemaTypes.Date,
    default: () => new Date(),
  },
};

const schema = new Schema(definition, {
  versionKey: false,
});

const File = connection.model("file", schema);

exports.File = File;
