import { z } from "zod";

export const updateSchema = z.object({
  name: z.string().min(2, "Name must be atleast 3 character long").optional(),
  email: z.string().email().optional(),
  age: z
    .number()
    .min(1, "Age must be atleast 1")
    .max(100, "Age cannot exceed 100")
    .optional(),
});
