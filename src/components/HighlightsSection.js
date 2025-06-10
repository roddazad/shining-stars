'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Modal from './Modal';

export default function HighlightsSection() {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const features = [
    {
      title: "Loving Caregivers",
      text: "Our teachers aren't just certified — they're passionate, nurturing, and treat every child like their own.",
      bg: "bg-[#FDE68A]",
      description: "At Shining Stars, we believe that every child deserves warmth, consistency, and emotional safety. Our staff are trained in both child development and empathy-focused care.",
      features: [
        "Certified and experienced teachers",
        "Low teacher-to-child ratios",
        "Continuous professional development",
        "Warm and nurturing environment"
      ],
      testimonial: {
        quote: "The teachers at Shining Stars are amazing! They truly care about each child's development and happiness.",
        author: "Sarah M., Parent"
      },
      image: "/loving-caregivers.png"
    },
    {
      title: "Creative Play Spaces",
      text: "Our thoughtfully designed spaces encourage exploration, creativity, and safe play for every age group.",
      bg: "bg-[#A7F3D0]",
      description: "We've created engaging environments that stimulate learning through play. Each space is designed with safety, comfort, and developmental needs in mind.",
      features: [
        "Age-appropriate play areas",
        "Outdoor playground with safety features",
        "Indoor activity centers",
        "Art and music spaces"
      ],
      testimonial: {
        quote: "My daughter loves the play areas! There's always something new to explore and learn.",
        author: "Michael T., Parent"
      },
      image: "/play-place.png"
    },
    {
      title: "Wholesome Nutrition",
      text: "We provide balanced, nutritious meals and snacks that fuel growing bodies and minds.",
      bg: "bg-[#FECACA]",
      description: "Our nutrition program focuses on healthy, balanced meals that support children's growth and development. We accommodate dietary restrictions and allergies.",
      features: [
        "Nutritious, balanced meals",
        "Fresh fruits and vegetables",
        "Accommodation for allergies",
        "Healthy snack options"
      ],
      testimonial: {
        quote: "I love that my child gets healthy meals at daycare. The menu is always varied and nutritious.",
        author: "Lisa K., Parent"
      },
      image: "/nutrition.png"
    },
    {
      title: "Personalized Enrollment",
      text: "We make joining our family easy with a smooth, personalized enrollment process.",
      bg: "bg-[#BFDBFE]",
      description: "Our enrollment process is designed to be welcoming and stress-free. We take time to understand your family's needs and ensure a perfect fit.",
      features: [
        "Personalized tours",
        "Flexible scheduling options",
        "Clear communication",
        "Supportive transition process"
      ],
      testimonial: {
        quote: "The enrollment process was so smooth! The staff made us feel welcome from day one.",
        author: "David R., Parent"
      },
      image: "/enrollment.png"
    },
    {
      title: "Early Learning Foundations",
      text: "Our curriculum builds essential skills through play-based learning and structured activities.",
      bg: "bg-[#E9D5FF]",
      description: "We focus on developing key skills through age-appropriate activities that make learning fun and engaging.",
      features: [
        "Play-based learning approach",
        "Age-appropriate curriculum",
        "Social-emotional development",
        "Early literacy and numeracy"
      ],
      testimonial: {
        quote: "I'm amazed at how much my child has learned! The curriculum is perfect for their age.",
        author: "Emma W., Parent"
      },
      image: "/early-learning.png"
    },
    {
      title: "Family Communication",
      text: "Stay connected with your child's day through our comprehensive communication system.",
      bg: "bg-[#FEF3C7]",
      description: "We believe in keeping families informed and involved. Our communication tools help you stay connected with your child's daily activities and progress.",
      features: [
        "Daily activity updates",
        "Parent-teacher conferences",
        "Digital communication platform",
        "Regular progress reports"
      ],
      testimonial: {
        quote: "I love getting updates about my child's day. The communication is excellent!",
        author: "James P., Parent"
      },
      image: "/family-com.png"
    }
  ];

  return (
    <section className="py-20 px-6 md:px-16 bg-gradient-to-b from-[#fffaf4] to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading text-green-700 mb-6">
            Why Families Love Us
          </h2>
          <p className="text-lg text-[#4b4b4b] max-w-2xl mx-auto">
            Discover what makes Shining Stars the perfect place for your child's growth and development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${item.bg} p-8 rounded-2xl shadow-lg text-[#2b2b2b] flex flex-col justify-between transform hover:scale-105 transition-all duration-300`}
            >
              <div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-base mb-6">{item.text}</p>
              </div>
              <button
                onClick={() => setSelectedFeature(item)}
                className="w-full bg-white text-green-700 font-semibold px-6 py-3 rounded-full hover:bg-green-50 transition flex items-center justify-center gap-2"
              >
                <span>Learn More</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link
            href="/about-daycare"
            className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition shadow-lg hover:shadow-xl"
          >
            <span>Discover More About Our Daycare</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={!!selectedFeature}
        onClose={() => setSelectedFeature(null)}
        content={selectedFeature || {}}
      />
    </section>
  );
}