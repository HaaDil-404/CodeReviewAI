import { NextRequest, NextResponse } from "next/server";

import User from "@/models/User";
import { connectDB } from "@/lib/db";
import { verifyToken } from "@/lib/jwt";

export async function GET(request: NextRequest) {
    try {
        await connectDB();

        const token = request.cookies.get("token")?.value;

        if (!token) {
            return NextResponse.json(
                {
                    message: "Unauthorized",
                },
                {
                    status: 401,
                }
            );
        }

        const decoded = verifyToken(token) as {
            id: string;
        };

        const user = await User.findById(decoded.id).select(
            "-password"
        );

        if (!user) {
            return NextResponse.json(
                {
                    message: "User not found",
                },
                {
                    status: 404,
                }
            );
        }

        return NextResponse.json({
            success: true,
            user,
        });
    } catch {
        return NextResponse.json(
            {
                message: "Invalid token",
            },
            {
                status: 401,
            }
        );
    }
}