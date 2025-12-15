export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <a href="/" className="text-[26px] font-semibold tracking-tight">
          Work<span className="text-zinc-500">Suite</span>
        </a>

        {/* Actions */}
        <nav className="flex items-center gap-10">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="
    flex items-center gap-2
    px-3 py-1.5
    rounded-md
    border border-zinc-200
    bg-zinc-50
    text-sm text-zinc-700
    hover:bg-zinc-100
    transition
  "
          >
            {/* GitHub icon */}
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-4 w-4 fill-zinc-700"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.082-.729.082-.729 1.205.085 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.776.418-1.305.76-1.605-2.665-.305-5.467-1.332-5.467-5.93 0-1.31.47-2.38 1.235-3.22-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.51 11.51 0 013.003-.404c1.018.005 2.042.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.653 1.652.242 2.873.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.624-5.48 5.92.43.37.823 1.1.823 2.22 0 1.604-.015 2.896-.015 3.293 0 .322.216.694.825.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
            </svg>

            <span className="font-medium">Star</span>
          </a>

          <a
            href="#"
            className="text-[16px] text-zinc-600 font-semibold hover:text-zinc-900  transition"
          >
            Login
          </a>

          <button className="text-sm  font-medium px-4 py-2 rounded-md bg-zinc-900 text-white hover:bg-zinc-700">
            <a href="">Explore WorkSuite</a>
          </button>
        </nav>
      </div>
    </header>
  );
}
