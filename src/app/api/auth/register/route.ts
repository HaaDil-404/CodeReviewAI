import { NextResponse } from "next/server";

import User from "@/models/User";
import { connectDB } from "@/lib/db";
import { hashPassword } from "@/lib/bcrypt";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const existingUser = await User.findOne({
      email: body.email,
    });

    if (existingUser) {
      return NextResponse.json(
        {
          message: "User already exists",
        },
        {
          status: 400,
        }
      );
    }

    const hashedPassword = await hashPassword(
      body.password
    );

    const user = await User.create({
      name: body.name,
      email: body.email,
      password: hashedPassword,
    });

    return NextResponse.json(
      {
        success: true,
        user,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Registration failed",
      },
      {
        status: 500,
      }
    );
  }
}