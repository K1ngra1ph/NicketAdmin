import React, { useEffect, useState } from "react";
import api from "@/lib/api";
import { PieChart, Pie, Cell, Tooltip, LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

const COLORS = ["#ff1e1e", "#ff4040", "#ff7373", "#ff9a9a", "#ffb4b4", "#ffdddd"];

export default function Dashboard() {
  const [monthlyData, setMonthlyData] = useState([]);
  const [totalRevenue, setTotalRevenue] = useState(0);

  useEffect(() => {
    async function load() {
      try {
        // example endpoint expects /api/admin/analytics/monthly-total?month=... -- adapt if different
        const month = new Date().getMonth() + 1;
        const res = await api.get(`/api/admin/analytics/monthly-total?month=${month}`);
        setMonthlyData(res.data || []);
        const total = (res.data || []).reduce((s, r) => s + (r.amountPaid || 0), 0);
        setTotalRevenue(total);
      } catch (err) {
        console.error("Dashboard load", err);
      }
    }
    load();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="card p-5 rounded-lg">
          <div className="text-sm text-muted">Total Revenue (Month)</div>
          <div className="text-2xl font-bold neon">₦{Number(totalRevenue || 0).toLocaleString()}</div>
        </div>
        <div className="card p-5 rounded-lg">
          <div className="text-sm text-muted">Total Events</div>
          <div className="text-2xl font-bold neon">{monthlyData.length}</div>
        </div>
        <div className="card p-5 rounded-lg">
          <div className="text-sm text-muted">Quick Actions</div>
          <div className="mt-3">
            <button className="px-4 py-2 rounded bg-neonred text-black font-semibold">Export Emails</button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card p-6 rounded-lg">
          <h3 className="font-semibold text-lg text-muted mb-3">Revenue breakdown</h3>
          <div style={{ width: "100%", height: 320 }}>
            <ResponsiveContainer>
              <PieChart>
                <Pie data={monthlyData} dataKey="amountPaid" nameKey="eventValue" outerRadius={110} label>
                  {monthlyData.map((entry, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                </Pie>
                <Tooltip formatter={(v) => `₦${Number(v).toLocaleString()}`} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card p-6 rounded-lg">
          <h3 className="font-semibold text-lg text-muted mb-3">Revenue trend</h3>
          <div style={{ width: "100%", height: 320 }}>
            <ResponsiveContainer>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="eventValue" />
                <YAxis />
                <Tooltip formatter={(v) => `₦${Number(v).toLocaleString()}`} />
                <Line type="monotone" dataKey="amountPaid" stroke="#ff4d4d" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
