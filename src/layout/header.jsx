"use client"
import React, { useState } from 'react';
import Logo from '../../public/ticz';
import Line from '../../public/Line';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="border-[#197686] h-[76px] border-[1px] rounded-[24px] max-w-[1200px] mx-auto head relative">
      <div className="flex justify-between items-center h-full px-8">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="thumb.svg" alt="Logo" className="h-8 w-auto" />
          <div className="text-2xl font-bold text-[#197686]">
            <Logo />
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 text-white">
          <a href="#events" className="hover:text-[#197686] text">Events</a>
          <a href="#tickets" className="hover:text-[#197686] text">My Tickets</a>
          <a href="#projects" className="hover:text-[#197686] text">About Project</a>
        </div>

        <div className="flex items-center">
          {/* Button */}
          <button className="btn uppercase flex items-center gap-2">
            My Tickets 
            <Line />
          </button>
        </div>

        {/* Mobile Hamburger Icon */}
        {/* <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div> */}
      </div>

      {/* Mobile Navigation Links */}
      {/* {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 flex flex-col items-center bg-[#197686] text-white space-y-4 py-4 mt-1 rounded-[24px]">
          <a href="#home" className="hover:text-white/80">Home</a>
          <a href="#about" className="hover:text-white/80">About</a>
          <a href="#contact" className="hover:text-white/80">Contact</a>
          <button className="bg-white text-[#197686] px-4 py-2 rounded-md">Login</button>
        </div>
      )} */}
    </div>
  );
};

export default Header;