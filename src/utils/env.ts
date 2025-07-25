import { z } from 'zod';

export const envSchema = z.object({
  SECRET_KEY: z.string(),
});

export const env = envSchema.safeParse(process.env);
console.log(env);
