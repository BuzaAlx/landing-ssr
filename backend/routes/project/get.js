const yup = require("yup");

const { Project } = require("../../database");

const { mapProjectToResponse } = require("./utils/mappers");

const projectGet = {
  path: "/:id?",
  method: "GET",
  validate: {
    params: {
      schema: yup.object({
        id: yup.objectId().optional(),
      }),
    },
  },
  handler: async (context) => {
    const { params } = context.request;

    let projects = Project.find();

    if (params.id !== undefined) {
      projects.where("_id", params.id);
    }

    projects.populate([
      {
        path: "technologies",
        populate: {
          path: "iconFile",
        },
      },
      {
        path: "imageFile",
      },
    ]);

    projects = await projects.exec();

    // TODO: if only 1 project exists return obj not array

    let res = await Promise.all(projects.map(mapProjectToResponse));

    context.status = 200;

    context.body = {
      response: res,
    };
  },
};

exports.projectGet = projectGet;
