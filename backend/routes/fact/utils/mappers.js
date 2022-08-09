const { mapFileToResponse } = require("../../file/utils/mappers");

const mapFactToResponse = async (fact) => {
  let file = await mapFileToResponse(fact.iconFile);

  return {
    id: fact.id,
    title: fact.title,
    text: fact.text,
    iconFile: file,
    showOnHomePage: fact.showOnHomePage,
  };
};

exports.mapFactToResponse = mapFactToResponse;
