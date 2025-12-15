function EmployeeDemo() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-medium">Employee View (Demo)</h2>

      <div className="border border-zinc-200 rounded-lg p-6">
        <p className="text-sm text-zinc-500">Assigned Project</p>
        <h3 className="font-medium mt-1">Mobile App Redesign</h3>

        <p className="text-sm text-zinc-600 mt-4">
          You are currently assigned as a UI Engineer on this project.
          All project details and updates appear here.
        </p>
      </div>
    </div>
  );
}
export default EmployeeDemo;