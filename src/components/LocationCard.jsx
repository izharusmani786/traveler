import React from 'react';
import { Navigation, Globe } from 'lucide-react';

function LocationCard({ lat, lon }) {
    return (
        <div className="bg-white dark:bg-slate-900 p-5 rounded-[24px] shadow-sm border border-slate-100 dark:border-slate-800 transition-all group overflow-hidden relative">
            {/* Background Decorative Icon */}
            <Globe className="absolute -right-4 -bottom-4 w-24 h-24 text-slate-50 dark:text-slate-800/50 group-hover:rotate-12 transition-transform duration-500" />

            <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                    <div className="p-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl text-indigo-600 dark:text-indigo-400">
                        <Navigation size={18} strokeWidth={2.5} />
                    </div>
                    <h3 className="font-black text-slate-800 dark:text-white tracking-tight">
                        Coordinates
                    </h3>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700/50">
                        <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">
                            Latitude
                        </p>
                        <p className="text-sm font-bold text-slate-700 dark:text-slate-200 tabular-nums">
                            {Number(lat).toFixed(4)}°
                        </p>
                    </div>

                    <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700/50">
                        <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">
                            Longitude
                        </p>
                        <p className="text-sm font-bold text-slate-700 dark:text-slate-200 tabular-nums">
                            {Number(lon).toFixed(4)}°
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LocationCard;