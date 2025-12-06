"use client";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", revenue: 12000 },
  { month: "Feb", revenue: 19000 },
  { month: "Mar", revenue: 15000 },
  { month: "Apr", revenue: 22000 },
];

export default function RevenueChart() {
  return (
    <div className="bg-[#121212] p-6 rounded-xl border border-gray-700 shadow-md">
      <h3 className="text-lg font-semibold mb-4 text-red-500">Revenue Analytics</h3>
      <div style={{ width: "100%", height: 250 }}>
        <ResponsiveContainer>
          <LineChart data={data}>
            <XAxis dataKey="month" stroke="#888" />
            <YAxis stroke="#888" />
            <Tooltip />
            <Line type="monotone" dataKey="revenue" stroke="#ff0033" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
