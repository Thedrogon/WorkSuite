function HRDemo() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-medium">HR Dashboard (Demo)</h2>

      <div className="grid grid-cols-3 gap-4">
        {[
          ["Employees", "124"],
          ["Active Projects", "8"],
          ["Benched", "12"],
        ].map(([label, value]) => (
          <div
            key={label}
            className="border border-zinc-200 rounded-lg p-4"
          >
            <p className="text-xs text-zinc-500">{label}</p>
            <p className="text-lg font-semibold">{value}</p>
          </div>
        ))}
      </div>

      <div className="border border-zinc-200 rounded-lg overflow-hidden">
        <div className="grid grid-cols-4 bg-zinc-50 px-4 py-2 text-xs text-zinc-500">
          <span>Name</span>
          <span>Role</span>
          <span>Status</span>
          <span>Project</span>
        </div>

        {[
          ["Ananya", "Frontend Dev", "Active", "Portal Revamp"],
          ["Rohit", "Backend Dev", "Benched", "—"],
        ].map((row, i) => (
          <div
            key={i}
            className="grid grid-cols-4 px-4 py-3 text-sm border-t border-zinc-100"
          >
            {row.map((cell, j) => (
              <span key={j}>{cell}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
export default HRDemo;