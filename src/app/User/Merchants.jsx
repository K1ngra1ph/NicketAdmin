import React, { useEffect, useState } from "react";
import api from "../../api";

export default function Merchants() {
  const [rows, setRows] = useState([]);

  useEffect(() => { load(); }, []);

  async function load() {
    try {
      const res = await api.get("/api/merchant");
      setRows(res.data || []);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <h2 className="text-xl font-semibold neon mb-4">Merchants</h2>
      <div className="card p-4 rounded-lg">
        <table className="w-full text-left">
          <thead><tr className="text-muted"><th>Name</th><th>Email</th><th>Role</th></tr></thead>
          <tbody>
            {rows.map(r => (
              <tr key={r._id} className="border-t border-black/10">
                <td className="py-3">{r.name || "-"}</td>
                <td>{r.email}</td>
                <td>{r.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
