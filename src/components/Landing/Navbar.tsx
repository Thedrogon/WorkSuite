import { Link } from "react-router-dom";
import Github from "../UI/Github";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <a href="/" className="text-[28px] font-semibold tracking-tight">
          Work<span className="text-zinc-500">Suite</span>
        </a>

        {/* Actions */}
        <nav className="flex items-center gap-10">
          <Github/>

          <Link
            to="/signin"
            className="text-[16px] text-zinc-600 font-semibold hover:text-zinc-900  transition"
          >
            Login
          </Link>

          <button className="text-sm  font-medium px-4 py-2 rounded-md bg-zinc-900 text-white hover:bg-zinc-700 sm:hidden md:inline-block">
            <a href="">Explore WorkSuite</a>
          </button>
        </nav>
      </div>
    </header>
  );
}
