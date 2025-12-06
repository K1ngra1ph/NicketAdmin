export default function SearchBar({ value, onChange }) {
  return (
    <input
      className="px-4 py-2 w-full max-w-xs bg-[#1c1c1c] text-gray-200 rounded-lg border border-gray-700
      focus:outline-none focus:ring-2 focus:ring-red-600"
      type="text"
      placeholder="Search..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
