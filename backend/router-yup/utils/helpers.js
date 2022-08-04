const normalizeMethods = (rawRoute) => {
  const methods = [];

  if (rawRoute.method !== undefined) {
    methods.push(rawRoute.method);
  }

  if (rawRoute.methods !== undefined) {
    methods.push(...rawRoute.methods);
  }

  return methods.map((method) => method.toLowerCase());
};

exports.normalizeMethods = normalizeMethods;

const normalizeHandlers = (rawRoute) => {
  const handlers = [];

  if (rawRoute.handler !== undefined) {
    handlers.push(rawRoute.handler);
  }

  if (rawRoute.handlers !== undefined) {
    handlers.push(...rawRoute.handlers);
  }

  return handlers;
};

exports.normalizeHandlers = normalizeHandlers;
