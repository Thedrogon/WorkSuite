'use client'

import { useDroppable } from '@dnd-kit/core';
import type { ReactNode } from 'react';

type Props = {
  id: string;
  children: ReactNode;
};

export const KanbanBoard = ({ id, children }: Props) => {
  const { setNodeRef, isOver } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      className='w-70 p-8 bg-[#f9fafb] rounded-lg border-solid border-[#e5e7eb] border-2'
      style={{
        outline: isOver ? '2px solid #6366f1' : 'none',
      }}
    >
      {children}
    </div>
  );
};
