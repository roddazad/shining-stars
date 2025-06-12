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

  const highlights = [
    {
      title: 'Nurturing Environment',
      description: 'Our daycare provides a warm, caring atmosphere where children feel safe and valued.',
      icon: '🌟'
    },
    {
      title: 'Experienced Staff',
      description: 'Our team of qualified educators is dedicated to your child\'s growth and development.',
      icon: '👩‍🏫'
    },
    {
      title: 'Learning Through Play',
      description: 'We combine fun activities with educational content to make learning enjoyable.',
      icon: '🎨'
    },
    {
      title: 'Safe & Secure',
      description: 'Your child\'s safety is our top priority, with secure facilities and careful supervision.',
      icon: '🔒'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Shining Stars?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide a nurturing environment where your child can grow, learn, and thrive.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{highlight.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {highlight.title}
              </h3>
              <p className="text-gray-600">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/enrollment"
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
          >
            Start Your Journey With Us
          </Link>
        </div>
      </div>
    </section>
  );
}