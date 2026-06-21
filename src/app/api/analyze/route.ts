import { NextResponse } from "next/server";

import { runAnalysis } from "@/services/analyze.service";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const response = await runAnalysis(body.code, body.language);

    return NextResponse.json({
      success: true,
      data: response,
    });
  } catch (error) {

  console.error(error);

  return NextResponse.json(
    {
      success: false,
      message:
        "Analysis failed",
    },
    {
      status: 500,
    }
  );
}
}