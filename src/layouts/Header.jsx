import { useContext, useState, useRef, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext"; // Import your auth hook
import { Moon, Sun, Search, Menu, LogOut, User, Settings, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = ({ toggleSidebar }) => {
  const { isDark, toggleMode } = useContext(ThemeContext);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="sticky top-0 z-40 w-full bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 px-6 py-3 flex justify-between items-center transition-all duration-300">
      
      {/* Left Section: Branding */}
      <div className="flex items-center gap-3">
        <button 
          onClick={toggleSidebar}
          className="p-2 -ml-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl lg:hidden"
        >
          <Menu size={24} />
        </button>

        <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
          <span className="font-black text-sm tracking-tighter">TR</span>
        </div>
        <span className="font-black text-slate-900 dark:text-white tracking-tight hidden sm:block">
          TRAVELER<span className="text-blue-600">.</span>
        </span>
      </div>

      {/* Right Section: Actions */}
      <div className="flex items-center gap-2 md:gap-5">
        {/* <button className="p-2 text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors hidden md:block">
          <Search size={20} />
        </button> */}

        <button 
          onClick={toggleMode}
          className="group p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all border border-transparent dark:border-slate-700"
        >
          {isDark ? (
            <Moon size={18} className="text-blue-400 fill-blue-400/10" />
          ) : (
            <Sun size={18} className="text-amber-500 fill-amber-500/10" />
          )}
        </button>

        <div className="h-6 w-[1px] bg-slate-200 dark:bg-slate-800 mx-1 hidden sm:block"></div>

        {/* User Profile Dropdown */}
        <div className="relative" ref={menuRef}>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center gap-3 p-1 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all"
          >
            <div className="hidden lg:flex flex-col items-end mr-1">
              <p className="text-xs font-black text-slate-900 dark:text-white leading-none">
                {user?.name || "Explorer"}
              </p>
              <p className="text-[10px] font-bold text-blue-500 uppercase mt-1">Explorer</p>
            </div>
            
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center rounded-2xl font-black shadow-lg shadow-blue-500/20 border-2 border-white dark:border-slate-800">
                {user?.name?.charAt(0).toUpperCase() || "U"}
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 border-2 border-white dark:border-slate-900 rounded-full"></div>
            </div>
            <ChevronDown size={14} className={`text-slate-400 transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Dropdown Menu */}
          {isMenuOpen && (
            <div className="absolute right-0 mt-3 w-56 origin-top-right bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl py-2 animate-in fade-in zoom-in duration-200">
              <div className="px-4 py-3 border-b border-slate-100 dark:border-slate-800">
                <p className="text-sm font-bold text-slate-900 dark:text-white">Account Info</p>
                <p className="text-[10px] text-slate-500 truncate">{user?.name}@kellton.com</p>
              </div>
              
              <div className="p-2">
                <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors">
                  <User size={16} />
                  <span>Profile Settings</span>
                </button>
                <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors">
                  <Settings size={16} />
                  <span>Preferences</span>
                </button>
              </div>

              <div className="p-2 border-t border-slate-100 dark:border-slate-800">
                <button 
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-3 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/10 rounded-xl transition-colors"
                >
                  <LogOut size={16} />
                  <span className="font-bold">Logout</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;