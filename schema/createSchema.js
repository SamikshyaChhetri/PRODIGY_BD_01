import { z } from "zod";

export const createSchema = z.object({
  name: z.string().min(2, "Name must be atleast 3 character long"),
  email: z.string().email(),
  age: z
    .number()
    .min(1, "Age must be atleast 1")
    .max(100, "Age cannot exceed 100"),
});
