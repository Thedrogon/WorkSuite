'use client'

import {
  DndContext,
  type DragEndEvent,
  type DragOverEvent,
  closestCenter,
  MouseSensor,
  TouchSensor,
  KeyboardSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';
import { useState } from 'react';
import { KanbanContext } from './KanbanContext';
import type { KanbanColumn, KanbanItem } from './types';

type Props = {
  columns: KanbanColumn[];
  initialItems: KanbanItem[];
  children: React.ReactNode;
};

export const KanbanProvider = ({ columns, initialItems, children }: Props) => {
  const [items, setItems] = useState<KanbanItem[]>(initialItems);

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor)
  );

  const onDragOver = ({ active, over }: DragOverEvent) => {
    if (!over) return;

    const activeItem = items.find(i => i.id === active.id);
    if (!activeItem) return;

    const overItem = items.find(i => i.id === over.id);
    const overColumn =
      overItem?.columnId ||
      columns.find(col => col.id === over.id)?.id;

    if (!overColumn || activeItem.columnId === overColumn) return;

    setItems(prev =>
      prev.map(item =>
        item.id === activeItem.id
          ? { ...item, columnId: overColumn }
          : item
      )
    );
  };

  const onDragEnd = ({ active, over }: DragEndEvent) => {
    if (!over || active.id === over.id) return;

    const oldIndex = items.findIndex(i => i.id === active.id);
    const newIndex = items.findIndex(i => i.id === over.id);

    if (oldIndex !== -1 && newIndex !== -1) {
      setItems(arrayMove(items, oldIndex, newIndex));
    }
  };

  return (
    <KanbanContext.Provider value={{ columns, items, setItems }}>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragOver={onDragOver}
        onDragEnd={onDragEnd}
      >
        {children}
      </DndContext>
    </KanbanContext.Provider>
  );
};
