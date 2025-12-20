'use client'

import { SortableContext } from '@dnd-kit/sortable';
import { useKanban } from './KanbanContext';

type Props = {
  columnId: string;
  title: string;
  children: React.ReactNode;
};

export const KanbanColumn = ({ columnId, title, children }: Props) => {
  const { items } = useKanban();
  const columnItems = items.filter(i => i.columnId === columnId);

  return (
    <>
      <h4 style={{ marginBottom: 8 }}>{title}</h4>
      <SortableContext items={columnItems.map(i => i.id)}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {children}
        </div>
      </SortableContext>
    </>
  );
};
