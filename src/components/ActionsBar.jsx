import React from 'react'
import { Calendar, Info, Sparkles } from 'lucide-react';

function ActionsBar({ city, popUpOoen }) {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-between bg-white dark:bg-slate-900 p-4 px-6 rounded-[28px] shadow-sm border border-slate-100 dark:border-slate-800 transition-all">
            
            {/* Left Side: Contextual Message */}
            <div className="flex items-center gap-3 mb-4 sm:mb-0">
                <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                    <Sparkles size={18} className="text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex flex-col pr-5">
                    <span className="text-sm font-black text-slate-900 dark:text-white leading-none mb-1">
                        Ready to explore {city}?
                    </span>
                    <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">
                        Save this destination to your planner
                    </span>
                </div>
            </div>

            {/* Right Side: Action Button */}
            <div className="flex items-center w-full sm:w-auto">
                <button
                    onClick={popUpOoen}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 rounded-2xl bg-slate-900 dark:bg-blue-600 text-white font-bold shadow-lg shadow-slate-200 dark:shadow-blue-900/20 hover:bg-blue-600 dark:hover:bg-blue-500 transition-all active:scale-95 group"
                >
                    <Calendar size={18} className="group-hover:rotate-12 transition-transform" />
                    <span className="text-sm">Schedule Trip</span>
                </button>
            </div>
        </div>
    )
}

export default ActionsBar