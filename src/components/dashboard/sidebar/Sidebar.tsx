// components/sidebar/Sidebar.tsx
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-neutral-200 flex flex-col">
      {/* Top */}
      <div className="px-4 py-5 text-sm font-medium">
        Worksuite
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 px-2 space-y-1">
        <SidebarItem label="Projects" />
        <SidebarItem label="Tasks" />
        <SidebarItem label="Workflow" />
        <SidebarItem label="People" />
      </nav>

      {/* Bottom Utilities */}
      <div className="px-2 py-3 border-t border-neutral-200 space-y-1">
        <SidebarItem label="Notifications" />
        <SidebarItem label="Archived" />
        <SidebarItem label="Settings" />
      </div>
    </aside>
  );
}
