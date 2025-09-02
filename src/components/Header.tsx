import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Menu, X, User, LogIn } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">CareConnect</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/for-patients" 
              className={`text-gray-700 hover:text-blue-600 transition-colors ${isActive('/for-patients') ? 'text-blue-600 font-semibold' : ''}`}
            >
              For Patients
            </Link>
            <Link 
              to="/for-nurses" 
              className={`text-gray-700 hover:text-blue-600 transition-colors ${isActive('/for-nurses') ? 'text-blue-600 font-semibold' : ''}`}
            >
              For Nurses
            </Link>
            <Link 
              to="/services" 
              className={`text-gray-700 hover:text-blue-600 transition-colors ${isActive('/services') ? 'text-blue-600 font-semibold' : ''}`}
            >
              Services
            </Link>
            <Link 
              to="/providers" 
              className={`text-gray-700 hover:text-blue-600 transition-colors ${isActive('/providers') ? 'text-blue-600 font-semibold' : ''}`}
            >
              Find Nurses
            </Link>
            <Link 
              to="/about" 
              className={`text-gray-700 hover:text-blue-600 transition-colors ${isActive('/about') ? 'text-blue-600 font-semibold' : ''}`}
            >
              About
            </Link>
            
            {/* User Actions */}
            <div className="flex items-center space-x-4 ml-8">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
                <LogIn className="h-4 w-4" />
                <span>Sign In</span>
              </button>
              <Link 
                to="/book" 
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Book Now
              </Link>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 pt-4">
              <Link 
                to="/for-patients" 
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                For Patients
              </Link>
              <Link 
                to="/for-nurses" 
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                For Nurses
              </Link>
              <Link 
                to="/services" 
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/providers" 
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Find Nurses
              </Link>
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
                  <LogIn className="h-4 w-4" />
                  <span>Sign In</span>
                </button>
                <Link 
                  to="/book" 
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Book Now
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;