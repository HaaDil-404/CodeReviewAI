import axios from "axios";

export async function registerUser(
  name: string,
  email: string,
  password: string
) {
  const response = await axios.post(
    "/api/auth/register",
    {
      name,
      email,
      password,
    }
  );

  return response.data;
}

export async function loginUser(
  email: string,
  password: string
) {
  const response = await axios.post(
    "/api/auth/login",
    {
      email,
      password,
    }
  );

  return response.data;
}

export async function getCurrentUser() {
  const response = await axios.get(
    "/api/auth/me"
  );

  return response.data;
}

export async function logoutUser() {
  const response = await axios.post(
    "/api/auth/logout"
  );

  return response.data;
}