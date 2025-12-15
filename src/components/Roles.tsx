export default function Roles() {
  return (
    <section className="bg-white border-y border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-2xl font-semibold tracking-tight mb-12">
          Designed for both sides of the organization
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* HR / Admin */}
          <div className="border border-zinc-300 rounded-xl p-8">
            <h3 className="font-medium text-lg mb-3">HR & Admins</h3>
            <p className="text-zinc-600 mb-6">
              Manage employees, assign projects, and keep accurate records
              without juggling spreadsheets or scattered tools.
            </p>

            <ul className="space-y-3 text-sm text-zinc-700">
              <li>• Create and manage employee profiles</li>
              <li>• Track project status and staffing</li>
              <li>• Control access and permissions</li>
              <li>• Maintain a single source of truth</li>
            </ul>
          </div>

          {/* Employees */}
          <div className="border border-zinc-300 rounded-xl p-8">
            <h3 className="font-medium text-lg mb-3">Employees</h3>
            <p className="text-zinc-600 mb-6">
              Stay informed about your role, projects, and company context
              without unnecessary administrative noise.
            </p>

            <ul className="space-y-3 text-sm text-zinc-700">
              <li>• View assigned projects</li>
              <li>• Understand role and status clearly</li>
              <li>• Access company information in one place</li>
              <li>• No clutter, no distractions</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
