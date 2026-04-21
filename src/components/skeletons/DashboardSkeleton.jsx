import React from 'react';

// A reusable base for internal skeleton parts
const Skeleton = ({ className }) => (
  <div className={`animate-pulse bg-slate-200 dark:bg-slate-800 rounded-xl ${className}`} />
);

const HomeSkeleton = () => {
  return (
    <div className="min-h-screen p-1">
      {/* 1. Header Section Skeleton */}
      <header className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div className="space-y-3">
          <Skeleton className="h-9 w-64" /> {/* Welcome Text */}
          <Skeleton className="h-5 w-40" /> {/* Subtitle */}
        </div>
        
        {/* Weather Widget Skeleton */}
        <div className="flex items-center gap-3 bg-white dark:bg-slate-900 p-2 px-4 rounded-2xl border border-slate-100 dark:border-slate-800 w-64">
          <Skeleton className="w-10 h-10 rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-3 w-20" />
            <Skeleton className="h-4 w-32" />
          </div>
        </div>
      </header>

      {/* 2. Quick Stats Grid Skeleton (4 Cards) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 flex items-center gap-4">
            <Skeleton className="w-12 h-12 rounded-xl" />
            <div className="space-y-2 flex-1">
              <Skeleton className="h-7 w-12" />
              <Skeleton className="h-3 w-full" />
            </div>
          </div>
        ))}
      </div>

      {/* 3. Main Content Area Skeleton */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        
        {/* Left Column: Attractions (List of items) */}
        <div className="xl:col-span-2 space-y-4">
          <Skeleton className="h-8 w-48 mb-4" /> {/* Section Title */}
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
              <Skeleton className="w-24 h-24 md:w-32 md:h-32 rounded-xl shrink-0" />
              <div className="flex-1 space-y-3 py-2">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: Sidebar Widgets */}
        <div className="space-y-6">
          {/* Active Trip Widget Skeleton */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-100 dark:border-slate-800 space-y-4">
            <Skeleton className="h-4 w-24 rounded-md" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-4 w-1/3" />
            <Skeleton className="h-12 w-full rounded-xl mt-4" />
          </div>

          {/* Travel Tip Skeleton */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-100 dark:border-slate-800 space-y-3">
            <Skeleton className="h-4 w-28" />
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-2/3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSkeleton;