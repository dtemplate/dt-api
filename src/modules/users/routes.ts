import { Router } from "https://deno.land/x/oak@v10.6.0/mod.ts";

const userRouter = new Router();

userRouter.get("/users", (ctx) => {
  ctx.response.body = "Hello World Users";
});

export { userRouter };
