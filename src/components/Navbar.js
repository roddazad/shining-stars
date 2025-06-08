'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Daycare', href: '/about-daycare' },
    { name: 'Fees & FAQs', href: '/enrollment' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Book a Tour', href: '/book-a-tour' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#fefaf6] shadow-sm border-b border-[#f3e9e2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo + Brand Name */}
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/placeholder-logo.png"
              alt="Shining Stars Logo"
              className="h-8 w-8"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-bold text-[#e86f72] tracking-wide">SHINING STARS</span>
              <span className="text-xs text-gray-500 font-medium tracking-wide">DAYCARE</span>
            </div>
          </Link>

          {/* Center: Nav Links (hidden on small) */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-[#2b2b2b] hover:text-[#e86f72] transition"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right: Contact Us Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="text-sm bg-[#e86f72] text-white px-4 py-2 rounded hover:bg-[#d95e62] transition font-semibold"
            >
              CONTACT US
            </Link>
          </div>

          {/* Mobile Menu Button */}
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

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#fefaf6] shadow-md px-4 py-3 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block text-[#2b2b2b] hover:text-[#e86f72] font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block text-[#e86f72] font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}