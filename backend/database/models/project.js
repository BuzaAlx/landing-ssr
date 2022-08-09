const { Schema, SchemaTypes } = require("mongoose");

const { connection } = require("../connection");

const definition = {
  name: {
    type: SchemaTypes.String,
    required: true,
  },
  countryCode: {
    type: SchemaTypes.String,
    required: true,
  },
  shortDescription: {
    type: SchemaTypes.String,
    required: true,
  },
  fullDescription: {
    type: SchemaTypes.String,
    required: true,
  },
  technologies: [
    {
      type: SchemaTypes.ObjectId,
      ref: "technology",
      required: true,
    },
  ],
  projectLink: {
    type: SchemaTypes.String,
    required: true,
  },
  imageFile: {
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

const Project = connection.model("project", schema);

exports.Project = Project;
