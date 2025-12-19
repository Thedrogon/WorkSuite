// pages/Dashboard.tsx
import StatsStrip from "../../components/dashboard/StatsStrip";
import MyTasks from "../../components/dashboard/Mytasks";
import ActiveProjects from "../../components/dashboard/ActiveProjects";
import ActivityFeed from "../../components/dashboard/ActivityFeed";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <StatsStrip />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <MyTasks />
          <ActiveProjects />
        </div>

        <ActivityFeed />
      </div>
    </div>
  );
}
