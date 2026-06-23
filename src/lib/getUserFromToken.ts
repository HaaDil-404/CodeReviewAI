import { cookies } from "next/headers";

import User from "@/models/User";

import { verifyToken } from "./jwt";

export async function getUserFromToken() {
  const cookieStore = await cookies();

  const token = cookieStore.get("token")?.value;

  if (!token) {
    return null;
  }

  try {
    const decoded = verifyToken(token) as {
      id: string;
    };

    const user = await User.findById(decoded.id);

    return user;
  } catch {
    return null;
  }
}
