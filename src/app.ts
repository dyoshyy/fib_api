import { Hono } from "hono";
import { fibRouter } from "./router/fib";
import { rootRouter } from "./router/root";

const app = new Hono().route("/", rootRouter).route("/fib", fibRouter);

export default app;
