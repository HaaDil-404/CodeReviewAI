"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";

interface Props {
  data: any[];
}

export default function TrendChart({
  data,
}: Props) {

  return (

    <div className="h-[400px] rounded-3xl border p-6">

      <h2 className="mb-6 text-2xl font-bold">

        Score Trends

      </h2>

      <ResponsiveContainer
        width="100%"
        height="100%"
      >

        <LineChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis
            dataKey="createdAt"
          />

          <YAxis />

          <Tooltip />

          <Legend />

          <Line
            type="monotone"
            dataKey="qualityScore"
            stroke="#3b82f6"
          />

          <Line
            type="monotone"
            dataKey="securityScore"
            stroke="#22c55e"
          />

          <Line
            type="monotone"
            dataKey="performanceScore"
            stroke="#f59e0b"
          />

        </LineChart>

      </ResponsiveContainer>

    </div>

  );
}