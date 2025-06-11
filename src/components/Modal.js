'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import TourBookingModal from './TourBookingModal';
import Link from 'next/link';

export default function Modal({ isOpen, onClose, content }) {
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);

  if (!isOpen) return null;

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 md:p-6"
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className="bg-white w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden relative flex flex-col md:flex-row"
          >
            {/* Left Column - Image and Quick Info */}
            <div className="w-full md:w-1/2 relative flex-shrink-0">
              <img
                src={content.image}
                alt={content.title}
                className="w-full h-48 md:h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white md:hidden">
                <h3 className="text-2xl font-bold font-heading">{content.title}</h3>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="w-full md:w-1/2 flex flex-col h-[90vh] md:h-auto">
              {/* Header */}
              <div className="p-6 border-b border-gray-100 flex-shrink-0">
                <div className="flex justify-between items-start">
                  <div className="hidden md:block">
                    <h3 className="text-2xl font-bold font-heading text-gray-900">{content.title}</h3>
                    <div className="mt-2 h-1 w-20 bg-green-600 rounded-full"></div>
                  </div>
                  <button
                    onClick={onClose}
                    className="text-gray-500 hover:text-gray-800 text-2xl transition-colors"
                  >
                    &times;
                  </button>
                </div>
              </div>

              {/* Main Content - Make this section scrollable */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {/* Description */}
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">{content.description}</p>
                  {content.extra && (
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-700">{content.extra}</p>
                    </div>
                  )}
                </div>

                {/* Features List (if available) */}
                {content.features && (
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Key Features:</h4>
                    <ul className="space-y-2">
                      {content.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Testimonial (if available) */}
                {content.testimonial && (
                  <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                    <p className="text-gray-700 italic">"{content.testimonial.quote}"</p>
                    <p className="text-sm text-gray-600 mt-2">- {content.testimonial.author}</p>
                  </div>
                )}
              </div>

              {/* Footer - Action Buttons */}
              <div className="p-6 border-t border-gray-100 bg-gray-50 flex-shrink-0">
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/enrollment"
                    className="flex-1 bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition text-center"
                  >
                    Get Started
                  </Link>
                  <Link
                    href="/contact"
                    className="flex-1 bg-white text-gray-700 border border-gray-300 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition text-center"
                  >
                    Contact Us
                  </Link>
                  {content.cta && (
                    <a
                      href={content.cta.link}
                      className="flex-1 bg-white text-gray-700 border border-gray-300 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition text-center"
                    >
                      {content.cta.label}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Tour Booking Modal */}
      <TourBookingModal
        isOpen={isTourModalOpen}
        onClose={() => setIsTourModalOpen(false)}
      />
    </>
  );
}