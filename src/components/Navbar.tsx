import React, { useState } from 'react';
import { Menu, X, User, LogIn, LogOut } from 'lucide-react';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user] = useAuthState(auth);

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-indigo-600">TechKnots</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-indigo-600">Home</a>
            <a href="#about" className="text-gray-700 hover:text-indigo-600">About</a>
            <a href="#services" className="text-gray-700 hover:text-indigo-600">Services</a>
            <a href="#contact" className="text-gray-700 hover:text-indigo-600">Contact</a>
            {user ? (
              <div className="flex items-center space-x-4">
                <img src={user.photoURL || ''} alt="Profile" className="w-8 h-8 rounded-full" />
                <button onClick={handleSignOut} className="flex items-center text-gray-700 hover:text-indigo-600">
                  <LogOut className="w-5 h-5 mr-1" />
                  Logout
                </button>
              </div>
            ) : (
              <button onClick={signInWithGoogle} className="flex items-center text-gray-700 hover:text-indigo-600">
                <LogIn className="w-5 h-5 mr-1" />
                Sign In
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Home</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">About</a>
            <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Services</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Contact</a>
            {user ? (
              <div className="px-3 py-2">
                <div className="flex items-center space-x-3">
                  <img src={user.photoURL || ''} alt="Profile" className="w-8 h-8 rounded-full" />
                  <button onClick={handleSignOut} className="flex items-center text-gray-700 hover:text-indigo-600">
                    <LogOut className="w-5 h-5 mr-1" />
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <button onClick={signInWithGoogle} className="flex items-center px-3 py-2 text-gray-700 hover:text-indigo-600">
                <LogIn className="w-5 h-5 mr-1" />
                Sign In
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;