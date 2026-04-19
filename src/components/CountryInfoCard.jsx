import React from 'react';
import { Globe, Users, Landmark, Coins, Languages } from "lucide-react";

function CountryInfoCard({ countryInfo }) {
    // Safely extract currency and languages
    const currency = countryInfo?.currencies ? Object.values(countryInfo.currencies)[0] : null;
    const languages = countryInfo?.languages ? Object.values(countryInfo.languages).slice(0, 2) : [];

    return (
        /* Matched rounded-[24px] and min-height [280px] to WeatherCard */
        <div className="bg-white dark:bg-slate-900 p-6 rounded-[24px] shadow-lg shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 transition-all duration-300 min-h-[280px] flex flex-col">
            
            {!countryInfo ? (
                /* Loading State: Keeps the same height/structure to avoid UI layout shifts */
                <div className="flex-1 flex flex-col items-center justify-center space-y-3">
                    <div className="w-10 h-10 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin"></div>
                    <p className="text-slate-400 font-medium animate-pulse">Fetching country details...</p>
                </div>
            ) : (
                <>
                {/* Header Section */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="relative shrink-0">
                        <img
                            src={countryInfo?.flags?.png}
                            alt="flag"
                            className="w-16 h-11 object-cover rounded-lg shadow-sm border border-slate-100 dark:border-slate-800"
                        />
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white dark:border-slate-900 rounded-full"></div>
                    </div>

                    <div className="overflow-hidden">
                        <h2 className="text-xl font-black text-slate-900 dark:text-white tracking-tight leading-tight truncate">
                            {countryInfo?.name?.common}
                        </h2>
                        <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-wider mt-1">
                            <Globe size={12} className="text-blue-500" />
                            <span className="truncate">{countryInfo?.region} • {countryInfo?.subregion}</span>
                        </div>
                    </div>
                </div>

                {/* Info Grid - Flex-1 and mt-auto ensures this fills the card space nicely */}
                <div className="grid grid-cols-2 gap-3 mt-auto">
                    {/* Capital */}
                    <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/50">
                        <div className="flex items-center gap-2 mb-1 text-blue-500">
                            <Landmark size={14} />
                            <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Capital</span>
                        </div>
                        <p className="text-sm font-bold text-slate-700 dark:text-slate-200 truncate">
                            {countryInfo?.capital?.[0] || "N/A"}
                        </p>
                    </div>

                    {/* Population */}
                    <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/50">
                        <div className="flex items-center gap-2 mb-1 text-emerald-500">
                            <Users size={14} />
                            <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">People</span>
                        </div>
                        <p className="text-sm font-bold text-slate-700 dark:text-slate-200">
                            {countryInfo?.population ? `${(countryInfo.population / 1000000).toFixed(1)}M` : "N/A"}
                        </p>
                    </div>

                    {/* Currency */}
                    <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/50">
                        <div className="flex items-center gap-2 mb-1 text-amber-500">
                            <Coins size={14} />
                            <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Currency</span>
                        </div>
                        <p className="text-sm font-bold text-slate-700 dark:text-slate-200 truncate">
                            {currency ? `${currency.symbol || ''} ${currency.code || ''}` : "N/A"}
                        </p>
                    </div>

                    {/* Languages */}
                    <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/50">
                        <div className="flex items-center gap-2 mb-1 text-violet-500">
                            <Languages size={14} />
                            <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Languages</span>
                        </div>
                        <p className="text-sm font-bold text-slate-700 dark:text-slate-200 truncate">
                            {languages.length > 0 ? languages.join(", ") : "N/A"}
                        </p>
                    </div>
                </div>
                </>
            )}
        </div>
    );
}

export default CountryInfoCard;