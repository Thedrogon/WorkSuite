import {
  KanbanProvider,
  KanbanBoard,
  KanbanColumn,
  KanbanCard,
} from './';

const columns = [
  { id: 'todo', name: 'Planned' },
  { id: 'doing', name: 'In Progress' },
  { id: 'done', name: 'Done' },
];

const initialItems = [
  { id: '1', title: 'Design auth flow', columnId: 'todo' },
  { id: '2', title: 'Build API', columnId: 'doing' },
  { id: '3', title: 'Ship v1', columnId: 'done' },
];

export default function Kanban() {
  return (
    <KanbanProvider columns={columns} initialItems={initialItems}>
      <div style={{ display: 'flex', gap: 16 }}>
        {columns.map(col => (
          <KanbanBoard key={col.id} id={col.id}>
            <KanbanColumn columnId={col.id} title={col.name}>
              {initialItems
                .filter(i => i.columnId === col.id)
                .map(item => (
                  <KanbanCard
                    key={item.id}
                    id={item.id}
                    title={item.title}
                  />
                ))}
            </KanbanColumn>
          </KanbanBoard>
        ))}
      </div>
    </KanbanProvider>
  );
}
