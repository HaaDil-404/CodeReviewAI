import { NextResponse } from "next/server";

import User from "@/models/User";
import { connectDB } from "@/lib/db";
import { comparePassword } from "@/lib/bcrypt";
import { generateToken } from "@/lib/jwt";

export async function POST(req: Request) {
    try {
        await connectDB();

        const body = await req.json();

        const user = await User.findOne({
            email: body.email,
        });

        if (!user) {
            return NextResponse.json(
                {
                    message: "Invalid credentials",
                },
                {
                    status: 401,
                }
            );
        }

        const isMatch = await comparePassword(
            body.password,
            user.password
        );

        if (!isMatch) {
            return NextResponse.json(
                {
                    message: "Invalid credentials",
                },
                {
                    status: 401,
                }
            );
        }

        const token = generateToken(user._id.toString());

        const response = NextResponse.json(
            {
                success: true,
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                },
            },
            {
                status: 200,
            }
        );

        response.cookies.set({
            name: "token",
            value: token,
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 60 * 60 * 24 * 7,
            path: "/",
        });

        return response;

        // return NextResponse.json({
        //   success: true,
        //   token,
        // });
    } catch (error) {
        return NextResponse.json(
            {
                message: "Login failed",
            },
            {
                status: 500,
            }
        );
    }
}