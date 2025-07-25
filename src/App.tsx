import { email, z } from 'zod';
import './App.css';
import { getUsers } from './api/api';

const userSchema = z.object({
  firstName: z.string(),
  email: email(),
  profileUrl: z.url().optional(),
  age: z.number().min(1).max(120).optional(),
  friends: z.array(z.string()).optional(),
  settings: z.object({
    isSubscribed: z.boolean().default(false),
  }),
});

const userData = {
  firstName: 'Patrick',
  email: 'patrick@example.com',
  profileUrl: 'https://example.com/profile',
  age: 98,
  friends: ['Alice', 'Bob'],
  settings: {
    isSubscribed: true,
  },
};

// Actually use the schema for validation
// Validate userData using safeParse
const userResult = userSchema.safeParse(userData);

if (userResult.success) {
  // userResult.data is of type User
  console.log(userResult.data);
} else {
  // Handle validation errors
  console.error(userResult.error);
}

getUsers({ offset: 0 });

export default function App() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Vite + React</h1>
    </div>
  );
}
