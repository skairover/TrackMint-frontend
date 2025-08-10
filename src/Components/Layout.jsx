// Layout.jsx
import { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

function Layout({ title, children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen w-screen overflow-hidden">
      {/* Sidebar collapses into drawer on mobile */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      
      <div className="flex-1 flex flex-col text-black h-full">
        <Header title={title} setSidebarOpen={setSidebarOpen} />
        
        {/* Add padding so mobile doesn’t feel cramped */}
        <main className="flex-1 bg-gray-200 dark:bg-[#121212] overflow-y-auto p-4 sm:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;
