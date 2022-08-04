const Router = require("@koa/router");
const { normalizeMethods, normalizeHandlers } = require("./utils/helpers");

const makeRoute = (rawRoute) => {
  const route = {
    path: rawRoute.path,
    methods: normalizeMethods(rawRoute),
    handlers: normalizeHandlers(rawRoute),
  };

  //   if (rawRoute.validate !== undefined) {
  //     const middlewares = makeValidators(rawRoute);

  //     if (rawRoute.validate.body !== undefined) {
  //       const bodyTypeValidator = makeBodyTypeValidator(
  //         rawRoute.validate.body.type
  //       );

  //       const bodyParser = makeBodyParser(
  //         rawRoute.validate.body.type,
  //         rawRoute.validate.body.options
  //       );

  //       middlewares.unshift(bodyTypeValidator, bodyParser);
  //     }

  //     route.handlers.unshift(...middlewares);
  //   }

  return route;
};

class YupRouter extends Router {
  addRoute(rawRoute) {
    const route = makeRoute(rawRoute);

    for (const method of route.methods) {
      this[method](route.path, ...route.handlers);
    }
  }

  addRoutes(rawRoutes) {
    for (const rawRoute of rawRoutes) {
      this.addRoute(rawRoute);
    }
  }
}

exports.YupRouter = YupRouter;
