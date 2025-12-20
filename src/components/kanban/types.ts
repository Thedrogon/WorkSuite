export type KanbanColumn = {
  id: string;
  name: string;
};

export type KanbanItem = {
  id: string;
  title: string;
  columnId: string;
};
