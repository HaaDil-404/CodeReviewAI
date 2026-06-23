import { NextResponse } from "next/server";

import Report from "@/models/Report";
import { connectDB } from "@/lib/db";
import { getUserFromToken } from "@/lib/getUserFromToken";

export async function GET(
  req: Request,
  {
    params,
  }: {
    params: Promise<{
      id: string;
    }>;
  },
) {
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

    const { id } = await params;

    const report = await Report.findOne({
      _id: id,

      userId: user._id.toString(),
    });

    if (!report) {
      return NextResponse.json(
        {
          message: "Report not found",
        },
        {
          status: 404,
        },
      );
    }

    return NextResponse.json({
      success: true,

      report,
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

export async function DELETE(
  req: Request,
  {
    params,
  }: {
    params: Promise<{
      id: string;
    }>;
  },
) {
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

    const { id } = await params;

    const report = await Report.findOneAndDelete({
      _id: id,

      userId: user._id.toString(),
    });

    if (!report) {
      return NextResponse.json(
        {
          message: "Report not found",
        },
        {
          status: 404,
        },
      );
    }

    return NextResponse.json({
      success: true,
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
