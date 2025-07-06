// Layout.jsx
import { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

function Layout({ title, children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex-1 flex flex-col text-black h-screen">
        <Header title={title} setSidebarOpen={setSidebarOpen} />
        <main className="flex-1 bg-gray-200 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}

export default Layout;
