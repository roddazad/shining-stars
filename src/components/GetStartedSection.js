"use client";

import Image from "next/image";
import Link from "next/link";

export default function GetStartedSection() {
  return (
    <section className="bg-[#fffaf4] py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Image */}
        <div className="relative w-full md:w-1/2">
          <Image
            src="/about-daycare/hero.png"
            alt="Our Daycare Environment"
            width={500}
            height={500}
            className="relative z-10 rounded-xl shadow-md object-cover w-full"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 space-y-6 text-[#2b2b2b]">
          <h2 className="text-4xl font-heading text-pink-600">
            Let's Get Started Together
          </h2>
          <p>
            Explore our warm, nurturing environment, meet our team, and discover how Shining Stars supports every child's journey.
          </p>
          <p>
            Schedule a visit or start your enrollment process — we'd love to meet you!
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <Link
              href="/enrollment"
              className="bg-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-700 transition"
            >
              Start Enrollment
            </Link>
            <Link
              href="/enrollment"
              className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition"
            >
              Book a Tour
            </Link>
          </div>

          <p className="text-lg font-medium mt-16 text-center">
            Don't know where to start from? <Link href="/contact" className="text-green-600 hover:text-green-700 underline">Contact us</Link> and we'll guide you through the process.
          </p>
        </div>
      </div>
    </section>
  );
}
