const mongoose = require("mongoose");

const { config } = require("../config");

const connection = mongoose.createConnection(config.database.uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

exports.connection = connection;
