import React, { useState } from "react";
import leafLogo from "../assets/leaf.png";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-slate-50 border-b border-slate-200 py-5 px-6 md:px-16 shadow-sm relative">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src={leafLogo}
            alt="DevTrajectory Leaf Logo"
            className="w-9 h-9 object-contain"
          />
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight flex items-center">
              <span className="text-black">Dev</span>
              <span className="text-emerald-700">Trajectory</span>
            </h1>
            <p className="text-xs md:text-sm text-slate-500 mt-0.5 hidden md:block">
              AI-Powered Career & Learning Paths for Software Professionals
            </p>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-8">
          <Link
            to="/login"
            className="hover:cursor-pointer text-black font-medium text-base hover:text-emerald-700 transition-colors"
          >
            Log in
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden text-black focus:outline-none p-2"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="sm:hidden absolute top-full left-0 w-full bg-slate-50 border-b border-slate-200 py-4 px-6 flex flex-col gap-4 shadow-md z-50">
          <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className="text-black font-medium text-base py-2 text-center"
          >
            Log in
          </Link>
        </div>
      )}
    </header>
  );
}