import { z } from 'zod';

export const userSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(3),
});

export type User = z.infer<typeof userSchema>;
