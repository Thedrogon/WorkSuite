// pages/Dashboard.tsx
import StatsStrip from "./StatsStrip";
import MyTasks from "./MyTasks";
import ActiveProjects from "./ActiveProjects";
import ActivityFeed from "./ActivityFeed";
import Kanban from "../kanban/KanbanSide";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <StatsStrip />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <MyTasks />
          <Kanban/>
          <ActiveProjects />
        </div>

        <ActivityFeed />
      </div>
    </div>
  );
}
