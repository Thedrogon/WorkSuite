'use client';

import { createContext, useContext } from 'react';
import type { KanbanColumn, KanbanItem } from './types';

type KanbanContextType = {
  columns: KanbanColumn[];
  items: KanbanItem[];
  setItems: (items: KanbanItem[]) => void;
};

export const KanbanContext = createContext<KanbanContextType | null>(null);

export const useKanban = () => {
  const ctx = useContext(KanbanContext);
  if (!ctx) throw new Error('useKanban must be used inside KanbanProvider');
  return ctx;
};
