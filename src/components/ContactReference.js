'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ContactReference() {
  return (
    <section className="bg-gradient-to-br from-[#cceeff] to-[#fffaf4] py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-100 rounded-full opacity-50"></div>
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-pink-100 rounded-full opacity-50"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-heading text-green-700 mb-6 text-center">
              Have Questions? We're Here to Help!
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <p className="text-lg text-[#2b2b2b]">
                  Whether you're curious about our programs, want to schedule a tour, or need more information about enrollment, our team is ready to assist you.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="text-green-600">✨</span>
                    <span>Personalized guidance through the enrollment process</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-600">✨</span>
                    <span>Detailed information about our programs and curriculum</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-600">✨</span>
                    <span>Quick responses to all your questions</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex flex-col items-center justify-center space-y-6 bg-[#f8fafc] p-8 rounded-xl">
                <p className="text-xl font-medium text-center text-[#2b2b2b]">
                  Ready to get started? We'd love to hear from you!
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition shadow-lg hover:shadow-xl"
                >
                  <span>Contact Us Today</span>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <p className="text-sm text-gray-600 text-center">
                  We typically respond within 24 hours
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 