import { Map, Heart, Calendar, CloudSun, Navigation } from 'lucide-react';
import AttractionsList from '../components/Attractions'; 
import { useSelector } from 'react-redux'; 
import { useNavigate } from 'react-router-dom';


function Home() {
  const navigate = useNavigate();
  const userName = "Izhar Usmani"; 
  const trips = useSelector((state) => state.trips.trips)
  const { data: weather } = useSelector((state) => state.weather )
  const { data: attractions, loading: loadingAttractions } = useSelector((state) => state.attractions);

  const savedTrips = trips.length;
  const favorites = trips.filter(t => t.isFavorite).length
  const upcoming = trips.filter(t => new Date(t.startDate) > new Date()).length
  const ongoingTrip = trips.find(t => {
    const now = new Date();
    const start = new Date(t.startDate);
    const end = new Date(t.endDate);
    return now >= start && now <= end;
  });

  // Calculate remaining days
  const getRemainingDays = (endDate) => {
    const diffTime = new Date(endDate) - new Date();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? `${diffDays} days remaining` : "Last day!";
  };

  const handleViewItinerary = (tripId) => {
    navigate(`/trip/${tripId}`)
  }

  return (
    <div className="min-h-screen p-4 md:p-8 transition-colors duration-300">
      {/* 1. Header Section */}
      <header className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Welcome back, {userName}! 👋
          </h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium">Where are we headed next?</p>
        </div>
        
        <div className="flex items-center gap-3 bg-white dark:bg-slate-900 p-2 px-4 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
          <div className="w-10 h-10 bg-blue-50 dark:bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400">
            <CloudSun size={24} />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase">Current Weather</p>
            <div className="text-sm font-bold text-slate-700 dark:text-slate-200">
              {!weather ? (
                <p className="animate-pulse h-4 w-32 bg-slate-300 rounded"></p>
              ) : (
                <p>{Math.round(weather.temp)}°C • {weather.condition} • {weather.city}</p>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* 2. Quick Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Saved Trips', value: savedTrips, icon: Map, color: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-50 dark:bg-emerald-500/10' },
          { label: 'Favorites', value: favorites, icon: Heart, color: 'text-rose-600 dark:text-rose-400', bg: 'bg-rose-50 dark:bg-rose-500/10' },
          { label: 'Upcoming', value: upcoming, icon: Calendar, color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-50 dark:bg-blue-500/10' },
          { label: 'Km Traveled', value: '1.2k', icon: Navigation, color: 'text-violet-600 dark:text-violet-400', bg: 'bg-violet-50 dark:bg-violet-500/10' },
        ].map((stat, i) => (
          <div key={i} className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex items-center gap-4">
            <div className={`w-12 h-12 ${stat.bg} ${stat.color} rounded-xl flex items-center justify-center`}>
              <stat.icon size={24} />
            </div>
            <div>
              <p className="text-2xl font-black text-slate-800 dark:text-white">{stat.value}</p>
              <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Main Content Area */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        
        {/* Left Column: Attractions */}
        <div className="xl:col-span-2">
           <AttractionsList attractions={attractions} loading={loadingAttractions} /> 
        </div>

        {/* Right Column: Sidebar Widgets */}
        <div className="space-y-6">
          {/* Active Trip Widget */}
          {ongoingTrip ? (
            <div className="bg-slate-900 dark:bg-blue-600 rounded-3xl p-6 text-white shadow-xl relative overflow-hidden group transition-colors">
              <div className="relative z-10">
                <span className="bg-blue-500 dark:bg-blue-400 text-[10px] font-bold px-2 py-1 rounded-md uppercase mb-4 inline-block">
                  Ongoing Trip
                </span>
                <h3 className="text-xl font-bold mb-1">{ongoingTrip.city}, {ongoingTrip.country}</h3>
                <p className="text-slate-400 dark:text-blue-100 text-sm mb-6">
                  {getRemainingDays(ongoingTrip.endDate)}
                </p>
                
                <button onClick={() => handleViewItinerary(ongoingTrip.id)} className="w-full bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold py-3 rounded-xl hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors">
                  View Itinerary
                </button>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl group-hover:bg-blue-600/40 transition-all"></div>
            </div>
          ) : (
            /* Optional: Show a "Plan a Trip" call to action if no trip is ongoing */
            <div className="bg-slate-100 dark:bg-slate-800 rounded-3xl p-6 border-2 border-dashed border-slate-300 dark:border-slate-700 text-center">
              <p className="text-slate-500 dark:text-slate-400 text-sm">No active trips right now.</p>
              <button className="text-blue-500 font-bold mt-2">Start Planning +</button>
            </div>
          )}

          {/* Travel Tip of the Day - Fixed Dark Mode Contrast */}
          <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-900/20 rounded-2xl p-5">
            <h4 className="text-amber-800 dark:text-amber-400 font-bold text-sm mb-2 flex items-center gap-2">
              💡 Travel Tip
            </h4>
            <p className="text-amber-900/70 dark:text-amber-200/60 text-xs leading-relaxed">
              Always carry a portable power bank and download offline maps before heading into the Nilgiri mountains!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;