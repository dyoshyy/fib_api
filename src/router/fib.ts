import { Hono } from "hono";
import { fibonacci } from "../funcs/fib";
import { zValidator } from '@hono/zod-validator'
import { fibValidationSchema } from "../validations/schemas";

export const fibRouter = new Hono();

fibRouter.get(
  '/',
  zValidator(
    "query", 
    fibValidationSchema,
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