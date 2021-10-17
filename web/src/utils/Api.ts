import { UserData } from "./types";
export const BASE_URL = "http://178.128.136.91:4000";

export async function getUsers() {
  const res = await fetch(`${BASE_URL}/users`);

  if (!res.ok) {
    throw new Error(`Статут ошибки: ${res.status}`);
  }

  const values = await res.json();

  return values as UserData[];
}

export async function createUser(user: UserData) {
  const res = await fetch(`${BASE_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!res.ok) {
    throw new Error(`Статут ошибки: ${res.status}`);
  }

  const values = await res.json();

  return values as UserData;
}

export async function updateUser(user: UserData) {
  const res = await fetch(`${BASE_URL}/users`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!res.ok) {
    throw new Error(`Статут ошибки: ${res.status}`);
  }

  const values = await res.json();

  return values as UserData;
}

export async function deleteUser(user: UserData) {
  const res = await fetch(`${BASE_URL}/users/${user.id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error(`Статут ошибки: ${res.status}`);
  }
}
