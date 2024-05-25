import { z } from "zod";

export const fibValidationSchema = z.object({
	n: z
		.string()
		.transform((val) => Number.parseInt(val))
		.refine((val) => !Number.isNaN(val), { message: "n must be a number." })
		.refine((val) => val > 0, { message: "n must be positive." }),
});
