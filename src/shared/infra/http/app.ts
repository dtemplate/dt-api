import { Application } from "https://deno.land/x/oak@v10.6.0/mod.ts";
import { userRouter } from "../../../modules/users/routes.ts";
import { StatusCode } from "../../utils/StatusCode.ts";

const app = new Application();

app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

app.use((ctx) => {
  ctx.response.body = {
    message: "Page Not Found",
    status: StatusCode.NOT_FOUND,
    _links: {
      not_found_docs: {
        url: `${Deno.env.get("BASE_URL")}/docs/not_found`,
        method: "GET",
      },
      routes_docs: {
        url: `${Deno.env.get("BASE_URL")}/docs/routes`,
        method: "GET",
      },
    },
  };
});

export { app };
