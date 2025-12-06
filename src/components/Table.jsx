export default function Table({ columns, data }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-700 bg-[#121212]">
      <table className="w-full text-sm text-gray-300">
        <thead className="bg-[#1e1e1e] text-gray-200">
          <tr>
            {columns.map((col) => (
              <th key={col.accessor} className="px-4 py-3 text-left font-medium">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.length === 0 && (
            <tr>
              <td className="px-4 py-6 text-center" colSpan={columns.length}>
                No data found
              </td>
            </tr>
          )}
          {data.map((row, i) => (
            <tr key={i} className="border-t border-gray-700 hover:bg-[#1b1b1b]">
              {columns.map((col) => (
                <td key={col.accessor} className="px-4 py-3">
                  {row[col.accessor] ?? "-"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
