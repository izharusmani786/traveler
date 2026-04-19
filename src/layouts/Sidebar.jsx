// components/Sidebar.jsx
import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Search, Map, Heart, Plane, X } from "lucide-react";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const { pathname } = useLocation();

  const menu = [
    { name: "Dashboard", path: "/", icon: LayoutDashboard },
    { name: "Search Destinations", path: "/search", icon: Search },
    { name: "Saved Trips", path: "/trips", icon: Map },
    { name: "Favorite Trips", path: "/favorite-trips", icon: Heart },
  ];

  return (
    <>
      {/* Mobile Backdrop: Only shows when sidebar is open on small screens */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar Container */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-72 bg-white dark:bg-slate-950 border-r border-slate-100 dark:border-slate-800 p-6 flex flex-col 
        transition-transform duration-300 ease-in-out transform
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 lg:static lg:h-screen
      `}>
        
        {/* Brand & Mobile Close Button */}
        <div className="flex items-center justify-between mb-10 px-2">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-600 rounded-xl shadow-lg shadow-blue-500/30">
              <Plane className="text-white" size={20} fill="currentColor" />
            </div>
            <h1 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">
              TRAVELER<span className="text-blue-600">.</span>
            </h1>
          </div>
          
          {/* Close Icon (Mobile Only) */}
          <button onClick={toggleSidebar} className="lg:hidden p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl">
            <X size={20} />
          </button>
        </div>

        {/* Navigation Label */}
        <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-4 px-2">
          Main Menu
        </p>

        <ul className="space-y-2 flex-grow">
          {menu.map((item) => {
            const isActive = pathname === item.path;
            return (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`group flex items-center gap-3 px-4 py-3 rounded-2xl font-bold transition-all duration-300 ${
                    isActive
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                      : "text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                >
                  <item.icon 
                    size={20} 
                    className={`${isActive ? "text-white" : "group-hover:scale-110 transition-transform"}`} 
                  />
                  <span className="text-sm">{item.name}</span>
                  
                  {isActive && (
                      <div className="ml-auto w-1.5 h-1.5 bg-white rounded-full shadow-glow"></div>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="mt-auto p-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800">
          <p className="text-xs font-bold text-slate-900 dark:text-white mb-1">Trip Limit</p>
          <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
              <div className="w-2/3 h-full bg-blue-600 rounded-full"></div>
          </div>
          <p className="text-[10px] text-slate-400 mt-2 font-medium">8 of 12 trips used</p>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;