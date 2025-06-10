"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Alicia R.",
    quote:
      "My daughter comes home every day smiling and excited to tell me what she learned. The teachers are truly amazing!",
    image: "/alicia-r.png",
  },
  {
    name: "Jamal K.",
    quote:
      "The staff is so patient and thoughtful. I always feel my son is safe and supported.",
    image: "/jamal-k.png",
  },
  {
    name: "Emily T.",
    quote:
      "I toured a few daycares before finding Shining Stars — nothing compares. The warmth here is real.",
    image: "/emily.png",
  },
];

export default function TestimonialSection() {
  return (
    <section className="bg-[#fffaf4] py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-heading text-green-700">What Parents Say</h2>
        <p className="text-[#4b4b4b] mt-4 max-w-2xl mx-auto">
          Real stories from real families who trust and love Shining Stars.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center"
          >
            <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={80}
                height={80}
                className="object-cover"
              />
            </div>
            <p className="italic text-[#333]">“{testimonial.quote}”</p>
            <p className="mt-4 font-semibold text-green-700">— {testimonial.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}