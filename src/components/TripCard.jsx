import React from 'react';
import { Trash2, MapPin, ArrowRight, Calendar, Heart, CloudSun } from "lucide-react";
import { toast } from "react-toastify";
import { useDispatch } from 'react-redux';
import { toggleTrip } from "../features/trips/tripsSlice";

function TripCard({ trip, OpenTrip, removeTrip }) {
    const dispatch = useDispatch();

    const formatDate = (dateString) => {
        if (!dateString) return null;
        return new Date(dateString).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
        });
    };

    const isFavorite = trip.isFavorite;

    const handleToggleFavorite = (e) => {
        e.stopPropagation();
        dispatch(toggleTrip(trip.id));
        if (isFavorite) {
            toast.error("Trip removed from favorites");
        } else {
            toast.success("Trip added to favorites");
        }
    };

    return (
        <div className="group relative bg-white dark:bg-slate-900 rounded-[32px] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
            
            {/* Top Section */}
            <div className="p-6 pb-4">
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400 font-bold text-[10px] uppercase tracking-[0.2em] mb-1">
                            <MapPin size={12} strokeWidth={3} /> {trip.country}
                        </div>
                        <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                            {trip.city}
                        </h2>
                    </div>

                    <button 
                        onClick={handleToggleFavorite}
                        className={`p-3 rounded-2xl transition-all duration-300 shadow-sm border ${
                            isFavorite 
                            ? "bg-red-50 border-red-100 text-red-500 dark:bg-red-900/20 dark:border-red-900/30" 
                            : "bg-slate-50 border-slate-100 text-slate-300 hover:text-red-400 hover:bg-red-50 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-500 dark:hover:bg-red-900/20"
                        }`}
                    >
                        <Heart size={20} fill={isFavorite ? "currentColor" : "none"} strokeWidth={2.5} />
                    </button>
                </div>

                {/* 🌦️ Weather Row - Better contrast in Dark Mode */}
                <div className="flex items-center justify-between py-3 px-4 bg-blue-50/50 dark:bg-blue-900/10 rounded-2xl border border-blue-100/50 dark:border-blue-900/20 mb-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-white dark:bg-slate-800 rounded-xl shadow-sm text-blue-500 dark:text-blue-400">
                            <CloudSun size={18} strokeWidth={2.5} />
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-blue-400 dark:text-blue-500 uppercase tracking-tighter leading-none">Forecast</p>
                            <p className="text-sm font-black text-blue-900 dark:text-blue-100 capitalize">
                                {trip.weather?.weather[0]?.description || 'Haze'}
                            </p>
                        </div>
                    </div>
                    <div className="text-right">
                        <span className="text-xl font-black text-blue-600 dark:text-blue-400">
                            {Math.round(trip.weather?.main?.temp)}°C
                        </span>
                    </div>
                </div>

                {/* Date Display */}
                <div className="flex items-center gap-3 py-3 px-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 mb-2">
                    <div className="p-2 bg-white dark:bg-slate-800 rounded-lg text-slate-400 dark:text-slate-500 border border-slate-100 dark:border-slate-700">
                        <Calendar size={16} strokeWidth={2.5} />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider leading-none mb-1">Scheduled For</span>
                        <span className="text-sm font-black text-slate-700 dark:text-slate-200">
                            {trip.startDate ? `${formatDate(trip.startDate)} — ${formatDate(trip.endDate)}` : "Dates Not Set"}
                        </span>
                    </div>
                </div>
            </div>

            {/* Action Footer */}
            <div className="px-6 py-5 bg-slate-50/50 dark:bg-slate-800/30 border-t border-slate-50 dark:border-slate-800 flex items-center gap-3">
                <button
                    onClick={() => OpenTrip(trip)}
                    className="flex-1 flex items-center justify-center gap-2 bg-slate-900 dark:bg-blue-600 text-white py-3.5 rounded-2xl font-bold text-sm hover:bg-blue-600 dark:hover:bg-blue-500 transition-all active:scale-95 shadow-lg shadow-blue-500/10"
                >
                    View Details <ArrowRight size={18} />
                </button>

                <button
                    onClick={() => removeTrip(trip.id)}
                    className="p-3.5 bg-white dark:bg-slate-800 text-red-400 dark:text-red-400 rounded-2xl hover:bg-red-500 dark:hover:bg-red-500 hover:text-white transition-all duration-300 border border-slate-100 dark:border-slate-700 shadow-sm"
                >
                    <Trash2 size={20} />
                </button>
            </div>
        </div>
    );
}

export default TripCard;