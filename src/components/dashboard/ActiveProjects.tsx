// components/dashboard/ActiveProjects.tsx
export default function ActiveProjects() {
  return (
    <section className="bg-white border border-neutral-200 rounded-lg">
      <header className="px-4 py-3 border-b border-neutral-200 text-sm font-medium">
        Active Projects
      </header>

      <div className="divide-y divide-neutral-200">
        {[1, 2, 3].map((i) => (
          <div key={i} className="px-4 py-3 text-sm">
            <div className="flex justify-between mb-1">
              <span className="font-medium">Project {i}</span>
              <span className="text-xs text-neutral-500">60%</span>
            </div>
            <div className="h-1 bg-neutral-200 rounded">
              <div className="h-1 bg-neutral-400 rounded w-3/5" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
