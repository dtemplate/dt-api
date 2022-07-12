import { Application } from "https://deno.land/x/oak@v10.6.0/mod.ts";
import { userRouter } from "../../../modules/users/routes.ts";

const app = new Application();

app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

export { app };
