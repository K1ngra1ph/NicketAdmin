import React, { useEffect, useState } from "react";
import api from "../../api";

export default function Events() {
  const [rows, setRows] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    load();
  }, [page]);

  async function load() {
    try {
      const perPage = 20;
      const start = page * perPage;
      const end = start + perPage;
      const res = await api.get(`/events?_start=${start}&_end=${end}`);
      setRows(res.data || []);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <h2 className="text-xl font-semibold neon mb-4">Events</h2>
      <div className="card p-4 rounded-lg">
        <table className="w-full text-left">
          <thead>
            <tr className="text-muted text-sm">
              <th className="py-2">Name</th>
              <th>Date</th>
              <th>Location</th>
              <th>Active</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(r => (
              <tr key={r._id} className="border-t border-black/10">
                <td className="py-3">{r.name}</td>
                <td>{r.date}</td>
                <td>{r.location}</td>
                <td>{r.active ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
