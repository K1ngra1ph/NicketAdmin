"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  { label: "Dashboard", path: "/dashboard" },
  { label: "Events", path: "/events" },
  { label: "Payments", path: "/payments" },
  { label: "Numbers", path: "/numbers" },
  { label: "Merchants", path: "/merchants" },
  { label: "Settings", path: "/settings" },
];

export default function Sidebar() {
  const path = usePathname();

  return (
    <aside className="w-56 h-screen bg-black border-r border-red-900 p-4">
      <h2 className="text-xl font-bold neon mb-6">Nicket Admin</h2>
      <nav className="flex flex-col gap-3">
        {menu.map((m) => (
          <Link
            key={m.path}
            href={m.path}
            className={`p-2 rounded ${
              path === m.path ? "bg-red-900 text-white" : "text-gray-300"
            }`}
          >
            {m.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
