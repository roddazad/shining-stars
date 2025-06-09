'use client';

import { motion, AnimatePresence } from 'framer-motion';

export default function Modal({ isOpen, onClose, content }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          className="bg-white max-w-lg w-full rounded-2xl shadow-2xl overflow-hidden relative"
        >
          {/* Image */}
          <img
            src={content.image}
            alt={content.title}
            className="w-full h-52 object-cover"
          />

          {/* Content */}
          <div className="p-6 space-y-4 text-[#2b2b2b]">
            <h3 className="text-2xl font-bold font-heading">{content.title}</h3>
            <p className="text-sm">{content.description}</p>

            {content.extra && <p className="text-sm">{content.extra}</p>}

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 mt-4">
              <a
                href="/book-a-tour"
                className="bg-green-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-green-700 transition"
              >
                Book a Tour
              </a>
              {content.cta && (
                <a
                  href={content.cta.link}
                  className="bg-gray-200 text-sm text-[#2b2b2b] px-4 py-2 rounded-full hover:bg-gray-300 transition"
                >
                  {content.cta.label}
                </a>
              )}
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl"
          >
            &times;
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}