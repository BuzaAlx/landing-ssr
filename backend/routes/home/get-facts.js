const { Fact } = require("../../database");
const { mapFactToResponse } = require("../fact/utils/mappers");

const getFacts = {
  path: "/get-facts",
  method: "GET",
  handler: async (context) => {
    const query = Fact.find();

    query.where("showOnHomePage", true);

    query.populate({
      path: "iconFile",
    });

    const facts = await query.exec();

    let res = await Promise.all(facts.map(mapFactToResponse));

    context.status = 200;

    context.body = {
      response: res,
    };
  },
};

exports.getFacts = getFacts;
