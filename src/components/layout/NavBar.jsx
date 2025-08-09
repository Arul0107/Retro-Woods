import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Bell, Plus, User } from 'lucide-react'; // Removed ChevronDown and MessageSquare
import olxLogo from '../../assets/logo.png';

const NavBar = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  // Removed showLanguageMenu state

  // Dynamic data for profile menu
  const userProfileMenuItems = [
    { key: 'profile', label: 'My Profile' },
    { key: 'ourproducts', label: 'Our Products', path: '/our-products' }, // Added path for navigation
    { key: 'logout', label: 'Log Out' },
  ];

  return (
    <header className="navbar-header">
      <style>
        {`
        .navbar-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background-color: #fff;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
          z-index: 50;
          padding: 1rem; /* p-4 */
          font-family: 'Inter', sans-serif;
        }

        .navbar-container {
          display: flex;
          flex-direction: column; /* flex-col */
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .navbar-logo-container {
          flex-shrink: 0;
          margin-bottom: 1rem; /* mb-4 */
        }

        .navbar-logo {
          height: 30px; /* Adjust as needed */
        }

        .navbar-search-container {
          display: none; /* hidden */
          flex-grow: 1;
          max-width: 40rem; /* max-w-xl */
          margin-left: 1rem; /* mx-4 */
          margin-right: 1rem; /* mx-4 */
          border: 2px solid #002f34;
          border-radius: 0.375rem; /* rounded-md */
          overflow: hidden;
        }

        .navbar-search-location-input {
          width: 33.333333%; /* w-1/3 */
          padding: 0.5rem; /* p-2 */
          border-right: 1px solid #d1d5db; /* border-gray-300 */
          outline: none; /* focus:outline-none */
          border-top-left-radius: 0.375rem; /* rounded-l-md */
          border-bottom-left-radius: 0.375rem; /* rounded-l-md */
        }

        .navbar-search-main-input {
          flex-grow: 1;
          padding: 0.5rem; /* p-2 */
          outline: none; /* focus:outline-none */
        }

        .navbar-search-button {
          background-color: #002f34;
          color: white;
          padding: 0.5rem; /* p-2 */
          display: flex;
          align-items: center;
          justify-content: center;
          border-top-right-radius: 0.375rem; /* rounded-r-md */
          border-bottom-right-radius: 0.375rem; /* rounded-r-md */
          border: none;
          cursor: pointer;
        }

        .navbar-actions-container {
          display: flex;
          align-items: center;
          gap: 1rem; /* space-x-4 */
        }

        .navbar-dropdown-button {
          color: #002f34;
          display: flex;
          align-items: center;
          outline: none;
          background: none;
          border: none;
          cursor: pointer;
        }

        .navbar-dropdown-menu {
          position: absolute;
          right: 0;
          margin-top: 0.5rem; /* mt-2 */
          width: 8rem; /* w-32 */
          background-color: white;
          border-radius: 0.375rem; /* rounded-md */
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-lg */
          padding-top: 0.25rem; /* py-1 */
          padding-bottom: 0.25rem; /* py-1 */
          z-index: 50;
        }

        .navbar-profile-dropdown-menu {
          width: 12rem; /* w-48 */
        }

        .navbar-dropdown-item {
          display: block;
          padding: 0.5rem 1rem; /* px-4 py-2 */
          font-size: 0.875rem; /* text-sm */
          color: #4b5563; /* text-gray-700 */
          text-decoration: none;
          border-radius: 0.25rem; /* rounded */
        }

        .navbar-dropdown-item:hover {
          background-color: #f3f4f6; /* hover:bg-gray-100 */
        }

        .navbar-divider {
          margin-top: 0.25rem; /* my-1 */
          margin-bottom: 0.25rem; /* my-1 */
          border-top: 1px solid #e5e7eb; /* border-gray-200 */
        }

        .navbar-icon-link {
          color: #002f34;
        }

        .navbar-avatar {
          width: 2rem; /* w-8 */
          height: 2rem; /* h-8 */
          border-radius: 9999px; /* rounded-full */
          background-color: #fde3cf;
          color: #f56a00;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.875rem; /* text-sm */
          font-weight: bold;
        }

        .navbar-sell-button {
          background-color: white;
          border: 2px solid #002f34;
          color: #002f34;
          font-weight: bold;
          padding: 0.5rem 1.5rem; /* py-2 px-6 */
          border-radius: 9999px; /* rounded-full */
          transition-property: background-color, color; /* transition-colors */
          transition-duration: 300ms; /* duration-300 */
          display: flex;
          align-items: center;
          cursor: pointer;
        }

        .navbar-sell-button:hover {
          background-color: #002f34;
          color: white;
        }

        .navbar-sell-button svg {
          margin-right: 0.5rem; /* mr-2 */
        }

        /* Responsive adjustments */
        @media (min-width: 768px) { /* md breakpoint */
          .navbar-header {
            padding-left: 2rem; /* md:px-8 */
            padding-right: 2rem; /* md:px-8 */
          }

          .navbar-container {
            flex-direction: row; /* md:flex-row */
          }

          .navbar-logo-container {
            margin-bottom: 0; /* md:mb-0 */
          }

          .navbar-search-container {
            display: flex; /* md:flex */
          }

          .navbar-actions-container {
            gap: 1.5rem; /* md:space-x-6 */
          }
        }
          .navbar-logo {
            width: 150px; /* Adjust logo width */
          }
        `}
      </style>
      <div className="navbar-container">
        {/* Left Section: Logo */}
        <div className="navbar-logo-container">
          <Link to="/buy">
            <img
              src={olxLogo}
              alt="OLX Logo"
              className="navbar-logo"
            />
          </Link>
        </div>

        {/* Right Section: Actions */}
        <div className="navbar-actions-container">

          <Link to="/favorites">
            <Heart size={24} className="navbar-icon-link" />
          </Link>

          <Link to="/notifications">
            <Bell size={24} className="navbar-icon-link" />
          </Link>

          {/* Profile Dropdown */}
        

          <Link to="/admin">
            <button className="navbar-sell-button">
              <Plus size={20} />
              Admin
            </button>
          </Link>
          <Link to="/sell">
            <button className="navbar-sell-button">
              <Plus size={20} />
              SELL
            </button>
          </Link>
            <div className="relative">
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="navbar-dropdown-button"
            >
              <div className="navbar-avatar">
                <User size={20} />
              </div>
            </button>
            {showProfileMenu && (
              <div className="navbar-dropdown-menu navbar-profile-dropdown-menu">
                {userProfileMenuItems.map((item) => (
                  item.type === 'divider' ? (
                    <hr key={item.key} className="navbar-divider" />
                  ) : (
                    <Link
                      key={item.key}
                      to={item.path || '#'} // Use item.path for navigation, fallback to '#'
                      className="navbar-dropdown-item"
                      onClick={() => setShowProfileMenu(false)}
                    >
                      {item.label}
                    </Link>
                  )
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;