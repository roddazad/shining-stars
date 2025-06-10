'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
<section className="relative min-h-[75vh] flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 py-16 overflow-hidden">

  {/* 🌄 Background Image */}
  <Image
    src="/hero-bg.jpg"
    alt="Hero background"
    fill
    className="absolute inset-0 object-cover z-0"
    priority
  />

  {/*  Overlay */}
  <div className="absolute inset-0 bg-[#cceeff]/85 z-20"></div>

  {/*  Hero Content */}
  <div className="relative z-30 flex flex-col-reverse md:flex-row items-center justify-between w-full">
    
    
    {/* Left Text Content */}
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center md:text-left max-w-xl"
    >
      <h1 className="text-4xl md:text-5xl font-heading text-green-700 mb-4">
        Welcome to Shining Stars Daycare✨
      </h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-lg text-[#2b2b2b] font-medium mb-6"
      >
        ✨Where Little Minds Shine Bright Every Day ✨
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
      >
        <Link
          href="/book-a-tour"
          className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition"
        >
          Book a Tour
        </Link>
        <Link
          href="/about-daycare"
          className="bg-white text-green-700 border border-green-500 px-6 py-3 rounded-full font-semibold hover:bg-green-50 transition"
        >
          Explore Programs
        </Link>
      </motion.div>
    </motion.div>
    {/* Hero Logo & Highlights */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.9, duration: 0.6 }}
  className="mt-10 flex flex-col items-center space-y-4"
>
  {/*  Placeholder Logo */}
  <motion.img
    src="/logo.png" // Replace with your actual logo file name
    alt="Shining Stars Daycare logo"
    className="w-50 h-50 md:w-80 md:h-80 rounded-full object-cover shadow-lg border-4 border-white"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 1.0, duration: 0.6 }}
  />

  {/*  Highlight Lines */}
  <div className="text-center space-y-2 text-base text-[#2b2b2b] font-bold">
    <motion.p
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.1, duration: 0.4 }}
    >
     🌟 Caring, certified staff who treat your child like family 
    </motion.p>
    <motion.p
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.3, duration: 0.4 }}
    >
      🌟 Engaging activities that spark imagination & learning 
    </motion.p>
    <motion.p
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.5, duration: 0.4 }}
    >
      🌟 A safe, joyful space where every child shines 
    </motion.p>
  </div>
</motion.div>

    {/* Right: Hero Image */}
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="mb-10 md:mb-0 max-w-[600px]"
    >
      <Image
        src="/hero.png"
        alt="Children playing"
        width={600}
        height={600}
        className="rounded-xl shadow-lg w-[450px] h-[450px] object-cover"
      />
    </motion.div>
  </div>
</section>
  );
}