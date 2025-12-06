export default function StatsGrid({ stats }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((item, i) => (
        <div key={i} className="card p-4 text-center">
          <p className="text-sm text-gray-400">{item.label}</p>
          <h3 className="text-2xl font-bold neon">{item.value}</h3>
        </div>
      ))}
    </div>
  );
}
