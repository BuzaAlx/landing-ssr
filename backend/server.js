const Koa = require("koa");
const app = new Koa();
// const router = require("@koa/router")();
const cors = require("@koa/cors");
const config = require("./config");
const { createDeferred } = require("./utils/helpers");

app.use(cors());

app.use((context, next) => {
  console.log(`New request ${context.method} ${context.originalUrl}`);

  return next();
});

const run = async () => {
  const deferred = createDeferred();

  app.listen(config.server.port, config.server.host, deferred.resolve);

  await deferred.promise;

  logger.log(
    `Server run on http://${config.server.host}:${config.server.port}`
  );
};

run().catch((error) => {
  console.error(error);
});

app.listen(3000);
