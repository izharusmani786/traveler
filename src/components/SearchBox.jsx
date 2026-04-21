import { useState, useEffect, useRef } from "react";
import { fetchCities } from "../api/cityApi";
import useDebounce from "../hooks/useDebounce";
import { useNavigate, useLocation } from "react-router-dom";
import { Search, X, MapPin, Loader2 } from "lucide-react"; // Added icons for a better UI

const SearchBox = () => {
  const [query, setQuery] = useState("");
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const isSelectingRef = useRef(false);
  const lastQuery = useRef("");
  const navigate = useNavigate();
  const debouncedQuery = useDebounce(query);
  const location = useLocation();

  const handleSelect = (city) => {
    isSelectingRef.current = true;
    setQuery(city.city);
    setCities([]);
    navigate(`/search?city=${city.city}&lat=${city.latitude}&lon=${city.longitude}&country=${city.countryCode}`);
  };

  useEffect(() => {
    if (!debouncedQuery) return;
    if (isSelectingRef.current) {
      isSelectingRef.current = false;
      return;
    }
    if (debouncedQuery === lastQuery.current) return;
    lastQuery.current = debouncedQuery;

    const getCities = async () => {
      setLoading(true);
      try {
        const data = await fetchCities(debouncedQuery);
        setCities(data);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };
    getCities();
  }, [debouncedQuery]);

  const clearSearch = () => {
    setQuery("");
    setCities([]);
  };

  useEffect(() => {
    if (!location.search) {
      setQuery("");
      setCities([]);
    }
  }, [location.search]);

  return (
    <div className="flex flex-col items-center justify-start mt-10 px-4">
      {/* Heading Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-3 tracking-tight">
          Explore Destinations ✈
        </h1>
        <p className="text-slate-500 dark:text-slate-400 font-medium max-w-md">
          Search cities to view weather and plan your next big adventure.
        </p>
      </div>

      {/* Search Container */}
      <div className="w-full max-w-xl relative">
        <div className="relative group">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors">
            <Search size={20} />
          </div>
          
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search cities (e.g. Delhi, London)"
            className="w-full pl-12 pr-12 py-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-lg"
          />

          {query && (
            <button
              onClick={clearSearch}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Autocomplete Dropdown */}
        {query && (cities.length > 0 || loading) && (
          <div className="absolute top-[72px] w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
            {loading ? (
              <div className="flex items-center gap-3 p-4 text-slate-500 dark:text-slate-400">
                <Loader2 size={18} className="animate-spin text-blue-500" />
                <span className="font-medium">Searching for cities...</span>
              </div>
            ) : (
              /* CUSTOM SCROLLBAR CLASSES ADDED BELOW */
              <div className="max-h-72 overflow-y-auto 
                scrollbar-thin 
                scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-700 
                scrollbar-track-transparent 
                hover:scrollbar-thumb-slate-400 dark:hover:scrollbar-thumb-slate-600">
                
                {Array.isArray(cities) && 
                  cities.map((city) => (
                    <div
                      key={city.id}
                      onClick={() => handleSelect(city)}
                      className="flex items-center gap-3 px-5 py-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer transition-colors border-b last:border-0 border-slate-100 dark:border-slate-800"
                    >
                      <div className="p-2 bg-blue-50 dark:bg-blue-900/20 text-blue-500 dark:text-blue-400 rounded-lg">
                        <MapPin size={16} />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-slate-800 dark:text-slate-100">{city.city}</span>
                        <span className="text-xs text-slate-400 dark:text-slate-500">{city.country}</span>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBox;