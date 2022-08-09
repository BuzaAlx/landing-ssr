const { mapFileToResponse } = require("../../file/utils/mappers");
const { mapTechnologyToResponse } = require("../../technology/utils/mappers");

const mapProjectToResponse = async (project) => {
  let file = await mapFileToResponse(project.imageFile);
  let technologies = await Promise.all(
    project.technologies.map(mapTechnologyToResponse)
  );

  let obj = {
    id: project.id,
    name: project.name,
    countryCode: project.countryCode,
    shortDescription: project.shortDescription,
    fullDescription: project.fullDescription,
    technologies: technologies,
    projectLink: project.projectLink,
    imageFile: file,
    showOnHomePage: project.showOnHomePage,
  };

  return obj;
};

exports.mapProjectToResponse = mapProjectToResponse;

// id: project.id,
//   name: project.name,
//   countryCode: project.countryCode,
//   shortDescription: project.shortDescription,
//   fullDescription: project.fullDescription,
//   technologies: project.technologies.map(mapTechnologyToResponse),
//   projectLink: project.projectLink,
//   imageFile: mapFileToResponse(project.imageFile),
//   showOnHomePage: project.showOnHomePage,
