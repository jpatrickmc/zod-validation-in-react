import { env } from 'process';
import z from 'zod';

const getUserSchema = z.object({
  offset: z.number(),
});

type UsersFilters = z.infer<typeof getUserSchema>;

export async function getUsers(filters: UsersFilters) {
  const result = getUserSchema.safeParse(filters);
  fetch('/api/users', {
    headers: {
      Authorization: `Bearer ${env.SECRET_KEY}`,
    },
  });
  return result.success ? result.data : null;
}
