// components/layout/DashboardLayout.tsx
import Dashboard from "../../pages/dashboard/Dashboard";
import Sidebar from "./sidebar/Sidebar";
import Topbar from "./topbar/Topbar";

export default function DashboardLayout() {
  return (
    <div className="flex h-screen bg-neutral-50 text-neutral-900">
      <Sidebar />

      <div className="flex flex-col flex-1 overflow-hidden">
        <Topbar />

        <main className="flex-1 overflow-y-auto px-6 py-4">
          <Dashboard/>
        </main>
      </div>
    </div>
  );
}
