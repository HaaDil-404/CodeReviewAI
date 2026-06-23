import { NextResponse } from "next/server";

import Report from "@/models/Report";
import { connectDB } from "@/lib/db";
import { getUserFromToken } from "@/lib/getUserFromToken";

export async function GET() {
  try {
    await connectDB();

    const user = await getUserFromToken();

    if (!user) {
      return NextResponse.json(
        {
          message: "Unauthorized",
        },
        {
          status: 401,
        },
      );
    }

    const reports = await Report.find({
      userId: user._id.toString(),
    }).sort({
      createdAt: -1,
    });

    return NextResponse.json({
      success: true,
      reports,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      },
    );
  }
}
