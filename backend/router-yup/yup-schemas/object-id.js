const { BaseSchema } = require("yup");

// eslint-disable-next-line import/no-extraneous-dependencies
const { ObjectId } = require("bson");

class ObjectIdSchema extends BaseSchema {
  constructor() {
    super({
      type: "objectId",
    });

    this.withMutation(() => {
      this.transform((value) => {
        if (this.isType(value)) {
          return value;
        }

        try {
          return new ObjectId(value);
        } catch (error) {
          return value;
        }
      });
    });
  }

  // eslint-disable-next-line no-underscore-dangle, class-methods-use-this
  _typeCheck(value) {
    return ObjectId.isValid(value);
  }
}

exports.ObjectIdSchema = ObjectIdSchema;
