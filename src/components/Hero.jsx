import React from 'react';
import { Calendar, MapPin, Clock, Share2, Sparkles, ChevronLeft, Heart } from 'lucide-react';

function Hero({ city, country, createdAt, startDate, endDate, isFavorite }) {

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short"
        });
    };

    const getTripDays = () => {
        if (!startDate || !endDate) return null;
        const start = new Date(startDate);
        const end = new Date(endDate);
        const diff = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
        return diff > 0 ? diff : 1;
    };

    const tripDays = getTripDays();

    return (
        <div className="relative group rounded-3xl overflow-hidden shadow-lg bg-slate-200 w-full h-64 md:h-72 lg:h-80">
            
            {/* Background Image */}
            <img
                src={`https://loremflickr.com/1600/500/${city},landscape`}
                alt={city}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
            />

            {/* Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

            {/* Navigation & Action Buttons */}
            <div className="absolute top-4 inset-x-4 z-10 flex justify-between items-center">
                <div className="flex gap-2">
                    {/* Back Button */}
                    <button 
                        onClick={() => window.history.back()}
                        className="p-2.5 bg-black/20 backdrop-blur-md hover:bg-white text-white hover:text-black rounded-xl transition-all border border-white/20 flex items-center justify-center group/back"
                    >
                        <ChevronLeft size={20} className="group-hover/back:-translate-x-0.5 transition-transform" />
                    </button>
                    {/* Upcoming Badge */}
                    <div className="flex">
                        <div className="flex items-center gap-2 px-3 py-1 bg-blue-600/90 backdrop-blur-md text-white text-[9px] font-black uppercase tracking-widest rounded-full border border-blue-400/30 shadow-lg">
                            <Sparkles size={10} className="animate-pulse" />
                            Upcoming Trip
                        </div>
                    </div>
                </div>

                <div className="flex gap-2">
                    {/* Share Button */}
                    <button className="p-2.5 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-xl text-white transition-all border border-white/10">
                        <Share2 size={18} />
                    </button>

                    {/* Favorite Button */}
                    <button
                        className={`p-2.5 backdrop-blur-md rounded-xl transition-all border border-white/20 flex items-center justify-center
                            ${isFavorite 
                                ? 'bg-red-500/90 text-white border-red-400' 
                                : 'bg-white/10 text-white hover:bg-white/20'}`}
                    >
                        <Heart 
                            size={18} 
                            fill={isFavorite ? "currentColor" : "none"} 
                            className={`${isFavorite ? 'animate-bounce' : ''}`}
                        />
                    </button>
                </div>
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between pt-40 md:pt-40 mt:10 md:mt-10">

                {/* Bottom Row */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    
                    {/* Destination Details */}
                    <div className="space-y-1">
                        <div className="flex items-center gap-1.5 text-blue-400 drop-shadow-md">
                            <MapPin size={16} />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em]">{country}</span>
                        </div>
                        
                        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none drop-shadow-2xl">
                            {city}
                        </h1>

                        <div className="flex items-center gap-2 text-white/50 text-[10px] font-bold mt-2">
                            <Clock size={12} />
                            <span>Planned {new Date(createdAt).toLocaleDateString("en-IN", { month: 'short', year: 'numeric' })}</span>
                        </div>
                    </div>

                    {/* Compact Glass Trip Badge */}
                    {startDate && endDate && (
                        <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                            <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-1 rounded-2xl flex items-stretch shadow-xl">
                                <div className="px-4 py-2 flex flex-col items-center justify-center bg-white/10 rounded-xl min-w-[60px]">
                                    <span className="text-xl font-black text-white leading-none">{tripDays}</span>
                                    <span className="text-[8px] font-bold text-blue-300 uppercase tracking-tighter">Days</span>
                                </div>
                                <div className="w-[1px] bg-white/10 my-2 mx-2" />
                                <div className="px-4 py-2 flex flex-col justify-center pr-5">
                                    <div className="flex items-center gap-1.5 text-white">
                                        <Calendar size={14} className="text-blue-400" />
                                        <span className="text-sm font-black tracking-tight whitespace-nowrap">
                                            {formatDate(startDate)} — {formatDate(endDate)}
                                        </span>
                                    </div>
                                    <span className="text-[8px] text-gray-400 font-black uppercase tracking-widest mt-0.5">
                                        Travel Window
                                    </span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Hero;