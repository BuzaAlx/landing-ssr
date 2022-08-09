const yup = require("yup");
const { Project } = require("../../database");
const { assignExistProperties } = require("../../utils/helpers");
const { mapProjectToResponse } = require("./utils/mappers");

const projectUpdate = {
  path: "/:id",
  method: "PUT",
  validate: {
    params: {
      schema: yup.object({
        id: yup.objectId().required(),
      }),
    },
    body: {
      type: "json",
      schema: yup.object({
        name: yup.string().min(1).optional(),
        countryCode: yup.string().min(1).optional(),
        shortDescription: yup.string().min(1).optional(),
        fullDescription: yup.string().min(1).optional(),
        technologyIds: yup.array().of(yup.objectId()).min(1).optional(),
        projectLink: yup.string().min(1).optional(),
        imageFileId: yup.objectId().optional(),
        showOnHomePage: yup.boolean().optional(),
      }),
    },
  },
  handler: async (context) => {
    const { params, body } = context.request;

    let project = await Project.findById(params.id);

    if (!project) {
      context.status = 404;

      context.body = {
        response: null,
      };

      return;
    }

    if (body.technologyIds !== undefined) {
      project.technologies = body.technologyIds;
    }

    if (body.imageFileId !== undefined) {
      project.imageFile = body.imageFileId;
    }

    assignExistProperties(project, body, [
      "name",
      "countryCode",
      "shortDescription",
      "fullDescription",
      "projectLink",
      "showOnHomePage",
    ]);

    await project.save();

    project.populate([
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

    project = await project.execPopulate();

    console.log(project);

    let res = await mapProjectToResponse(project);

    context.status = 200;

    context.body = {
      response: res,
    };
  },
};

exports.projectUpdate = projectUpdate;
