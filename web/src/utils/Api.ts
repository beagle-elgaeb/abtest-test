export const BASE_URL = "http://localhost:4000";

export async function getUsers() {
  const res = await fetch(`${BASE_URL}/users`);

  if (res.ok) {
    const values = await res.json();

    return values as {
      id: number;
      dateRegistration: string;
      dateLastActivity: string;
    }[];
  }

  throw new Error(`Статут ошибки: ${res.status}`);
}
