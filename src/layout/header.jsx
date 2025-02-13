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
    <>
      {/* Spacer div to prevent content from going under fixed header */}
      <div className="h-[76px] md:h-[88px] w-full" /> 
      
      {/* Fixed header container */}
      <div className="fixed top-3 left-0 right-0 px-[20px] md:px-0 z-50">
        <div className="border-[#197686] border-[1px] rounded-[12px] md:rounded-[24px] max-w-[1200px] head mx-auto bg-[#041E23]"> {/* Added bg color */}
          <div className="flex justify-between items-center h-full py-[12px] px-[16px]">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img src="thumb.svg" alt="Logo" className="h-8 w-auto" />
              <div className="text-2xl font-bold text-[#197686]">
                <Logo />
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8 text-white">
              <a href="/" className="hover:text-[#197686] text">Events</a>
              <a href="/tickets" className="hover:text-[#197686] text">My Tickets</a>
              <a href="/projects" className="hover:text-[#197686] text">About Project</a>
            </div>

            <div className="flex items-center">
              {/* Button */}
              <button className="btn uppercase flex text-[14px] md:text-[16px] items-center gap-2 px-[16px] py-[12px] md:px-[24px] md:py-[16px]">
                My Tickets 
                <Line />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;