export default function Table({ columns, data }) {
  return (
    <table className="w-full text-left border-collapse">
      <thead className="neon text-sm border-b border-red-900">
        <tr>
          {columns.map((col) => (
            <th key={col} className="py-2">{col}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((row, i) => (
          <tr key={i} className="border-b border-gray-800 hover:bg-red-950">
            {columns.map((col) => (
              <td key={col} className="py-2">{row[col]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
