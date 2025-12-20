'use client'

import { useDroppable } from '@dnd-kit/core';

type Props = {
  id: string;
  children: React.ReactNode;
};

export const KanbanBoard = ({ id, children }: Props) => {
  const { setNodeRef, isOver } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      style={{
        width: 280,
        background: '#f9fafb',
        border: '1px solid #e5e7eb',
        borderRadius: 8,
        padding: 8,
        outline: isOver ? '2px solid #6366f1' : 'none',
      }}
    >
      {children}
    </div>
  );
};
