

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation(); // Hook to get the current route location

  // Function to toggle the dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Function to handle the hamburger menu toggle
  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  // Close the dropdown when the route changes
  useEffect(() => {
    setIsDropdownOpen(false); // Close dropdown when navigating to a new page
    setMenuOpen(false);       // Also close the mobile menu if it's open
  }, [location]); // Run this effect when the route (location) changes

  return (
    <header className="bg-[#7E60BF] p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src="logo.png" alt="logo" className="h-8 w-8" />
        </div>

        {/* Hamburger Menu for mobile */}
        <div className="block lg:hidden">
          <HamburgerMenu
            isOpen={menuOpen}
            menuClicked={handleMenuClick}
            width={28}
            height={20}
            strokeWidth={3}
            rotate={0}
            color="white"
            borderRadius={2}
            animationDuration={0.5}
          />
        </div>

        {/* Full Navigation */}
        <nav
          className={`lg:flex lg:space-x-4 ${menuOpen ? 'block ' : 'hidden '}
          flex-col lg:flex-row bg-[#7E60BF] lg:bg-transparent absolute lg:static top-16 left-0 w-full lg:w-auto z-50`}
        >
          <Link
            to="/"
            className="text-white hover:text-gray-300 py-2 px-4 block lg:inline-block"
          >
            Home
          </Link>

          {/* Dropdown for Journal Overview */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="text-white hover:text-gray-300 py-2 px-4 block lg:inline-block focus:outline-none"
            >
              Journal Overview ▼
            </button>
            {isDropdownOpen && (

              <div className="absolute bg-white text-black mt-2 rounded shadow-lg w-48">
                <Link
                  to="/aboutus"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  About
                </Link>
                <Link
                  to="/editorial-board"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Editorial Board
                </Link>
                <Link
                  to="/peerreview"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Peer Review Process
                </Link>
                <Link
                  to="/publicationethic"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Publication Ethics
                </Link>
                <Link
                  to="/abstracting"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Abstracting and Indexing
                </Link>
                <Link
                  to="/articleProcess"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Article Processing Charges
                </Link>

                <Link
                  to="/aim-nd-scope"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Aim and Scope
                </Link>

                <Link
                  to="/issues"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Issues
                </Link>

                <Link
                  to="/author-guidelines"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Author Guidelines
                </Link>

                <Link
                  to="/copyrights-form"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Copyright Form
                </Link>
              </div>



            )}
          </div>

          <Link
            to="/contactus"
            className="text-white hover:text-gray-300 py-2 px-4 block lg:inline-block"
          >
            Contact
          </Link>

          <Link
            to="/submit"
            className="text-white hover:text-gray-300 py-2 px-4 block lg:inline-block"
          >
            Submit New Manuscript <span></span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
