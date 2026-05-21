import { createServer } from "node:http";
import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { serveStatic } from "@hono/node-server/serve-static";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = new Hono();

// Serve static assets from client dist
app.use("/assets/*", serveStatic({ root: "./dist/client" }));
app.use("/favicon.ico", serveStatic({ path: "./dist/client/favicon.ico" }));

// Import the SSR handler from the build
// TanStack Start's Cloudflare adapter exports a 'fetch' handler
const serverEntry = await import("./dist/server/index.js");
const handler = serverEntry.default || serverEntry;

app.all("*", async (c) => {
  try {
    const res = await handler.fetch(c.req.raw, {}, {});
    return res;
  } catch (e) {
    console.error("SSR Error:", e);
    return c.text("Internal Server Error", 500);
  }
});

const port = process.env.PORT || 3000;
console.log(`Server running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port: Number(port),
});
