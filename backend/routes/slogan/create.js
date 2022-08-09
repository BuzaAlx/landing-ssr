const yup = require("yup");
const { Slogan } = require("../../database");
const { mapSloganToResponse } = require("./utils/mappers");

const sloganCreate = {
  path: "/",
  method: "POST",
  validate: {
    body: {
      type: "json",
      schema: yup.object({
        title: yup.string().required(),
        text: yup.string().required(),
        selected: yup.boolean().optional(),
      }),
    },
  },
  handler: async (context) => {
    const { body } = context.request;

    const slogan = await Slogan.create({
      title: body.title,
      text: body.text,
      selected: body.selected,
    });

    context.status = 201;

    context.body = {
      response: mapSloganToResponse(slogan),
    };
  },
};

exports.sloganCreate = sloganCreate;
