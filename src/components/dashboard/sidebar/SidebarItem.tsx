// components/sidebar/SidebarItem.tsx
type Props = {
  label: string;
  active?: boolean;
};

export default function SidebarItem({ label, active }: Props) {
  return (
    <div
      className={`px-3 py-2 rounded-md text-sm cursor-pointer
        ${active ? "bg-neutral-100 font-medium" : "text-neutral-600 hover:bg-neutral-100"}
      `}
    >
      {label}
    </div>
  );
}
