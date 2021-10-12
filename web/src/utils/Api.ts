import { UserData } from "./types";
export const BASE_URL = "http://localhost:4000";

export async function getUsers() {
  const res = await fetch(`${BASE_URL}/users`);

  if (res.ok) {
    const values = await res.json();

    return values as UserData[];
  }

  throw new Error(`Статут ошибки: ${res.status}`);
}

export async function createUser(user: UserData) {
  const res = await fetch(`${BASE_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (res.ok) {
    const values = await res.json();

    return values as UserData;
  }

  throw new Error(`Статут ошибки: ${res.status}`);
}

export async function updateUser(user: UserData) {
  const res = await fetch(`${BASE_URL}/users`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (res.ok) {
    const values = await res.json();

    return values as UserData;
  }

  throw new Error(`Статут ошибки: ${res.status}`);
}
