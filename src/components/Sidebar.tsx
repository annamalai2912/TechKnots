import React, { useState } from 'react';
import { X, Home, Info, BookOpen, Phone, User } from 'lucide-react';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { navLinks } from '../utils/constants';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const iconMap = {
  Home: Home,
  About: Info,
  Services: BookOpen,
  Contact: Phone,
};

const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
  const [user] = useAuthState(auth);
  const [isImageLoading, setIsImageLoading] = useState(true);

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  const handleImageLoad = () => {
    setIsImageLoading(false); // Remove loader once image loads
  };

  const generateAvatar = (name: string) => {
    const firstLetter = name.charAt(0).toUpperCase(); // Get the first letter of the user's name
    return firstLetter;
  };

  const generateTechKnotsNumber = () => {
    const timestamp = Date.now(); // Get the current timestamp
    return `techknots-${timestamp}`; // Generate the unique register number
  };

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        />
      )}

      <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-4">
          <div className="flex justify-between items-center mb-8">
            <img src="src/components/logo.svg" alt="Logo" className="w-16 h-16" />
            <button onClick={toggleSidebar} className="text-gray-600">
              <X className="w-6 h-6" />
            </button>
          </div>

          {user && (
            <div className="mb-8 flex items-center space-x-3">
              <div className="w-12 h-12 flex justify-center items-center rounded-full bg-gray-300 text-white text-xl font-bold">
                {generateAvatar(user.displayName || '')}
              </div>
              <div>
                <span className="text-gray-700">{user.displayName}</span>
                <div className="text-sm text-gray-500 mt-1">
                  {generateTechKnotsNumber()} {/* Display the unique register number */}
                </div>
              </div>
            </div>
          )}

          <nav className="space-y-4">
            {navLinks.map(({ href, label }) => {
              const Icon = iconMap[label as keyof typeof iconMap];
              return (
                <a 
                  key={href}
                  href={href} 
                  className="flex items-center space-x-3 text-gray-700 hover:text-green-600 py-2 px-4 rounded transition-colors"
                >
                  <Icon className="w-5 h-5" />
                  <span>{label}</span>
                </a>
              );
            })}
          </nav>

          <div className="absolute bottom-8 left-0 w-full px-4">
            {!user ? (
              <button
                onClick={signInWithGoogle}
                className="w-full flex items-center justify-center space-x-2 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
              >
                <User className="w-5 h-5" />
                <span>Sign In with Google</span>
              </button>
            ) : (
              <button
                onClick={() => {
                  signOut(auth);
                }}
                className="w-full flex items-center justify-center space-x-2 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
              >
                <User className="w-5 h-5" />
                <span>Sign Out</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
