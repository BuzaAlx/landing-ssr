const Koa = require("koa");
const app = new Koa();
const cors = require("@koa/cors");
const { config } = require("./config");
const { createDeferred } = require("./utils/helpers");
const { router } = require("./routes");

app.use(cors());

app.use((context, next) => {
  console.log(`New request ${context.method} ${context.originalUrl}`);

  return next();
});

app.use(router.routes());
app.use(router.allowedMethods());

const run = async () => {
  const deferred = createDeferred();

  app.listen(config.server.port, config.server.host, deferred.resolve);

  await deferred.promise;

  console.log(
    `Server run on http://${config.server.host}:${config.server.port}`
  );
};

run().catch((error) => {
  console.error(error);
});

app.listen(3000);
