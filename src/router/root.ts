import { Hono } from "hono";

export const rootRouter = new Hono();

rootRouter.get("/", (c) => {
	return c.text("go to /fib (GET) to calculate fibonacci number");
});
