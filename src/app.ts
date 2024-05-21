import { Hono } from 'hono'
import { fibonacci } from './funcs/fib'

const app = new Hono()

app.get('/fib', (c) => {
  // Get the query parameter n
  const n = parseFloat(c.req.query('n') || '')

  // Check if n is a number
  if (isNaN(n)) {
    return c.json({ error: 'n must be a number' }, 400)
  }

  // Check if n is an integer
  if (!Number.isInteger(n)) {
    return c.json({ error: 'n must be an integer' }, 400)
  }

  // Check if n is positive
  if (n <= 0) {
    return c.json({ error: 'n must be a positive integer' }, 400)
  }

  // Calculate the Fibonacci number
  const result = fibonacci(n)

  return c.json({ result })
})

export default app
