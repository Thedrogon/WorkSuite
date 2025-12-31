export default function Notfound() {
  return (
    <div className="min-h-screen bg-zinc-50 flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center">
        
        {/* Animated SVG */}
        <div className="flex justify-center mb-10">
          <svg
            width="360"
            height="180"
            viewBox="0 0 360 180"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-zinc-300"
          >
            {/* Frame */}
            <rect
              x="20"
              y="20"
              width="320"
              height="140"
              rx="12"
              stroke="currentColor"
              strokeWidth="1.5"
            />

            {/* Left sidebar */}
            <rect
              x="36"
              y="36"
              width="60"
              height="108"
              rx="6"
              stroke="currentColor"
              strokeWidth="1.2"
            />

            {/* Main panels */}
            <rect
              x="110"
              y="40"
              width="210"
              height="24"
              rx="4"
              stroke="currentColor"
              strokeWidth="1.2"
              className="animate-pulse-slow"
            />
            <rect
              x="110"
              y="76"
              width="210"
              height="20"
              rx="4"
              stroke="currentColor"
              strokeWidth="1.2"
              className="animate-pulse-slower"
            />
            <rect
              x="110"
              y="108"
              width="140"
              height="20"
              rx="4"
              stroke="currentColor"
              strokeWidth="1.2"
              className="animate-pulse-slowest"
            />

            {/* Floating cursor */}
            <circle
              cx="260"
              cy="120"
              r="4"
              fill="currentColor"
              className="animate-cursor"
            />
          </svg>
        </div>

        {/* Text */}
        <h1 className="text-2xl font-semibold tracking-tight mb-3">
          This page doesn’t exist
        </h1>

        <p className="text-zinc-600 max-w-md mx-auto mb-8">
          The page you’re looking for might have been moved, renamed,
          or never existed in the first place.
        </p>

        {/* Actions */}
        <div className="flex justify-center gap-4">
          <a
            href="/"
            className="px-5 py-2.5 rounded-md bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-800 transition"
          >
            Go home
          </a>

          <a
            href="/explore"
            className="px-5 py-2.5 rounded-md border border-zinc-300 text-sm font-medium text-zinc-700 hover:border-zinc-400 transition"
          >
            Explore WorkSuit
          </a>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes pulseSlow {
          0%, 100% { opacity: 0.4 }
          50% { opacity: 0.8 }
        }

        @keyframes cursorFloat {
          0% { transform: translate(0, 0) }
          50% { transform: translate(-6px, -4px) }
          100% { transform: translate(0, 0) }
        }

        .animate-pulse-slow {
          animation: pulseSlow 3.5s ease-in-out infinite;
        }

        .animate-pulse-slower {
          animation: pulseSlow 5s ease-in-out infinite;
        }

        .animate-pulse-slowest {
          animation: pulseSlow 6.5s ease-in-out infinite;
        }

        .animate-cursor {
          animation: cursorFloat 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
