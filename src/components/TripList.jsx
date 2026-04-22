import React, { useState, useRef, useEffect } from 'react';
// 1. ADDED BACK THE MISSING IMPORT
import TripCard from './TripCard'; 
import { ChevronDown, ListFilter, Calendar, ArrowDownAz, ArrowUpAz, ThermometerSnowflake, ThermometerSun } from 'lucide-react';

function TripList({ trips, sortBy = "", setSortBy, title, handleOpenTrip, handleRemoveTrip }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const options = [
        { value: 'date-asc', label: 'Earliest Date', icon: <Calendar size={14} /> },
        { value: 'date-desc', label: 'Latest Date', icon: <Calendar size={14} /> },
        { value: 'city-asc', label: 'City (A-Z)', icon: <ArrowDownAz size={14} /> },
        { value: 'city-desc', label: 'City (Z-A)', icon: <ArrowUpAz size={14} /> },
        { value: 'temp-asc', label: 'Temp (Low)', icon: <ThermometerSnowflake size={14} /> },
        { value: 'temp-desc', label: 'Temp (High)', icon: <ThermometerSun size={14} /> },
    ];

    // 2. ENSURE VALUE IS A STRING (Fixes the first error)
    const currentLabel = options.find(opt => opt.value === sortBy)?.label || "Sort Destinations";

    if (!trips.length) {
        return (
            <div className="flex flex-col items-center justify-center py-32 px-4">
                <div className="w-24 h-24 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-6 shadow-inner text-5xl">☁️</div>
                <h2 className="text-2xl font-black text-slate-800 dark:text-white">{title} not found</h2>
                <p className="text-slate-500 dark:text-slate-400 mt-2 max-w-xs text-center font-medium">Start searching cities and plan your next big adventure.</p>
            </div>
        );
    }

    return (
        <div className="mx-auto space-y-10 transition-colors">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-slate-100 dark:border-slate-800 pb-6 mb-8 gap-6">
                <div className="space-y-1">
                    <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                        {title}<span className="text-blue-600">.</span>
                    </h1>
                    <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px] uppercase tracking-widest font-black rounded-md">
                            {trips.length} Destinations
                        </span>
                        <p className="hidden xs:block text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-tighter opacity-70">
                            Ready for exploration
                        </p>
                    </div>
                </div>

                {/* Custom Dropdown - Full width on mobile, auto width on desktop */}
                <div className="relative w-full sm:w-64" ref={dropdownRef}>
                    <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        className="w-full flex items-center justify-between gap-3 px-4 py-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm hover:border-blue-500 transition-all active:scale-[0.98]"
                    >
                        <div className="flex items-center gap-3">
                            <ListFilter size={18} className="text-blue-500" />
                            <span className="text-sm font-bold text-slate-700 dark:text-slate-200">
                                {currentLabel}
                            </span>
                        </div>
                        <ChevronDown size={18} className={`text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Animated Menu - Now with better mobile positioning */}
                    {isOpen && (
                        <div className="absolute left-0 sm:right-0 mt-2 w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl z-[100] overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                            <div className="p-2 space-y-1">
                                {options.map((option) => (
                                    <button
                                        key={option.value}
                                        type="button"
                                        onClick={() => {
                                            setSortBy(option.value);
                                            setIsOpen(false);
                                        }}
                                        className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-bold rounded-xl transition-all
                                            ${sortBy === option.value 
                                                ? 'bg-blue-600 text-white' 
                                                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                                            }`}
                                    >
                                        <span className={sortBy === option.value ? 'text-white' : 'text-blue-500'}>
                                            {option.icon}
                                        </span>
                                        {option.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
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