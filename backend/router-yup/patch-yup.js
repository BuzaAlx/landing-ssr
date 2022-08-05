const yup = require("yup");

const { ObjectIdSchema } = require("./yup-schemas");

yup.objectId = () => new ObjectIdSchema();
