// src/utils/api.ts
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export const loginUser = async (email: string, password: string) => {
  const res = await fetch(`${BASE_URL}/api/auth/login`, {
    method: 'POST',
    credentials: 'include', // important if backend uses cookies
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) throw new Error('Login failed');

  return res.json(); // { token: '...' }
};
