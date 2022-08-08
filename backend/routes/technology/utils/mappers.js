const { mapFileToResponse } = require("../../file/utils/mappers");

const mapTechnologyToResponse = async (technology) => {
  let file = await mapFileToResponse(technology.iconFile);

  return {
    id: technology.id,
    name: technology.name,
    category: technology.category,
    iconFile: file,
  };
};

exports.mapTechnologyToResponse = mapTechnologyToResponse;
