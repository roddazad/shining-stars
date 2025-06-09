'use client';
import { useState } from 'react';
import Modal from './Modal';

export default function HighlightsSection() {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const features = [
    {
      title: 'Loving Caregivers',
      text: 'Our teachers aren’t just certified — they’re passionate, nurturing, and treat every child like their own.',
      bg: 'bg-[#FDE68A]',
      description: 'At Shining Stars, we believe that every child deserves warmth, consistency, and emotional safety. Our staff are trained in both child development and empathy-focused care.',
      image: '/loving-caregivers.png',
      
    },
    {
      title: 'Creative Play Spaces',
      text: 'From story circles to outdoor adventures, our environment is built to spark joy and imagination.',
      bg: 'bg-[#A7F3D0]',
      description: 'Our classrooms and play areas are designed with both fun and learning in mind. Whether it’s indoor creativity or outdoor exploration, there’s always something new to discover.',
      image: '/play-place.png',
    },
    {
      title: 'Wholesome Nutrition',
      text: 'We provide balanced, child-friendly meals that support both energy and growth throughout the day.',
      bg: 'bg-[#BFDBFE]',
      description: 'Meal planning at Shining Stars follows USDA nutrition guidelines. We offer allergy-safe options and seasonal menus full of fruits, veggies, and child favorites.',
      image: '/nutrition.png',
    },
    {
      title: 'Personalized Enrollment',
      text: 'We meet with every family to understand your needs and tailor the experience from day one.',
      bg: 'bg-[#FCD5CE]',
      description: 'Each family’s journey is unique. That’s why we begin with a one-on-one enrollment meeting and tour to understand how we can best support your child.',
      image: '/enrollment.png',
    },
    {
      title: 'Early Learning Foundations',
      text: 'We introduce letters, numbers, and life skills through fun, hands-on activities rooted in early education best practices.',
      bg: 'bg-[#DDD6FE]',
      description: 'Our curriculum prepares children for Kindergarten and beyond, blending academic readiness with emotional intelligence and creativity.',
      image: '/early-learning.png',
    },
    {
      title: 'Family Communication',
      text: 'Parents receive regular updates, photos, and open communication to stay connected and involved every step of the way.',
      bg: 'bg-[#BBF7D0]',
      description: 'We believe in transparency and connection. You’ll receive updates throughout the week — from playtime pics to learning milestones!',
      extra: 'We regularly host parent-teacher chats to share insights about your child’s day and progress.',
      cta: {
        label: 'Parent Portal',
        link: '/parent-portal',
      },
      image: '/family-com.png',
    },
  ];

   return (
    <section className="py-16 px-6 md:px-16 bg-[#fffaf4]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading text-center text-green-700 mb-12">
          Why Families Love Us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <div
              key={item.title}
              className={`${item.bg} p-6 rounded-2xl shadow-lg text-[#2b2b2b] flex flex-col justify-between`}
            >
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-sm flex-grow">{item.text}</p>
              <button
                onClick={() =>
                  setSelectedFeature(item)
                }
                className="mt-6 bg-white text-green-700 font-semibold px-4 py-2 rounded-full hover:bg-green-100 transition"
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
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