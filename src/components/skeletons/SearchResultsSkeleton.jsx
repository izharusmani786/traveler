import React from 'react';

const Skeleton = ({ className }) => (
    <div className={`animate-pulse bg-slate-200 dark:bg-slate-800 rounded-2xl ${className}`} />
);

const SearchResultsSkeleton = () => {
    return (
        <div className="mx-auto space-y-10">
        {/* 1. Search Box Skeleton */}
        <div className="flex justify-center">
            <Skeleton className="h-14 w-full max-w-4xl rounded-2xl" />
        </div>

        <div className="space-y-8">
            {/* 2. Header Skeleton (LocationHeader) */}
            <div className="flex items-center gap-4">
            <Skeleton className="h-16 w-16 rounded-2xl" /> {/* Flag/Icon */}
            <div className="space-y-2">
                <Skeleton className="h-8 w-48" />
                <Skeleton className="h-4 w-32" />
            </div>
            </div>

            {/* 3. Content Grid (Two large cards) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Weather Card Placeholder */}
            <div className="h-[300px] p-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl space-y-6">
                <div className="flex justify-between items-center">
                <Skeleton className="h-6 w-24" />
                <Skeleton className="h-10 w-10 rounded-full" />
                </div>
                <Skeleton className="h-20 w-32 mx-auto" />
                <div className="grid grid-cols-3 gap-2">
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-12 w-full" />
                </div>
            </div>

            {/* Country Card Placeholder */}
            <div className="h-[300px] p-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl space-y-4">
                <Skeleton className="h-32 w-full rounded-xl" />
                <Skeleton className="h-6 w-3/4" />
                <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                </div>
            </div>
            </div>

            {/* 4. Actions Bar Placeholder */}
            <div className="flex flex-col md:flex-row gap-4 items-center">
                <Skeleton className="h-20 flex-1 rounded-2xl" />
                <Skeleton className="h-14 w-full md:w-40 rounded-xl" />
            </div>
        </div>
        </div>
    );
};

export default SearchResultsSkeleton;