const config = {
  server: {
    host: "0.0.0.0",
    port: 7000,
  },
  database: {
    uri: "mongodb+srv://buza:npUsYmSmN4kW8Puf@cluster0.dch8z.mongodb.net/?retryWrites=true&w=majority",
  },
  jwt: {
    SECRET_KEY: "secret",
  },
};

exports.config = config;
