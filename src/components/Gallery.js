'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const images = [
  {
    src: '/daycare/daycare1.jpg',
    alt: 'Daycare environment showing children playing',
  },
  {
    src: '/daycare/daycare2.jpg',
    alt: 'Children engaged in learning activities',
  },
  {
    src: '/daycare/daycare3.jpg',
    alt: 'Outdoor play area at the daycare',
  },
  {
    src: '/daycare/daycare4.jpg',
    alt: 'Indoor learning space with educational materials',
  },
  {
    src: '/daycare/daycare5.jpg',
    alt: 'Children participating in group activities',
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
        <img
          src="/daycare/hero.png"
          alt="Daycare Gallery Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Our Gallery
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto px-4">
              A glimpse into our nurturing environment where every moment is filled with joy and learning
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <section className="py-16 px-6 md:px-16 bg-[#fffaf4]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-heading text-center text-green-700 mb-4">
            Our Daycare Gallery
          </h2>
          <p className="text-[#2b2b2b] text-center mb-12 max-w-2xl mx-auto">
            Take a peek into our vibrant learning environment where every day is filled with joy, discovery, and growth.
          </p>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg"
                onClick={() => setSelectedImage(image)}
              >
                <div className="aspect-w-4 aspect-h-3 relative">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m4-3H6"
                    />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Modal for enlarged image */}
          {selectedImage && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
              onClick={() => setSelectedImage(null)}
            >
              <div className="relative max-w-4xl w-full">
                <button
                  className="absolute -top-12 right-0 text-white hover:text-green-400 transition-colors"
                  onClick={() => setSelectedImage(null)}
                >
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <div className="relative aspect-w-16 aspect-h-9">
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
} 