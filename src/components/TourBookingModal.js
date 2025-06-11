'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Script from 'next/script';

export default function TourBookingModal({ isOpen, onClose }) {
  const [isCalendlyLoaded, setIsCalendlyLoaded] = useState(false);

  useEffect(() => {
    if (isOpen && window.Calendly) {
      window.Calendly.initInlineWidget({
        url: 'https://calendly.com/roddazad/30min',
        parentElement: document.querySelector('.calendly-container'),
        prefill: {},
        utm: {}
      });
      setIsCalendlyLoaded(true);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 md:p-6 overflow-y-auto"
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden relative flex flex-col my-8"
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-200 flex-shrink-0">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900">Schedule a Tour</h2>
                <button
                  onClick={onClose}
                  className="text-gray-500 hover:text-gray-800 text-2xl"
                >
                  &times;
                </button>
              </div>
              <p className="text-gray-600 mt-2">
                Choose a convenient time to visit our facility and learn more about our programs.
                Tours are scheduled for 30 minutes to ensure we can show you everything our daycare has to offer.
              </p>
            </div>

            {/* Calendly Container */}
            <div className="flex-1 relative" style={{ height: '70vh' }}>
              {!isCalendlyLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-white">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading calendar...</p>
                  </div>
                </div>
              )}
              <div className="calendly-container h-full" style={{ minHeight: '500px' }} />
            </div>

            {/* Footer */}
            <div className="p-4 bg-white border-t border-gray-200 flex-shrink-0">
              <p className="text-sm text-gray-600 text-center">
                Need help scheduling? Contact us at{' '}
                <a href="mailto:Roshanak87.davoodi@gmail.com" className="text-green-600 hover:text-green-700">
                  Roshanak87.davoodi@gmail.com
                </a>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  );
} 