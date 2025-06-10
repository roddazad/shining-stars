'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function WhatWeDo() {
  return (
    <section className="relative py-20 px-6 md:px-16 overflow-hidden">
      {/* 🌄 Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/whatwedo-bg.png" 
          alt="What We Do Background"
          fill
          className="object-cover"
        />
        {/* 🌫️ Optional Overlay */}
        <div className="absolute inset-0 bg-[#fff7f3]/80"></div>
      </div>

      {/* 🌟 Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Image */}
        <div className="relative w-full md:w-1/2">
          <Image
            src="/children-sky.png"
            alt="Child reading a book"
            width={500}
            height={500}
            className="rounded-xl shadow-md object-cover w-full"
          />
        </div>

        {/* Right Text Content */}
        <div className="w-full md:w-1/2 space-y-6 text-[#2b2b2b]">
          <h2 className="text-4xl font-heading text-pink-600">Our Philosophy</h2>
          <p>
            At Shining Stars Daycare, we provide personalized care and education in a safe and engaging environment, nurturing each child's growth.
          </p>
          <p>
            Our approach blends structured learning with creative play, tailored to enhance cognitive, social, and emotional development.
          </p>
          <p>
            We prioritize inclusivity and active collaboration with parents, ensuring that every child thrives and every family feels valued.
          </p>
          <p>
            Join us to foster a strong foundation for your child’s bright future.
          </p>
         <div className="flex flex-wrap gap-4 mt-4">
            <Link
                href="/about-daycare"
                className="bg-pink-600 text-white px-6 py-4 rounded-full font-semibold hover:bg-pink-700 transition"
            >
                Learn More
            </Link>
            <Link
                href="/contact"
                className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition"
            >
                Join Us
            </Link>
        </div>
        </div>
      </div>
    </section>
  );
}