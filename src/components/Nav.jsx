import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const linkClass = ({ isActive }) =>
    `block px-4 py-3 rounded-md mb-1 ${
      isActive ? "bg-black/50 text-neonred" : "text-gray-300 hover:bg-black/30"
    }`;

  return (
    <aside className="w-72 p-4 border-r border-black/20" style={{ background: "#070709" }}>
      <div className="mb-6">
        <h1 className="text-2xl font-bold neon">NICKET</h1>
        <p className="text-sm text-muted">Admin Panel</p>
      </div>

      <nav>
        <NavLink to="/dashboard" className={linkClass}>Dashboard</NavLink>
        <NavLink to="/events" className={linkClass}>Events</NavLink>
        <NavLink to="/payments" className={linkClass}>Payments</NavLink>
        <NavLink to="/numbers" className={linkClass}>Numbers</NavLink>
        <NavLink to="/merchants" className={linkClass}>Merchants</NavLink>
      </nav>

      <div className="mt-6 text-sm text-muted">
        <p>Frontend: <a className="text-xs text-gray-400" href={process.env.VITE_FRONTEND_URL}>{process.env.VITE_FRONTEND_URL}</a></p>
        <p className="mt-3">Built with ❤️ </p>
      </div>
    </aside>
  );
};

export default Nav;
