import { Hono } from 'hono'
import { fibonacci } from './funcs/fib'
import { z } from 'zod'
import { zValidator } from '@hono/zod-validator'

const app = new Hono()

const schema = z.object({
  n: z
  .string()
  .transform((val) => parseInt(val))
  .refine((val) => !isNaN(val), { message: 'n must be a number.' })
  .refine((val) => val > 0, { message: 'n must be positive.' })
});

app.get('/', (c) => {
  return c.text('go to /fib (GET) to calculate fibonacci number')
  }
)

app.get(
  '/fib',
  zValidator(
    "query", 
    schema,
    (result, c) => {
      if (!result.success) {
        return c.json({ "status": 400, "message": `${result.error.issues[0].message}` }, 400)
      }
    }
  ),
  (c) => {

  // バリデート済みの値を取得
  const n = c.req.valid("query").n

  // フィボナッチ数を計算
  const result = fibonacci(n)

  return c.json({ result })

  }
)

export default app
