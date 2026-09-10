import React from 'react';

export default function Header() {
  return (
    <header className="w-full bg-slate-900 border-b border-slate-800 py-6 px-8 shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            DevTrajectory
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            AI-Powered Career & Learning Paths for Software Professionals
          </p>
        </div>
      </div>
    </header>
  );
}