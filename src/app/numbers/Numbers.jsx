import React, { useEffect, useState } from "react";
import api from "../../api";

export default function Numbers() {
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    try {
      const res = await api.get("/api/numbers/availability");
      // res expected as object { "1": 0, "2": 1, ... }
      const arr = Object.entries(res.data || {}).map(([number, used]) => ({
        number: Number(number), used
      })).slice(0, 100);
      setNumbers(arr);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <h2 className="text-xl font-semibold neon mb-4">Numbers availability</h2>
      <div className="card p-4 rounded-lg">
        <div className="grid grid-cols-5 gap-3">
          {numbers.map(n => (
            <div key={n.number} className="p-3 rounded border border-black/10 text-xs">
              <div>#{n.number}</div>
              <div className="text-sm text-muted">Used: {n.used}</div>
              <div className="text-sm neon">Available: {Math.max(0, 10 - n.used)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
