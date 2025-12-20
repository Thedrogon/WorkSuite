// components/layout/DashboardLayout.tsx
import Dashboard from "../../components/dashboard/Dashboard";
import Sidebar from "../../components/dashboard/sidebar/Sidebar";
import Topbar from "../../components/dashboard/topbar/Topbar";

export default function DashboardLayout() {
  return (
    <div className="flex h-screen bg-neutral-50 text-neutral-900">
      <Sidebar />

      <div className="flex flex-col flex-1 overflow-hidden">
        <Topbar />

        <main className="flex-1 overflow-y-auto px-6 py-4">
          <Dashboard />
        </main>
      </div>
    </div>
  );
}
