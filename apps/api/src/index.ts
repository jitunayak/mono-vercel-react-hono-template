import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";

export const app = new Hono();
app.use(
  cors({
    origin: "*",
    allowMethods: ["GET", "POST", "PATCH"],
    allowHeaders: ["Content-Type"],
  })
);

const router = app
  .get("/users", (c) => {
    return c.json([{ id: "1", name: "Hono" }]);
  })
  .get("/users/:id", (c) => {
    return c.json({ id: c.req.param("id"), name: "Hono" });
  });

const port = (process.env.PORT as any as number) || 3000;
console.log(`Server is running on port ${port}`);

serve(app);

export type Api = typeof router;
