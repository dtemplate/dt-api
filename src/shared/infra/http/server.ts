import "https://deno.land/x/dotenv@v3.2.0/load.ts";

import { app } from "./app.ts";

const port = Number(Deno.env.get("PORT") || "3000");

console.log(`Server listening on port ${port}`);

await app.listen({ port });
