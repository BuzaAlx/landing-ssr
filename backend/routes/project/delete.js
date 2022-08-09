const yup = require("yup");
const { Project } = require("../../database");

const projectDelete = {
  path: "/:id?",
  method: "DELETE",
  validate: {
    params: {
      schema: yup.object({
        id: yup.objectId().optional(),
      }),
    },
  },
  handler: async (context) => {
    const { params } = context.request;

    const project = await Project.findByIdAndDelete(params.id);

    if (!project) {
      context.status = 404;

      context.body = {
        response: null,
      };

      return;
    }

    context.status = 204;
  },
};

exports.projectDelete = projectDelete;
