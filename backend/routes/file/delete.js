const yup = require("yup");
const { File } = require("../../database");
const { deleteFile } = require("../../s3");

const fileDelete = {
  path: "/:id",
  method: "DELETE",
  validate: {
    params: {
      schema: yup.object({
        id: yup.objectId().required(),
      }),
    },
  },
  handler: async (context) => {
    const { params } = context.request;

    const f = await File.findOne().where("_id", params.id).exec();

    try {
      await deleteFile(f);
    } catch (error) {
      console.log(error);
    }

    const file = await File.findByIdAndDelete(params.id);

    if (!file) {
      context.status = 404;

      context.body = {
        response: null,
      };

      return;
    }

    context.body = {
      response: "succesfully deletet",
    };
    context.status = 204;
  },
};

exports.fileDelete = fileDelete;
