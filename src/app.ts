import { Hono } from 'hono'
import { fibonacci } from './funcs/fib'
import { z } from 'zod'
import { zValidator } from '@hono/zod-validator'

const app = new Hono()

const schema = z.object({
  n: z
  .string()
  .min(1, { message: 'Query parameter is required' })
  .transform((val) => parseInt(val))
  .refine((val) => !isNaN(val), { message: 'Not a number' })
});

app.get('/', (c) => {
  return c.text('usage: go to /fib?n=5 to calculate the 5th Fibonacci number')
  }
)

app.get(
  '/fib',
  zValidator(
    "query", 
    schema,
    (result, c) => {
      if (!result.success) {
        console.log(result.error.issues)
        return c.json({ "status": result.error.issues[0].code, "message": result.error.issues[0].message}, 400)
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
