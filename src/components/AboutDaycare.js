'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const features = [
  {
    title: 'Loving Caregivers',
    description: 'Our teachers aren\'t just certified — they\'re passionate, nurturing, and treat every child like their own.',
    details: [
      'Highly qualified staff with extensive experience in early childhood education',
      'Continuous professional development and training',
      'Low teacher-to-child ratios ensuring personalized attention',
      'Warm, nurturing environment where every child feels valued',
      'Strong emphasis on emotional intelligence and social development'
    ],
    bg: 'bg-[#FDE68A]',
    image: '/loving-caregivers.png'
  },
  {
    title: 'Creative Play Spaces',
    description: 'From story circles to outdoor adventures, our environment is built to spark joy and imagination.',
    details: [
      'Age-appropriate learning centers and activity zones',
      'Safe, engaging outdoor play areas with modern equipment',
      'Dedicated spaces for arts, crafts, and creative expression',
      'Comfortable reading nooks and quiet areas',
      'Regular updates to keep the environment fresh and stimulating'
    ],
    bg: 'bg-[#A7F3D0]',
    image: '/play-place.png'
  },
  {
    title: 'Wholesome Nutrition',
    description: 'We provide balanced, child-friendly meals that support both energy and growth throughout the day.',
    details: [
      'USDA-compliant meal planning and preparation',
      'Fresh, seasonal ingredients in every meal',
      'Accommodation for dietary restrictions and allergies',
      'Family-style dining to promote social skills',
      'Regular nutrition education for children'
    ],
    bg: 'bg-[#BFDBFE]',
    image: '/nutrition.png'
  },
  {
    title: 'Personalized Enrollment',
    description: 'We meet with every family to understand your needs and tailor the experience from day one.',
    details: [
      'Comprehensive enrollment process with family orientation',
      'Flexible scheduling options to meet family needs',
      'Individualized transition plans for new children',
      'Regular progress updates and parent-teacher conferences',
      'Open-door policy for parent visits and involvement'
    ],
    bg: 'bg-[#FCD5CE]',
    image: '/enrollment.png'
  },
  {
    title: 'Early Learning Foundations',
    description: 'We introduce letters, numbers, and life skills through fun, hands-on activities rooted in early education best practices.',
    details: [
      'Developmentally appropriate curriculum aligned with state standards',
      'Hands-on learning experiences and project-based activities',
      'Focus on critical thinking and problem-solving skills',
      'Regular assessment and progress tracking',
      'Preparation for kindergarten and beyond'
    ],
    bg: 'bg-[#DDD6FE]',
    image: '/early-learning.png'
  },
  {
    title: 'Family Communication',
    description: 'Parents receive regular updates, photos, and open communication to stay connected and involved every step of the way.',
    details: [
      'Daily communication through our parent portal',
      'Regular newsletters and program updates',
      'Monthly parent-teacher meetings',
      'Family events and community building activities',
      'Digital photo sharing of your child\'s daily activities'
    ],
    bg: 'bg-[#BBF7D0]',
    image: '/family-com.png'
  }
];

const AboutDaycare = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
        <img
          src="/about-daycare/hero.png"
          alt="Our Daycare Environment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Our Daycare
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto px-4">
              Where Every Child's Journey is Unique and Every Day is an Adventure
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 px-6 md:px-16 bg-[#fffaf4]">
        <div className="max-w-7xl mx-auto">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl font-heading text-green-700 mb-6">Welcome to Our World</h2>
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
              <p className="text-[#2b2b2b] text-lg leading-relaxed mb-6">
                At Shining Stars Daycare, we believe that every child deserves a nurturing environment where they can grow, learn, and shine. Our facility is designed to be a second home for your little ones, where they can explore, create, and develop in a safe and stimulating setting.
              </p>
              <p className="text-[#2b2b2b] text-lg leading-relaxed">
                With a perfect blend of structured learning and creative play, we provide a comprehensive early childhood education program that prepares children for kindergarten and beyond, while ensuring they have fun every step of the way.
              </p>
            </div>
          </motion.div>

          {/* Features Grid */}
          <div className="space-y-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${feature.bg} rounded-2xl shadow-lg overflow-hidden`}
              >
                <div className="grid md:grid-cols-2 gap-8 p-8">
                  {/* Content */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-heading text-[#2b2b2b]">{feature.title}</h3>
                    <p className="text-[#2b2b2b] text-lg">{feature.description}</p>
                    <ul className="space-y-3">
                      {feature.details.map((detail, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <svg className="w-6 h-6 text-green-700 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-[#2b2b2b]">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Image */}
                  <div className="relative aspect-square rounded-xl overflow-hidden shadow-md">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <h2 className="text-3xl font-heading text-green-700 mb-6">Ready to Join Our Family?</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/book-a-tour"
                className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition"
              >
                Schedule a Tour
              </Link>
              <Link
                href="/enrollment"
                className="bg-white text-green-700 border-2 border-green-600 px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition"
              >
                Start Enrollment
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutDaycare; 