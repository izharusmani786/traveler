import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen bg-gray-100">
      
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        
        {/* Header */}
        <Header toggleSidebar={toggleSidebar} />

        {/* Page Content */}
        <main className="flex-1 p-4 md:p-6 lg:p-6  overflow-y-auto  
                 dark:bg-slate-950 dark:text-white
                 scrollbar-thin 
                 scrollbar-thumb-blue-600 
                 scrollbar-track-gray-200
                 dark:scrollbar-thumb-slate-700 
                 dark:scrollbar-track-slate-900">
          <Outlet />
        </main>

      </div>
    </div>
  );
};

export default MainLayout;