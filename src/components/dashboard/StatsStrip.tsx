// components/dashboard/StatsStrip.tsx
const stats = [
  { label: "Due Today", value: 4 },
  { label: "Overdue", value: 2 },
  { label: "In Progress", value: 7 },
  { label: "Completed This Week", value: 12 },
];

export default function StatsStrip() {
  return (
    <div className="bg-white border border-neutral-200 rounded-lg px-4 py-3 flex justify-between">
      {stats.map((stat) => (
        <div key={stat.label}>
          <div className="text-lg font-semibold">{stat.value}</div>
          <div className="text-xs text-neutral-500">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
