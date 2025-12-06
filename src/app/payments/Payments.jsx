import React, { useEffect, useState } from "react";
import api from "../../api";

export default function Payments() {
  const [rows, setRows] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => { load(); }, [page]);

  async function load() {
    try {
      const perPage = 20;
      const start = page * perPage, end = start + perPage;
      const res = await api.get(`/api/payments?_start=${start}&_end=${end}`);
      setRows(res.data || []);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <h2 className="text-xl font-semibold neon mb-4">Payments</h2>
      <div className="card p-4 rounded-lg">
        <table className="w-full text-left">
          <thead>
            <tr className="text-muted text-sm">
              <th>Ref</th><th>Txn</th><th>Amount</th><th>Status</th><th>Event</th><th>When</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(p => (
              <tr key={p._id} className="border-t border-black/10">
                <td className="py-3">{p.paymentReference}</td>
                <td>{p.transactionReference}</td>
                <td>₦{Number(p.amountPaid||p.amount).toLocaleString()}</td>
                <td className="text-sm">{p.status}</td>
                <td>{p.eventValue}</td>
                <td>{new Date(p.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
