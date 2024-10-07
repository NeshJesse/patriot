"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full bg-white shadow-lg fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/social.png"  // Add your logo image here
                alt="Protest Organizer Logo"
                width={30}
                height={40}
                className="cursor-pointer"
              />
              
            </Link>
            <p>InjectBuddy</p>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/features" className="text-gray-700 hover:text-blue-600 text-lg font-medium">
              Features
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 text-lg font-medium">
              About
            </Link>
          </div>

          {/* Call to Action */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/signup">
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/features"
            className="block text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md text-base font-medium"
            >
              Features
            </Link>
            <Link href="/about"
            className="block text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </Link>
            <Link href="/signup" className="block bg-blue-500 text-white text-center mt-2 px-3 py-2 rounded-md">
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
