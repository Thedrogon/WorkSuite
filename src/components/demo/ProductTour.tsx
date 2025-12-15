import { useState } from "react";
import HRDemo from "./HRDemo";
import EmployeeDemo from "./EmployeeDemo";

export default function ProductTour() {
  const [role, setRole] = useState<"hr" | "employee">("hr");

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Header */}
      <header className="bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <h1 className="text-lg font-medium">
            Explore <span className="text-zinc-500">WorkSuit</span>
          </h1>

          <div className="flex gap-2">
            <button
              onClick={() => setRole("hr")}
              className={`px-3 py-1.5 text-sm rounded-md border transition ${
                role === "hr"
                  ? "bg-zinc-900 text-white border-zinc-900"
                  : "border-zinc-300 text-zinc-700"
              }`}
            >
              HR View
            </button>

            <button
              onClick={() => setRole("employee")}
              className={`px-3 py-1.5 text-sm rounded-md border transition ${
                role === "employee"
                  ? "bg-zinc-900 text-white border-zinc-900"
                  : "border-zinc-300 text-zinc-700"
              }`}
            >
              Employee View
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Sidebar */}
        <aside className="border border-zinc-200 rounded-xl bg-white p-4 space-y-4 text-sm text-zinc-600">
          <p className="font-medium text-zinc-900">Navigation</p>
          <p className="opacity-60">Dashboard</p>
          <p className="opacity-60">Employees</p>
          <p className="opacity-60">Projects</p>
          <p className="opacity-60">Settings</p>
        </aside>

        {/* Main */}
        <section className="lg:col-span-3 border border-zinc-200 rounded-xl bg-white p-6">
          {role === "hr" ? <HRDemo /> : <EmployeeDemo />}
        </section>
      </main>
    </div>
  );
}
