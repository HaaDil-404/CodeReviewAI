import { NextResponse } from "next/server";

import Report from "@/models/Report";

import { connectDB } from "@/lib/db";

import { getUserFromToken } from "@/lib/getUserFromToken";

export async function GET() {
  try {

    await connectDB();

    const user =
      await getUserFromToken();

    if (!user) {

      return NextResponse.json(
        {
          message: "Unauthorized",
        },
        {
          status: 401,
        }
      );

    }

    const reports =
      await Report.find({
        userId:
          user._id.toString(),
      }).sort({
        createdAt: 1,
      });

    const totalAnalyses =
      reports.length;

    const avgQuality =
      totalAnalyses === 0
        ? 0
        : Math.round(
            reports.reduce(
              (sum, report) =>
                sum +
                report.qualityScore,
              0
            ) /
              totalAnalyses
          );

    const avgSecurity =
      totalAnalyses === 0
        ? 0
        : Math.round(
            reports.reduce(
              (sum, report) =>
                sum +
                report.securityScore,
              0
            ) /
              totalAnalyses
          );

    const avgPerformance =
      totalAnalyses === 0
        ? 0
        : Math.round(
            reports.reduce(
              (sum, report) =>
                sum +
                report.performanceScore,
              0
            ) /
              totalAnalyses
          );

    const avgMaintainability =
      totalAnalyses === 0
        ? 0
        : Math.round(
            reports.reduce(
              (sum, report) =>
                sum +
                report.maintainabilityScore,
              0
            ) /
              totalAnalyses
          );

    return NextResponse.json({
      totalAnalyses,

      avgQuality,

      avgSecurity,

      avgPerformance,

      avgMaintainability,

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
      }
    );

  }
}