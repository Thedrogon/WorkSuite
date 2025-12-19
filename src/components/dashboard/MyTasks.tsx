// components/dashboard/MyTasks.tsx
export default function MyTasks() {
  return (
    <section className="bg-white border border-neutral-200 rounded-lg">
      <header className="px-4 py-3 border-b border-neutral-200 text-sm font-medium">
        My Tasks
      </header>

      <div className="divide-y divide-neutral-200">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="px-4 py-3 flex justify-between text-sm">
            <div>
              <div className="font-medium">Task title {i}</div>
              <div className="text-xs text-neutral-500">Project Name</div>
            </div>
            <div className="text-xs text-neutral-500">Due tomorrow</div>
          </div>
        ))}
      </div>
    </section>
  );
}
