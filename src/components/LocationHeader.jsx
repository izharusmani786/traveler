import React from 'react'
import { MapPin } from "lucide-react";

function LocationHeader({ countryInfo, city, fallbackCountry }) {
    // If countryInfo is missing, we use the code or a fallback
    const countryName = countryInfo?.name?.common || fallbackCountry;

    return (
        <div className="flex flex-col mb-8 mt-6">
            {/* Breadcrumb style label */}
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-[10px] uppercase tracking-[0.2em] mb-2">
                <MapPin size={12} strokeWidth={3} />
                <span>Destinations</span>
            </div>

            {/* Main Header */}
            <div className="flex items-baseline gap-3">
                <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-none">
                    {city}
                </h1>
                <span className="text-2xl font-medium text-slate-400 dark:text-slate-500">
                    {countryName}
                </span>
            </div>
            
            {/* Subtle Divider */}
            <div className="w-12 h-1 bg-blue-500 rounded-full mt-4"></div>
        </div>
    );
}

export default LocationHeader;