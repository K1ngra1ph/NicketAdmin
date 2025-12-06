import { NextResponse } from "next/server";

export async function GET() {
  const backend = process.env.NEXT_PUBLIC_BACKEND_URL;

  const res = await fetch(`${backend}/api/merchant`);
  const data = await res.json();

  const emails = data.map(u => u.email).filter(Boolean);
  const csv = emails.join("\n");

  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv",
      "Content-Disposition": "attachment; filename=emails.csv",
    },
  });
}
