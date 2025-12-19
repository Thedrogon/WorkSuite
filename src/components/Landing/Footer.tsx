export default function Footer() {
  return (
    <footer className="bg-zinc-50 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Brand */}
          <div>
            <div className="text-lg font-semibold tracking-tight mb-4">
              Work<span className="text-zinc-500">Suite</span>
            </div>
            <p className="text-sm text-zinc-600 max-w-xs">
              A modern workspace for managing people and projects with
              clarity and restraint.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-medium mb-4">Product</h4>
            <ul className="space-y-3 text-sm text-zinc-600">
              <li className="hover:text-zinc-900 cursor-pointer">Features</li>
              <li className="hover:text-zinc-900 cursor-pointer">Security</li>
              <li className="hover:text-zinc-900 cursor-pointer">Roadmap</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-medium mb-4">WorkSuite</h4>
            <ul className="space-y-3 text-sm text-zinc-600">
              <li className="hover:text-zinc-900 cursor-pointer">About</li>
              <li className="hover:text-zinc-900 cursor-pointer">Contributions</li>
              <li className="hover:text-zinc-900 cursor-pointer">github</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-medium mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-zinc-600">
              <li className="hover:text-zinc-900 cursor-pointer">Privacy</li>
              <li className="hover:text-zinc-900 cursor-pointer">Terms</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-zinc-200 text-sm text-zinc-700 flex justify-between flex-wrap gap-4">
          <span>© {new Date().getFullYear()} WorkSuit. All rights reserved.</span>
          <span>Built for modern teams</span>
        </div>
      </div>
    </footer>
  );
}
