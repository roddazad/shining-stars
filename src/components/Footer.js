import React from 'react';
import Link from 'next/link';

const Star = ({ className = "" }) => (
  <svg 
    className={`inline-block ${className}`} 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-[#cceeff] via-[#fffaf4] to-[#fff7f3] text-[#2b2b2b] overflow-hidden">
      {/* Decorative Stars */}
      <div className="absolute inset-0 pointer-events-none">
        <Star className="absolute top-10 left-10 text-yellow-400 opacity-20 w-6 h-6" />
        <Star className="absolute top-20 right-20 text-pink-400 opacity-20 w-8 h-8" />
        <Star className="absolute bottom-20 left-1/4 text-green-400 opacity-20 w-5 h-5" />
        <Star className="absolute bottom-10 right-1/4 text-blue-400 opacity-20 w-7 h-7" />
        <Star className="absolute top-1/3 right-1/3 text-purple-400 opacity-20 w-6 h-6" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4 text-green-700 flex items-center">
              Shining Stars Daycare
              <Star className="ml-2 text-yellow-400 w-5 h-5" />
            </h3>
            <p className="flex items-center space-x-2 text-[#2b2b2b]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>13402 Seattle Hill Road, Mill Creek, WA 98012</span>
            </p>
            <p className="flex items-center space-x-2 text-[#2b2b2b]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>(425) 625-3236</span>
            </p>
            <p className="flex items-center space-x-2 text-[#2b2b2b]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>roshanak87.davoodi@gmail.com</span>
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4 text-green-700">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-[#2b2b2b] hover:text-green-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/about-daycare" className="text-[#2b2b2b] hover:text-green-600 transition-colors">
                  Our Daycare
                </Link>
              </li>
              <li>
                <Link href="/enrollment" className="text-[#2b2b2b] hover:text-green-600 transition-colors">
                  Enrollment
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#2b2b2b] hover:text-green-600 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media & Hours */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4 text-green-700">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-[#2b2b2b] hover:text-green-600 transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a href="#" className="text-[#2b2b2b] hover:text-green-600 transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                </svg>
              </a>
              <a href="#" className="text-[#2b2b2b] hover:text-green-600 transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                </svg>
              </a>
            </div>
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-2 text-green-700">Hours of Operation</h4>
              <p className="text-[#2b2b2b]">Monday - Friday: 7:00 AM - 6:00 PM</p>
              <p className="text-[#2b2b2b]">Saturday: 8:00 AM - 2:00 PM</p>
              <p className="text-[#2b2b2b]">Sunday: Closed</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-green-200 text-center">
          <p className="text-sm text-[#2b2b2b]">
            © {new Date().getFullYear()} Shining Stars Daycare. All rights reserved.
          </p>
          <p className="text-sm mt-2 text-[#2b2b2b]">
            Designed with <span className="text-pink-500">Love</span> for your little stars by <a href="https://code-nest.dev" className="text-green-600 hover:text-green-700 transition-colors">CodeNest</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 