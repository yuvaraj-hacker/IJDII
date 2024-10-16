import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu';
import { IoMdArrowDropdown } from "react-icons/io";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const [menuOpen, setMenuOpen] = useState(false);

  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  // Reset dropdown and menu when route changes
  useEffect(() => {
    setIsDropdownOpen(false);
    setMenuOpen(false);
  }, [location]);

  return (
    <header className="bg-[#4b2d8b] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to='/'>
          <div className="flex items-center">
            <p className="text-3xl text-white">IJDIII</p>
          </div>
        </Link>

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
          flex-col lg:py-0 py-5  lg:flex-row  bg-[#7E60BF] lg:bg-transparent absolute lg:static top-16 left-0 w-full text-center lg:w-auto z-50`}
        >
          <Link
            to="/"
            className={`text-white py-2 px-4 block lg:inline-block ${isActive("/") ? "underline underline-offset-4" : ""}`}
          >
            Home
          </Link>

          {/* Dropdown for Journal Overview */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="text-white hover:text-gray-300 inline-flex py-2 px-4 gap-2 focus:outline-none"
            >
              Journal Overview
              <IoMdArrowDropdown className={`${isDropdownOpen ? 'rotate-180' : 'rotate-0'} text-2xl duration-300`} />
            </button>
            {isDropdownOpen && (
              <div className="absolute lg:left-0 md:left-96 left-28 bg-white text-black mt-2 rounded shadow-lg w-56">
                <Link
                  to="/aboutus"
                  className={`block px-4 py-2 hover:bg-gray-200 ${isActive("/aboutus") ? "underline underline-offset-4" : ""}`}
                >
                  About
                </Link>
                <Link
                  to="/editorial-board"
                  className={`block px-4 py-2 hover:bg-gray-200 ${isActive("/editorial-board") ? "underline underline-offset-4" : ""}`}
                >
                  Editorial Board
                </Link>
                <Link
                  to="/peerreview"
                  className={`block px-4 py-2 hover:bg-gray-200 ${isActive("/peerreview") ? "underline underline-offset-4" : ""}`}
                >
                  Peer Review Process
                </Link>
                <Link
                  to="/publicationethic"
                  className={`block px-4 py-2 hover:bg-gray-200 ${isActive("/publicationethic") ? "underline underline-offset-4" : ""}`}
                >
                  Publication Ethics
                </Link>
                <Link
                  to="/abstracting"
                  className={`block px-4 py-2 hover:bg-gray-200 ${isActive("/abstracting") ? "underline underline-offset-4" : ""}`}
                >
                  Abstracting and Indexing
                </Link>
                <Link
                  to="/articleprocess"
                  className={`block px-4 py-2 hover:bg-gray-200 ${isActive("/articleprocess") ? "underline underline-offset-4" : ""}`}
                >
                  Article Processing Charges
                </Link>
                <Link
                  to="/aim-nd-scope"
                  className={`block px-4 py-2 hover:bg-gray-200 ${isActive("/aim-nd-scope") ? "underline underline-offset-4" : ""}`}
                >
                  Aim and Scope
                </Link>
                <Link
                  to="/issues"
                  className={`block px-4 py-2 hover:bg-gray-200 ${isActive("/issues") ? "underline underline-offset-4" : ""}`}
                >
                  Issues
                </Link>
                <Link
                  to="/author-guidelines"
                  className={`block px-4 py-2 hover:bg-gray-200 ${isActive("/author-guidelines") ? "underline underline-offset-4" : ""}`}
                >
                  Author Guidelines
                </Link>
                <Link
                  to="/copyrights-form"
                  className={`block px-4 py-2 hover:bg-gray-200 ${isActive("/copyrights-form") ? "underline underline-offset-4" : ""}`}
                >
                  Copyright Form
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/contactus"
            className={`text-white hover:text-gray-300 py-2 px-4 block lg:inline-block ${isActive("/contactus") ? "underline underline-offset-4" : ""}`}
          >
            Contact
          </Link>

          <Link
            to="/submit"
            className="text-white hover:text-gray-300 py-2 px-4 block lg:inline-block"
          >
            Submit New Manuscript
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
