"use client";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function RevenueChart({ data }) {
  return (
    <div className="card p-4 w-full h-64">
      <h2 className="text-lg font-semibold mb-2 neon">Revenue Last 30 Days</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="date" stroke="#888" />
          <YAxis stroke="#888" />
          <Tooltip />
          <Line type="monotone" dataKey="revenue" stroke="#ff0033" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
