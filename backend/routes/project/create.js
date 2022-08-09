const yup = require("yup");
const { Project } = require("../../database");
const { mapProjectToResponse } = require("./utils/mappers");

const projectCreate = {
  path: "/",
  method: "POST",
  validate: {
    body: {
      type: "json",
      schema: yup.object({
        name: yup.string().required(),
        countryCode: yup.string().required(),
        shortDescription: yup.string().required(),
        fullDescription: yup.string().required(),
        technologyIds: yup.array().of(yup.objectId()).min(1).required(),
        projectLink: yup.string().required(),
        imageFileId: yup.objectId().required(),
        showOnHomePage: yup.boolean().optional(),
      }),
    },
  },
  handler: async (context) => {
    const { body } = context.request;

    let project = await Project.create({
      name: body.name,
      countryCode: body.countryCode,
      shortDescription: body.shortDescription,
      fullDescription: body.fullDescription,
      technologies: body.technologyIds,
      projectLink: body.projectLink,
      imageFile: body.imageFileId,
      showOnHomePage: body.showOnHomePage,
    });

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

    let res = await mapProjectToResponse(project);

    context.status = 201;

    context.body = {
      response: res,
    };
  },
};

exports.projectCreate = projectCreate;
