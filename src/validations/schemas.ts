import { z } from 'zod'

export const fibValidationSchema = z.object({
  n: z
  .string()
  .transform((val) => parseInt(val))
  .refine((val) => !isNaN(val), { message: 'n must be a number.' })
  .refine((val) => val > 0, { message: 'n must be positive.' })
});