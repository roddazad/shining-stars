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
        "Highly qualified staff with extensive experience",
        "Low teacher-to-child ratios for personalized attention",
        "Continuous professional development and training",
        "Strong emphasis on emotional intelligence",
        "Warm, nurturing environment for every child"
      ],
      testimonial: {
        quote: "The teachers at Shining Stars are amazing! They truly care about each child's development and well-being.",
        author: "Sarah M., Parent"
      },
      image: "/loving-caregivers.png"
    },
    {
      title: "Creative Play Spaces",
      text: "From story circles to outdoor adventures, our environment is built to spark joy and imagination.",
      bg: "bg-[#A7F3D0]",
      description: "Our classrooms and play areas are designed with both fun and learning in mind. Whether it's indoor creativity or outdoor exploration, there's always something new to discover.",
      features: [
        "Age-appropriate learning centers",
        "Safe, engaging outdoor play areas",
        "Dedicated spaces for arts and crafts",
        "Comfortable reading nooks",
        "Regularly updated play equipment"
      ],
      testimonial: {
        quote: "My daughter loves the creative spaces! She's always excited to show me her new art projects.",
        author: "Michael T., Parent"
      },
      image: "/play-place.png"
    },
    {
      title: "Wholesome Nutrition",
      text: "We provide balanced, child-friendly meals that support both energy and growth throughout the day.",
      bg: "bg-[#BFDBFE]",
      description: "Meal planning at Shining Stars follows USDA nutrition guidelines. We offer allergy-safe options and seasonal menus full of fruits, veggies, and child favorites.",
      features: [
        "USDA-compliant meal planning",
        "Fresh, seasonal ingredients",
        "Accommodation for dietary restrictions",
        "Family-style dining experience",
        "Regular nutrition education"
      ],
      testimonial: {
        quote: "I appreciate how they accommodate my child's food allergies while still providing nutritious meals.",
        author: "Lisa K., Parent"
      },
      image: "/nutrition.png"
    },
    {
      title: "Personalized Enrollment",
      text: "We meet with every family to understand your needs and tailor the experience from day one.",
      bg: "bg-[#FCD5CE]",
      description: "Each family's journey is unique. That's why we begin with a one-on-one enrollment meeting and tour to understand how we can best support your child.",
      features: [
        "Comprehensive enrollment process",
        "Flexible scheduling options",
        "Individualized transition plans",
        "Regular progress updates",
        "Open-door policy for parents"
      ],
      testimonial: {
        quote: "The enrollment process was smooth and personalized. They really took the time to understand our needs.",
        author: "David R., Parent"
      },
      image: "/enrollment.png"
    },
    {
      title: "Early Learning Foundations",
      text: "We introduce letters, numbers, and life skills through fun, hands-on activities rooted in early education best practices.",
      bg: "bg-[#DDD6FE]",
      description: "Our curriculum prepares children for Kindergarten and beyond, blending academic readiness with emotional intelligence and creativity.",
      features: [
        "Developmentally appropriate curriculum",
        "Hands-on learning experiences",
        "Focus on critical thinking",
        "Regular progress tracking",
        "Kindergarten preparation"
      ],
      testimonial: {
        quote: "My son has learned so much! He's more than ready for kindergarten thanks to their program.",
        author: "Jennifer L., Parent"
      },
      image: "/early-learning.png"
    },
    {
      title: "Family Communication",
      text: "Parents receive regular updates, photos, and open communication to stay connected and involved every step of the way.",
      bg: "bg-[#BBF7D0]",
      description: "We believe in transparency and connection. You'll receive updates throughout the week — from playtime pics to learning milestones!",
      features: [
        "Daily communication through parent portal",
        "Regular newsletters and updates",
        "Monthly parent-teacher meetings",
        "Family events and activities",
        "Digital photo sharing"
      ],
      testimonial: {
        quote: "I love getting daily updates and photos! It makes me feel connected to my child's day.",
        author: "Emma S., Parent"
      },
      extra: "We regularly host parent-teacher chats to share insights about your child's day and progress.",
      cta: {
        label: "Parent Portal",
        link: "/parent-portal"
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