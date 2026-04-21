import React from 'react';

const Skeleton = ({ className }) => (
    <div className={`animate-pulse bg-slate-200 dark:bg-slate-800 rounded-xl ${className}`} />
);

const TripsSkeleton = () => {
    return (
        <div className="min-h-screen">
        {/* Page Title Skeleton */}
        <div className="mb-8">
            <Skeleton className="h-10 w-48 mb-2" />
            <Skeleton className="h-4 w-64" />
        </div>

        {/* Grid Layout - Matching your TripList structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
            <div 
                key={i} 
                className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-100 dark:border-slate-800 shadow-sm space-y-4"
            >
                {/* Image Placeholder */}
                <Skeleton className="w-full h-48 rounded-2xl" />

                <div className="space-y-3">
                    {/* Destination & Country */}
                    <div className="flex justify-between items-start">
                        <div className="space-y-2 flex-1">
                            <Skeleton className="h-6 w-3/4" />
                            <Skeleton className="h-4 w-1/2" />
                        </div>
                        <Skeleton className="h-8 w-8 rounded-lg" /> {/* Heart Icon */}
                    </div>

                    {/* Date & Details Row */}
                    <div className="flex items-center gap-4 pt-2">
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-4 w-24" />
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4">
                        <Skeleton className="h-11 flex-1 rounded-xl" />
                        <Skeleton className="h-11 w-12 rounded-xl" />
                    </div>
                </div>
            </div>
            ))}
        </div>
        </div>
    );
};

export default TripsSkeleton;