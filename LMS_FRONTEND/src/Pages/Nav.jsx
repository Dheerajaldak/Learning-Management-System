import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { FaSearch, FaUser, FaTimes } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../Redux/Slices/AuthSlice';
import { FaSearch, FaUser, FaTimes, FaUserCog, FaBook, FaSignOutAlt, FaUserPlus, FaSignInAlt } from 'react-icons/fa'; // Import icons

// import { FaUserCog } from "react-icons/fa";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef(null);
  const searchRef = useRef(null);
  const dropdownRef = useRef(null);
  const userData = useSelector((state) => state?.auth?.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isProfileHovered, setIsProfileHovered] = useState(false); // New state for profile hover

  const toggleDropdown = () => setShowDropdown(!showDropdown);
  const toggleSearch = () => {
    setShowSearch(!showSearch);
    if (!showSearch) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
  };

  const handleSearchClear = () => setSearchQuery('');

  const handleLogout = async (e) => {
    e.preventDefault();
    const res = await dispatch(logout());
    if (res?.payload?.success) {
      setShowDropdown(false);
      navigate('/');
    } else {
      console.error('Logout failed. Please try again!');
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !searchRef.current?.contains(event.target) &&
        showDropdown
      ) {
        setShowDropdown(false);
      }
      if (!searchRef.current?.contains(event.target)) {
        setShowSearch(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showDropdown, showSearch]);

  return (
    <nav className="top-0 z-50 w-full py-4 lg:py-6 px-4 sm:px-8">
      <div className="h-6 container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
          {/* Logo can be inserted here */}
        </Link>
        <div className="flex items-center space-x-4 sm:space-x-6">
          {showSearch ? (
            <div ref={searchRef} className="relative flex items-center">
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border px-4 py-1 rounded-full bg-transparent dark:bg-gray-800 dark:text-white text-black"
              />
              {searchQuery && (
                <button
                  onClick={handleSearchClear}
                  className="absolute right-2 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white"
                >
                  <FaTimes className="h-4 w-4" />
                </button>
              )}
            </div>
          ) : (
            <button
              onClick={toggleSearch}
              className="text-gray-500 hover:text-gray-700 transition-colors dark:text-gray-300 dark:hover:text-white"
            >
              <FaSearch className="h-5 w-5" />
            </button>
          )}

          <div 
            className="relative flex items-center" 
            onMouseEnter={() => setIsProfileHovered(true)} 
            onMouseLeave={() => setIsProfileHovered(false)}
          >
            <button
              onClick={toggleDropdown}
              className="text-gray-500 hover:text-gray-700 transition-colors dark:text-gray-300 dark:hover:text-white"
            >
              {userData ? (
                <img
                  src={userData?.avatar?.secure_url}
                  alt="User Avatar"
                  className="h-9 w-9 rounded-full border-2 border-gray-300 dark:border-gray-600"
                />
              ) : (
                <FaUser className="h-5 w-5" />
              )}
            </button>

            {/* Text appears on hover */}
            <div className="absolute left-0 top-[-20px] text-gray-600 dark:text-white hidden group-hover:block">
              <span>{userData ? 'Profile' : 'Login'}</span>
            </div>

            {/* Profile Hover Card */}
            {isProfileHovered && userData && (
              <div className="absolute top-10 right-[-10px] bg-[#464b4f] text-[#f0f0f0] p-2 rounded-md shadow-2xl tracking-wider">
              <div className="font-semibold text-[13px] ">LMS Account</div>
              <div className="text-[12px] ">{userData.fullName}</div>
              <div className="text-[12px]">{userData.email}</div>
            </div>
            )}

            {showDropdown && (
            <div
            ref={dropdownRef}
            className="absolute right-0 top-10 w-48 bg-white text-gray-600 rounded-lg shadow-lg py-2 transition-all duration-300 dark:bg-gray-800 dark:text-white"
          >
            <button
              onClick={() => setShowDropdown(false)}
              className="absolute top-1 right-1 text-gray-500 hover:text-white dark:text-gray-300 dark:hover:text-white hover:bg-red-500 "
            >
              <FaTimes className="h-3 w-3" />
            </button>
            {userData ? (
              <>
                <Link
                  to="/user/profile"
                  className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100 transition-colors dark:hover:bg-gray-700"
                >
                  <FaUserCog className="mr-2" />
                  My Profile
                </Link>
                <Link
                  to="/courses"
                  className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100 transition-colors dark:hover:bg-gray-700"
                >
                  <FaBook className="mr-2" />
                  Courses
                </Link>
                <Link
                  onClick={handleLogout}
                  className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100 transition-colors dark:hover:bg-gray-700"
                >
                  <FaSignOutAlt className="mr-2" />
                  Logout
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/signup"
                  className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100 transition-colors dark:hover:bg-gray-700"
                >
                  <FaUserPlus className="mr-2" />
                  Create Account
                </Link>
                <Link
                  to="/login"
                  className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100 transition-colors dark:hover:bg-gray-700"
                >
                  <FaSignInAlt className="mr-2" />
                  Login
                </Link>
              </>
            )}
          </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;