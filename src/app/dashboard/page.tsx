"use client";

import { useEffect, useState } from "react";
import axios from "axios";

import {
  BarChart3,
  Shield,
  Gauge,
  FileCode2,
} from "lucide-react";

import AnalyticsCard from "@/components/dashboard/AnalyticsCard";
import TrendChart from "@/components/dashboard/TrendChart";
import CardSkeleton from "@/components/skeletons/CardSkeleton";

export default function DashboardPage() {
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    async function fetchStats() {
      const response = await axios.get("/api/dashboard/stats");
      setStats(response.data);
    }

    fetchStats();
  }, []);

  if (!stats) {
    return (
      <div className="mx-auto max-w-7xl p-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl space-y-10 p-8">

      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold tracking-tight">
          Dashboard
        </h1>

        <p className="mt-2 text-muted-foreground">
          Monitor code quality and track analysis performance.
        </p>
      </div>

      {/* Analytics Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

        <AnalyticsCard
          title="Total Analyses"
          value={stats.totalAnalyses}
          icon={<FileCode2 size={22} />}
        />

        <AnalyticsCard
          title="Average Quality"
          value={stats.avgQuality}
          icon={<BarChart3 size={22} />}
        />

        <AnalyticsCard
          title="Security Score"
          value={stats.avgSecurity}
          icon={<Shield size={22} />}
        />

        <AnalyticsCard
          title="Performance"
          value={stats.avgPerformance}
          icon={<Gauge size={22} />}
        />

      </div>

      {/* Chart Section */}
      <div className="rounded-3xl border bg-background/60 p-8 shadow-lg backdrop-blur-xl">

        <div className="mb-6">
          <h2 className="text-2xl font-bold">
            Analysis Trend
          </h2>

          <p className="text-muted-foreground">
            Performance over time
          </p>
        </div>

        <TrendChart data={stats.reports} />

      </div>

      {/* Bottom Grid */}
      <div className="grid gap-6 lg:grid-cols-2">

        {/* Activity */}
        <div className="rounded-3xl border bg-background/60 p-8 shadow-lg backdrop-blur-xl">

          <h2 className="mb-6 text-2xl font-bold">
            Recent Activity
          </h2>

          <div className="space-y-4">

            <div className="rounded-xl border p-4">
              <p className="font-medium">
                JavaScript File Reviewed
              </p>

              <p className="text-sm text-muted-foreground">
                Quality score improved by 8%
              </p>
            </div>

            <div className="rounded-xl border p-4">
              <p className="font-medium">
                Security Issues Detected
              </p>

              <p className="text-sm text-muted-foreground">
                3 medium severity vulnerabilities found
              </p>
            </div>

            <div className="rounded-xl border p-4">
              <p className="font-medium">
                Performance Suggestions Generated
              </p>

              <p className="text-sm text-muted-foreground">
                AI recommended 5 optimizations
              </p>
            </div>

          </div>

        </div>

        {/* Insights */}
        <div className="rounded-3xl border bg-background/60 p-8 shadow-lg backdrop-blur-xl">

          <h2 className="mb-6 text-2xl font-bold">
            AI Insights
          </h2>

          <div className="space-y-5">

            <div className="rounded-xl border p-4">
              <p className="font-semibold text-green-500">
                Quality Improving
              </p>

              <p className="mt-2 text-sm text-muted-foreground">
                Your average quality score has increased during the last analyses.
              </p>
            </div>

            <div className="rounded-xl border p-4">
              <p className="font-semibold text-yellow-500">
                Security Attention Needed
              </p>

              <p className="mt-2 text-sm text-muted-foreground">
                Consider reviewing recurring medium severity issues.
              </p>
            </div>

            <div className="rounded-xl border p-4">
              <p className="font-semibold text-blue-500">
                Performance Stable
              </p>

              <p className="mt-2 text-sm text-muted-foreground">
                Recent reports indicate consistent performance scores.
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
