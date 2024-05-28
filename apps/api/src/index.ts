import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono();
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

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});

export type Api = typeof router;
