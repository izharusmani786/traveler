const SkeletonLoader = () => (
    <div className="w-full h-full min-h-[300px] p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
        <div className="animate-pulse space-y-6">
            {/* Mimic Header */}
            <div className="flex justify-between items-start">
                <div className="h-8 w-32 bg-slate-200 dark:bg-slate-800 rounded-lg"></div>
                <div className="h-12 w-12 bg-slate-200 dark:bg-slate-800 rounded-full"></div>
            </div>
            
            {/* Mimic Main Data */}
            <div className="h-16 w-24 bg-slate-200 dark:bg-slate-800 rounded-xl"></div>
            
            {/* Mimic List/Details */}
            <div className="space-y-3">
                <div className="h-4 w-full bg-slate-200 dark:bg-slate-800 rounded"></div>
                <div className="h-4 w-5/6 bg-slate-200 dark:bg-slate-800 rounded"></div>
                <div className="h-4 w-4/6 bg-slate-200 dark:bg-slate-800 rounded"></div>
            </div>
        </div>
    </div>
);

export default SkeletonLoader