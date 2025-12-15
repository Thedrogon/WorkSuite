import DashboardPreview from "./DashboardPreview";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left content */}
        <div className="space-y-6">
          <h1 className="text-4xl lg:text-5xl font-semibold leading-tight tracking-tight">
            Manage people,
            <br />
            projects, and growth
            <br />
            <span className="text-zinc-500">without the noise.</span>
          </h1>

          <div className="flex gap-4 pt-4">
            <button className="px-6 py-3 rounded-md bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-700 transition cursor-pointer">
              <a href="/create">Create company account</a>
            </button>

            <button className="px-6 py-3 cursor-pointer rounded-md border border-zinc-300 text-sm font-medium text-zinc-700 hover:border-zinc-400 transition">
              <a href="">
                View demo
              </a>
            </button>
          </div>
        </div>

        {/* Right visual */}
        <DashboardPreview />
      </div>
    </section>
  );
}
