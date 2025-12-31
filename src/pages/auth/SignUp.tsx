//import React from "react";

import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white border border-neutral-200 rounded-xl p-8">
        {/* Brand */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-neutral-900">
            Create your Work<span className="text-neutral-500">Suite</span>{" "}
            account
          </h1>
          <p className="text-sm text-neutral-600 mt-1">
            Set up your company workspace in minutes.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">
              Company name
            </label>
            <input
              type="text"
              required
              placeholder="Acme Inc."
              className="w-full rounded-lg border border-neutral-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">
              Work email
            </label>
            <input
              type="email"
              required
              placeholder="admin@company.com"
              className="w-full rounded-lg border border-neutral-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">
              Designation type
            </label>

            <select
              className="w-full rounded-lg border border-neutral-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 appearance-none text-neutral-500"
              required
            >
              <option value="select designation type" disabled selected>  
                Select designation type
              </option>
              <option  value="someOption">Human Resource</option>
              <option value="otherOption">Engineering</option>
              <option value="anotherOption">Management</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">
              Password
            </label>
            <input
              type="password"
              required
              placeholder="Minimum 8 characters"
              className="w-full rounded-lg border border-neutral-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">
              Confirm password
            </label>
            <input
              type="password"
              required
              placeholder="Re-enter password"
              className="w-full rounded-lg border border-neutral-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900"
            />
          </div>

          <p className="text-xs text-neutral-500">
            By creating an account, you agree to WorkSuite’s{" "}
            <span className="text-blue-700">Terms and Privacy Policy</span> .
          </p>

          <button
            type="submit"
            className="w-full bg-neutral-900 text-white rounded-lg py-2.5 text-sm font-medium hover:bg-neutral-800 transition"
          >
            Create account
          </button>
        </form>

        {/* Footer */}
        <p className="text-sm text-neutral-600 mt-6 text-center">
          Already have an account?{" "}
          <Link
            to="/signin"
            className="text-neutral-900 font-medium cursor-pointer hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
