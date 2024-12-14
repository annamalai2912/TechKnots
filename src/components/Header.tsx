import React from 'react';
import { Menu } from 'lucide-react';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header = ({ toggleSidebar }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 w-full bg-transparent shadow-none z-30">
      <div className="flex items-center justify-between px-4 py-2">
        {/* Sidebar toggle button */}
        <button onClick={toggleSidebar} className="text-gray-700 hover:text-green-600">
          <Menu className="w-6 h-6" />
        </button>

        {/* Logo on the right */}
        <img src="logo.svg" alt="Logo" className="w-24 h-24" />
      </div>
    </header>
  );
}

export default Header;
