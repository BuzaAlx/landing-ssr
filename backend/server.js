const Koa = require("koa");
const router = require("@koa/router")();

const app = new Koa();

app.use(async function (ctx, next) {
  try {
    ctx.response.body = "Hello";
    next();
  } catch (err) {
    if (err.status === 401) {
      ctx.status = 401;
      ctx.set("WWW-Authenticate", "Basic");
      ctx.body = "cant haz that";
    } else {
      throw err;
    }
  }
});

router.get("/", add);

async function add(ctx) {
  await ctx.render("new");
}

app.listen(3000);
