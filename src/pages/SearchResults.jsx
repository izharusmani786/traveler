import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

// API & Components
import { getWeather } from "../api/weatherApi";
import { getCountryInfo } from "../api/countryApi";
import SearchBox from "../components/SearchBox";
import WeatherCard from "../components/WeatherCard";
import CountryInfoCard from "../components/CountryInfoCard";
import LocationHeader from "../components/LocationHeader";
import EmptyCard from "../components/EmptyCard";
import AddTripPopUp from "../components/AddTripPopUp";
import ActionsBar from "../components/ActionsBar";
import SkeletonLoader from "../components/SkeletonLoader";
import ErrorState from "../components/ErrorState";

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

    const handlePlannerOpen = () => setShowPlanner(true);
    const handlePlannerClose = () => setShowPlanner(false);

    return (
        <div className="mx-auto px-4 py-8 space-y-10 animate-in fade-in duration-500">
            {/* Search Section */}
            <div className="flex justify-center">
                <div className="w-full max-w-2xl">
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
                            {(weatherQuery.isLoading) ? (
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
                            {(countryQuery.isLoading) ? (
                                <SkeletonLoader />
                            ) : countryQuery.isError ? (
                                <ErrorState 
                                    message={weatherQuery.error?.message || "Weather unavailable"}
                                    onRetry={() => countryQuery.refetch()} 
                                />
                            ) : (
                                <div className="h-full transition-all hover:translate-y-[-4px]">
                                    <CountryInfoCard countryInfo={countryQuery.data} />
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Actions */}
                    <ActionsBar city={city} popUpOoen={handlePlannerOpen} />
                </div>
            )}

            {showPlanner && (
                <AddTripPopUp 
                    city={city} 
                    country={country} 
                    countryInfo={countryQuery.data} 
                    lat={lat} lon={lon} 
                    weather={weatherQuery.data} 
                    onClose={handlePlannerClose} 
                />
            )}
        </div>
    );
};

export default SearchResults;