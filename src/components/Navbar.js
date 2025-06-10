'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Our Daycare', href: '/about-daycare' },
    { name: 'About Us', href: '/about' },
    { name: 'Enrollment & FAQs', href: '/enrollment' },
    { name: 'Book a Tour', href: '/book-a-tour' },
    { name: 'Gallery', href: '/gallery' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Brand */}
          <Link href="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="Shining Stars Logo"
              className="h-14 md:h-14 w-auto transition-transform hover:scale-105"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-heading text-green-700 tracking-wide">
                SHINING STARS
              </span>
              <span className="text-xs text-[#2b2b2b] font-medium tracking-wide">
                ✨DAYCARE✨
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#2b2b2b] hover:text-green-700 transition"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="text-sm bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition font-semibold"
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
          <Link
            href="/contact"
            className="block text-green-700 font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}