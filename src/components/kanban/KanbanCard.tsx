'use client'

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

type Props = {
  id: string;
  title: string;
};

export const KanbanCard = ({ id, title }: Props) => {
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
        padding: 12,
        borderRadius: 6,
        background: '#ffffff',
        border: '1px solid #e5e7eb',
        cursor: 'grab',
        opacity: isDragging ? 0.4 : 1,
      }}
    >
      {title}
    </div>
  );
};
