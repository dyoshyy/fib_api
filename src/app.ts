import { Hono } from 'hono'
import { rootRouter } from './router/root'
import { fibRouter } from './router/fib'

const app = new Hono()
  .route("/", rootRouter)
  .route("/fib", fibRouter)

export default app
