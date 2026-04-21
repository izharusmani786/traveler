import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

// API & Components
import { getWeather } from "../api/weatherApi";
import { getCountryInfo } from "../api/countryApi";
import { getAttractions } from "../api/attractionsApi";
import SearchBox from "../components/SearchBox";
import WeatherCard from "../components/WeatherCard";
import CountryInfoCard from "../components/CountryInfoCard";
import LocationHeader from "../components/LocationHeader";
import EmptyCard from "../components/EmptyCard";
import AddTripPopUp from "../components/AddTripPopUp";
import ActionsBar from "../components/ActionsBar";
import SkeletonLoader from "../components/SkeletonLoader";
import ErrorState from "../components/ErrorState";
import Attractions from "../components/Attractions";

const SearchResults = () => {
    const [showPlanner, setShowPlanner] = useState(false);
    const { search } = useLocation();
    const params = new URLSearchParams(search);

    const city = params.get("city");
    const lat = params.get("lat");
    const lon = params.get("lon");
    const country = params.get("country");
    const isEmpty = !city || !lat || !lon || !country;

    // --- Queries ---
    const weatherQuery = useQuery({
        queryKey: ["weather", lat, lon],
        queryFn: () => getWeather(lat, lon),
        enabled: !!lat && !!lon,
    });

    const countryQuery = useQuery({
        queryKey: ["country", country],
        queryFn: () => getCountryInfo(country),
        enabled: !!country,
    });

    const attractionsQuery = useQuery({
        queryKey: ["attractions", lat, lon],
        queryFn: () => getAttractions(lat, lon),
        enabled: !!lat && !!lon,
    });

    const handlePlannerOpen = () => setShowPlanner(true);
    const handlePlannerClose = () => setShowPlanner(false);

    return (
        <div className="mx-auto space-y-10 animate-in fade-in duration-500">
            {/* Search Section */}
            <div className="flex justify-center">
                <div className="w-full max-w-4xl">
                    <SearchBox />
                </div>
            </div>

            {isEmpty ? (
                <EmptyCard />
            ) : (
                <div className="space-y-8">
                    {/* Header */}
                    <LocationHeader countryInfo={countryQuery.data} city={city} fallbackCountry={country} />

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Weather Section */}
                        <div className="min-h-[300px]">
                            {weatherQuery.isLoading ? (
                                <SkeletonLoader />
                            ) : weatherQuery.isError ? (
                                <ErrorState 
                                    message={weatherQuery.error?.message || "Weather unavailable"} 
                                    onRetry={() => weatherQuery.refetch()} 
                                />
                            ) : (
                                <div className="h-full transition-all hover:translate-y-[-4px]">
                                    <WeatherCard weather={weatherQuery.data} />
                                </div>
                            )}
                        </div>

                        {/* Country Info Section */}
                        <div className="min-h-[300px]">
                            {countryQuery.isLoading ? (
                                <SkeletonLoader />
                            ) : countryQuery.isError ? (
                                <ErrorState 
                                    message={countryQuery.error?.message || "Country info unavailable"}
                                    onRetry={() => countryQuery.refetch()} 
                                />
                            ) : (
                                <div className="h-full transition-all hover:translate-y-[-4px]">
                                    <CountryInfoCard countryInfo={countryQuery.data} />
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="">
                        {attractionsQuery.isLoading ? (
                            <SkeletonLoader />
                        ) : attractionsQuery.isError ? (
                            <ErrorState 
                                message={attractionsQuery.error?.message || "Country info unavailable"}
                                onRetry={() => attractionsQuery.refetch()} 
                            />
                        ) : (
                            <div className="h-full transition-all hover:translate-y-[-4px]">
                                <Attractions attractions={attractionsQuery.data.results} />
                            </div>
                        )}
                    </div>

                    {/* Combined Inspiration & Actions Row */}
                    {!weatherQuery.isLoading && !weatherQuery.isError && (
                        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 animate-in fade-in slide-in-from-bottom-6 duration-500 delay-300">
                            
                            {/* Inspiration Section (Expanded to take available space) */}
                            <div className="flex-1 bg-white/5 dark:bg-slate-900/50 backdrop-blur-md rounded-2xl p-5 border border-slate-200/10 dark:border-slate-800 flex items-center gap-4">
                                <div className="flex-shrink-0">
                                    <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center shadow-lg">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                                    <div>
                                        <h3 className="font-bold text-slate-800 dark:text-slate-100 text-base leading-tight">Travel Inspiration</h3>
                                        <p className="text-slate-500 dark:text-slate-400 text-xs">Ready for {city}?</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <span className="px-2 py-0.5 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-md text-[10px] font-bold uppercase tracking-wider">☀️ Outdoor</span>
                                        <span className="px-2 py-0.5 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-md text-[10px] font-bold uppercase tracking-wider">📸 Photo ops</span>
                                    </div>
                                </div>
                            </div>

                            {/* Action Bar Section (The Schedule Button) */}
                            <div className="flex-shrink-0">
                                <ActionsBar city={city} popUpOoen={handlePlannerOpen} />
                            </div>
                        </div>
                    )}
                </div>
            )}

            {showPlanner && (
                <AddTripPopUp 
                    city={city} country={country} countryInfo={countryQuery.data} 
                    lat={lat} lon={lon} weather={weatherQuery.data} 
                    onClose={handlePlannerClose} 
                />
            )}
        </div>
    );
};

export default SearchResults;