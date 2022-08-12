const { TechnologyType } = require("../../utils/constants");
const { Technology } = require("../../database");
const { mapTechnologyToResponse } = require("../technology/utils/mappers");

const technologyTypes = Object.values(TechnologyType);

const getTechnologies = {
  path: "/get-technologies",
  method: "GET",
  handler: async (context) => {
    const query = Technology.find();

    query.populate({
      path: "iconFile",
    });

    const technologies = await query.exec();

    let response = {};

    for (const type of technologyTypes) {
      if (response[type] === undefined) {
        response[type] = [];
      }
    }

    for (const technology of technologies) {
      const object = await mapTechnologyToResponse(technology);

      response[technology.category].push(object);
    }

    context.status = 200;

    context.body = { response };
  },
};

exports.getTechnologies = getTechnologies;
