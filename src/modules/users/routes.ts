import { Router } from "https://deno.land/x/oak@v10.6.0/mod.ts";
import { StatusCode } from "../../shared/utils/StatusCode.ts";

const userRouter = new Router();

userRouter.get("/users", (ctx) => {
  ctx.response.status = StatusCode.OK;
  ctx.response.body = {
    message: "Hello world",
    status: StatusCode.OK,
    _links: {
      create_user: {
        url: `${Deno.env.get("BASE_URL")}/users`,
        method: "POST",
      },
    },
  };
});

export { userRouter };
