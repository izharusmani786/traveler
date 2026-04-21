import React from 'react'
import TripCard from './TripCard';

function TripList({ trips, title, handleOpenTrip, handleRemoveTrip }) {
    if (!trips.length) {
        return (
            <div className="flex flex-col items-center justify-center py-32 px-4 transition-colors">
                {/* Empty State Illustration Circle */}
                <div className="w-24 h-24 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-6 shadow-inner">
                    <span className="text-5xl">☁️</span>
                </div>
                
                <h2 className="text-2xl font-black text-slate-800 dark:text-white tracking-tight">
                    {title} not found
                </h2>
                
                <p className="text-slate-500 dark:text-slate-400 mt-2 max-w-xs text-center leading-relaxed font-medium">
                    Start searching cities and plan your next big adventure to see them here.
                </p>
            </div>
        );
    }

    return (
        <div className="mx-auto space-y-10 transition-colors">
            {/* Header Section */}
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-6">
                <div>
                    <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                        {title}<span className="text-blue-600">.</span>
                    </h1>
                    <div className="flex items-center gap-2 mt-1">
                        <span className="py-0.5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold rounded-md">
                            {trips.length} Destinations
                        </span>
                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                            Ready for exploration
                        </p>
                    </div>
                </div>
            </div>

            {/* Grid - Standardized spacing */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 mx-auto">
                {trips.map((trip) => (
                    <TripCard 
                        key={trip.id} 
                        trip={trip} 
                        OpenTrip={handleOpenTrip} 
                        removeTrip={handleRemoveTrip} 
                    />
                ))}
            </div>
        </div>
    );
}

export default TripList;