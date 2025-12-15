export default function DashboardPreview() {
  return (
    <div className="relative">
      <div
        className="
          transform 
          -rotate-6 
          skew-y-1 
          shadow-2xl 
          bg-white 
          border 
          border-zinc-200 
          rounded-xl
          overflow-hidden
        "
      >
        {/* Top bar */}
        <div className="h-12 border-b border-zinc-200 flex items-center px-4 gap-2 bg-zinc-50">
          <div className="w-3 h-3 rounded-full bg-red-600" />
          <div className="w-3 h-3 rounded-full bg-yellow-300" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div>
              <p className="text-xs text-zinc-500">Company</p>
              <h3 className="font-medium">Acme Technologies</h3>
            </div>
            <div className="text-xs px-2 py-1 rounded bg-zinc-100 text-zinc-600">
              HR Dashboard
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            {["Employees", "Active Projects", "Departments"].map(
              (label, i) => (
                <div
                  key={i}
                  className="border border-zinc-200 rounded-lg p-4"
                >
                  <p className="text-xs text-zinc-500">{label}</p>
                  <p className="text-lg font-semibold mt-1">
                    {i === 0 ? "124" : i === 1 ? "8" : "5"}
                  </p>
                </div>
              )
            )}
          </div>

          {/* Table preview */}
          <div className="border border-zinc-200 rounded-lg overflow-hidden">
            <div className="grid grid-cols-4 bg-zinc-50 text-xs text-zinc-500 px-4 py-2">
              <span>Name</span>
              <span>Role</span>
              <span>Status</span>
              <span>Project</span>
            </div>

            {[
              ["Ananya", "Frontend Dev", "Active", "Portal Revamp"],
              ["Rohit", "Backend Dev", "Benched", "—"],
              ["Meera", "Designer", "Active", "Mobile App"],
            ].map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-4 px-4 py-3 text-sm border-t border-zinc-100"
              >
                {row.map((cell, j) => (
                  <span key={j} className="text-zinc-700">
                    {cell}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Subtle background depth */}
      <div className="absolute inset-0 -z-10 translate-x-6 translate-y-6 rounded-xl bg-zinc-200/40" />
    </div>
  );
}
