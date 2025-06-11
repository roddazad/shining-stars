'use client';

import Link from 'next/link';
import { useState } from 'react';
import TourBookingModal from './TourBookingModal';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);

  const navLinks = [
    { name: 'Our Daycare', href: '/about-daycare' },
    { name: 'About Us', href: '/about' },
    { name: 'Enrollment & FAQs', href: '/enrollment' },
    { name: 'Gallery', href: '/gallery' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Brand */}
            <Link href="/" className="flex items-center">
              <img
                src="/logo.png"
                alt="Shining Stars Logo"
                className="h-16 md:h-16 w-auto transition-transform hover:scale-105"
              />
              <div className="flex flex-col leading-tight ml-3">
                <span className="text-2xl font-heading text-green-700 tracking-wide">
                  SHINING STARS
                </span>
                <span className="text-sm text-[#2b2b2b] font-medium tracking-wide">
                  ✨DAYCARE✨
                </span>
              </div>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-[#2b2b2b] hover:text-green-700 transition"
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={() => setIsTourModalOpen(true)}
                className="text-base bg-green-600 text-white px-6 py-2.5 rounded-full hover:bg-green-700 transition font-semibold"
              >
                Book a Tour
              </button>
              <Link
                href="/contact"
                className="text-base bg-gray-100 text-[#2b2b2b] px-6 py-2.5 rounded-full hover:bg-gray-200 transition font-semibold"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-[#2b2b2b] focus:outline-none text-xl"
                aria-label="Toggle Menu"
              >
                ☰
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-[#cceeff] px-4 py-3 space-y-2 shadow-md">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-[#2b2b2b] hover:text-green-700 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => {
                setIsOpen(false);
                setIsTourModalOpen(true);
              }}
              className="block w-full text-left text-green-700 font-semibold"
            >
              Book a Tour
            </button>
            <Link
              href="/contact"
              className="block text-[#2b2b2b] hover:text-green-700 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        )}
      </nav>

      {/* Tour Booking Modal */}
      <TourBookingModal
        isOpen={isTourModalOpen}
        onClose={() => setIsTourModalOpen(false)}
      />
    </>
  );
}