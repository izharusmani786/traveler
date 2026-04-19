import React from 'react';

function WeatherCard({ weather }) {
    return (
        /* Removed h-full to prevent the "giant blue box" issue */
        /* Added border for depth in dark mode */
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-6 rounded-[24px] shadow-lg shadow-blue-500/10 flex flex-col min-h-[280px] transition-all">
            
            <h2 className="text-xl font-bold tracking-tight mb-2 opacity-90">
                Weather
            </h2>

            {!weather ? (
                <div className="flex-1 flex items-center justify-center">
                    <p className="animate-pulse">Loading weather data...</p>
                </div>
            ) : (
                <div className="flex flex-col flex-1">
                    {/* Main Temp Section */}
                    <div className="flex items-center justify-between mt-2">
                        <div>
                            <div className="text-5xl font-black tracking-tighter">
                                {Math.round(weather.main.temp)}°C
                            </div>
                            <p className="text-lg font-medium opacity-90 capitalize mt-1">
                                {weather.weather[0].description}
                            </p>
                        </div>

                        {/* Weather Icon with a subtle glow */}
                        <div className="bg-white/10 rounded-2xl p-2 backdrop-blur-sm">
                            <img
                                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                                alt="weather icon"
                                className="w-16 h-16"
                            />
                        </div>
                    </div>

                    {/* Stats Section - mt-auto pushes this to the bottom of the 280px min-height */}
                    <div className="mt-auto pt-6 border-t border-white/10 flex justify-between items-center text-sm font-medium">
                        <div className="flex flex-col">
                            <span className="opacity-60 text-[10px] uppercase tracking-widest font-bold">Humidity</span>
                            <span>{weather.main.humidity}%</span>
                        </div>
                        <div className="w-px h-8 bg-white/10"></div>
                        <div className="flex flex-col text-right">
                            <span className="opacity-60 text-[10px] uppercase tracking-widest font-bold">Wind Speed</span>
                            <span>{weather.wind.speed} m/s</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default WeatherCard;