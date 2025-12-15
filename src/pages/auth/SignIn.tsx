//import React from "react";

const SignIn = () => {
  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white border border-neutral-200 rounded-xl p-8">
        {/* Brand */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-neutral-900">
            Welcome back to WorkSuit
          </h1>
          <p className="text-sm text-neutral-600 mt-1">
            Sign in to manage your organization.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">
              Work email
            </label>
            <input
              type="email"
              placeholder="you@company.com"
              className="w-full rounded-lg border border-neutral-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full rounded-lg border border-neutral-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-neutral-600">
              <input
                type="checkbox"
                className="rounded border-neutral-300"
              />
              Remember me
            </label>

            <button
              type="button"
              className="text-neutral-900 font-medium hover:underline"
            >
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-neutral-900 text-white rounded-lg py-2.5 text-sm font-medium hover:bg-neutral-800 transition"
          >
            Sign in
          </button>
        </form>

        {/* Footer */}
        <p className="text-sm text-neutral-600 mt-6 text-center">
          New to WorkSuit?{" "}
          <span className="text-neutral-900 font-medium cursor-pointer hover:underline">
            Create an account
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
