const { Slogan } = require("../../database");
const { mapSloganToResponse } = require("../slogan/utils/mappers");

const getSlogan = {
  path: "/get-slogan",
  method: "GET",
  handler: async (context) => {
    let slogan = await Slogan.findOne({
      selected: true,
    });

    if (!slogan) {
      slogan = await Slogan.create({
        title: "Sample title",
        text: "Sample text",
        selected: true,
      });
    }

    let res = await mapSloganToResponse(slogan);

    context.status = 200;

    context.body = {
      response: res,
    };
  },
};

exports.getSlogan = getSlogan;
