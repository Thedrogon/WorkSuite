// components/dashboard/ActivityFeed.tsx
export default function ActivityFeed() {
  return (
    <aside className="bg-white border border-neutral-200 rounded-lg h-fit">
      <header className="px-4 py-3 border-b border-neutral-200 text-sm font-medium">
        Activity
      </header>

      <ul className="divide-y divide-neutral-200 text-sm">
        {[1, 2, 3, 4].map((i) => (
          <li key={i} className="px-4 py-3 text-neutral-600">
            Task updated · 2h ago
          </li>
        ))}
      </ul>
    </aside>
  );
}
