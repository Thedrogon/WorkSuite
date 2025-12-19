// components/topbar/Topbar.tsx
import UserMenu from "./UserMenu";

export default function Topbar() {
  return (
    <header className="h-14 bg-white border-b border-neutral-200 flex items-center justify-between px-6">
      <div className="text-sm font-medium">Dashboard</div>

      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search tasks or projects..."
          className="text-sm px-3 py-1.5 rounded-md border border-neutral-300 focus:outline-none focus:ring-1 focus:ring-neutral-400"
        />

        <button className="text-sm px-3 py-1.5 rounded-md border border-neutral-300 hover:bg-neutral-100">
          Create Task
        </button>

        <UserMenu />
      </div>
    </header>
  );
}
