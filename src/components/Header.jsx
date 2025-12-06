export default function Header() {
  return (
    <header className="w-full bg-black border-b border-red-900 p-4 flex justify-between items-center">
      <h1 className="font-semibold neon">Admin Panel</h1>
      <button className="bg-red-600 px-3 py-1 rounded">Export Emails</button>
    </header>
  );
}
