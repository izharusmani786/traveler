import React from 'react';

const Skeleton = ({ className }) => (
    <div className={`animate-pulse bg-slate-200 dark:bg-slate-800 rounded-2xl ${className}`} />
);

const TripDetailsSkeleton = () => {
    return (
        <div className="space-y-8">
        
        {/* 🌄 HERO SECTION SKELETON */}
        <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden rounded-3xl">
            <Skeleton className="h-full w-full rounded-3xl" />
            {/* Overlay Content Placeholder */}
            <div className="absolute bottom-8 left-8 space-y-4 w-full">
            <Skeleton className="h-10 w-1/3 bg-slate-300 dark:bg-slate-700" />
            <div className="flex gap-4">
                <Skeleton className="h-5 w-24 bg-slate-300 dark:bg-slate-700" />
                <Skeleton className="h-5 w-24 bg-slate-300 dark:bg-slate-700" />
            </div>
            </div>
        </div>

        {/* 📊 MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* LEFT SIDE (Main Info) */}
            <div className="lg:col-span-2 space-y-6">
            
            {/* Weather Card Skeleton */}
            <div className="p-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl">
                <div className="flex justify-between mb-6">
                <Skeleton className="h-8 w-32" />
                <Skeleton className="h-8 w-8 rounded-full" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map(i => <Skeleton key={i} className="h-20 w-full" />)}
                </div>
            </div>

            {/* Attractions Section Skeleton */}
            <div className="space-y-4">
                <Skeleton className="h-8 w-40" />
                {[1, 2, 3].map(i => (
                <div key={i} className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
                    <Skeleton className="w-24 h-24 md:w-32 md:h-32 rounded-xl shrink-0" />
                    <div className="flex-1 space-y-3 py-2">
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    </div>
                </div>
                ))}
            </div>
            </div>

            {/* RIGHT SIDE (Sidebar) */}
            <div className="space-y-6">
            
            {/* Country Info Card Skeleton */}
            <div className="p-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl space-y-4">
                <Skeleton className="h-32 w-full rounded-xl" /> {/* Flag/Map area */}
                <Skeleton className="h-6 w-1/2" />
                <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
                </div>
            </div>

            {/* Location/Map Card Skeleton */}
            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl overflow-hidden">
                <Skeleton className="h-[250px] w-full rounded-none" />
                <div className="p-4">
                <Skeleton className="h-4 w-1/2" />
                </div>
            </div>

            </div>
        </div>
        </div>
    );
};

export default TripDetailsSkeleton;