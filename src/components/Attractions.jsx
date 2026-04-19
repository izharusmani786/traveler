import { MapPin, ArrowRight } from 'lucide-react';

function Attractions({ attractions, loading }) {

    return (
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 transition-colors">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
                    <span className="w-1 h-6 bg-blue-500 rounded-full"></span>
                    Top Attractions
                </h2>
                <span className="text-xs text-slate-400 dark:text-slate-500 font-bold bg-slate-50 dark:bg-slate-800 px-3 py-1 rounded-full border border-slate-100 dark:border-slate-700">
                    {attractions?.length || 0} Places Nearby
                </span>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* 🔄 Loading Skeleton */}
                {loading && (
                    [...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 animate-pulse"
                    >
                        <div className="w-14 h-14 bg-slate-200 dark:bg-slate-700 rounded-xl"></div>

                        <div className="flex-1 space-y-2">
                        <div className="w-20 h-3 bg-slate-200 dark:bg-slate-700 rounded"></div>
                        <div className="w-40 h-4 bg-slate-200 dark:bg-slate-700 rounded"></div>
                        <div className="w-32 h-3 bg-slate-200 dark:bg-slate-700 rounded"></div>
                        </div>
                    </div>
                    ))
                )}

                {/* ✅ Real Data */}
                {!loading && attractions?.length > 0 && (
                    attractions.map((place) => {
                        const icon = place.categories?.[0]?.icon;
                        const iconUrl = icon ? `${icon.prefix}bg_64${icon.suffix}` : null;
                        const categoryName = place.categories?.[0]?.name || "Attraction";

                        return (
                            <div key={place.fsq_place_id} className="group flex items-center gap-4 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-800/40 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 cursor-pointer" > 
                                {/* Category Icon */} 
                                <div className="flex-shrink-0 w-14 h-14 bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 transition-all duration-300"> 
                                    {iconUrl ? ( 
                                        <img src={iconUrl} alt="" className="w-8 h-8 object-contain group-hover:rotate-6 transition-transform dark:invert dark:brightness-200" /> 
                                    ) : ( 
                                        <MapPin className="w-6 h-6 text-slate-300 dark:text-slate-600" /> 
                                    )} 
                                </div> 
                                {/* Content */} 
                                <div className="flex-grow min-w-0"> 
                                    <div className="flex justify-between items-start mb-1"> 
                                        <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2 py-0.5 rounded-md border border-blue-100 dark:border-blue-800/50 mb-1 inline-block"> {categoryName} </span> 
                                        <span className="text-xs font-bold text-slate-400 dark:text-slate-500 group-hover:text-blue-500 transition-colors"> {place.distance ? `${(place.distance / 1000).toFixed(1)} km` : ""} </span> 
                                    </div> 
                                    <h3 className="font-extrabold text-slate-900 dark:text-slate-100 truncate text-base group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"> {place.name} </h3> 
                                    {/* Address */} 
                                    <div className="flex items-center gap-1 mt-1 text-slate-500 dark:text-slate-400"> 
                                        <MapPin className="w-3 h-3 flex-shrink-0 text-blue-400 dark:text-blue-500" /> 
                                        <p className="text-xs truncate italic"> {place.location?.formatted_address || "Address not available"} </p> 
                                    </div> 
                                    {/* Explore Action */} 
                                    <div className="flex items-center justify-end mt-2 h-4"> 
                                        <div className="flex items-center gap-1 text-[11px] font-bold text-blue-500 dark:text-blue-400 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300"> 
                                            <span>Explore</span> 
                                            <ArrowRight className="w-3 h-3" /> 
                                        </div> 
                                    </div> 
                                </div> 
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    )
}

export default Attractions;