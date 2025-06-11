'use client';

import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
        <img
          src="/about/hero.png"
          alt="About Shining Stars Daycare"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              About Shining Stars
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto px-4">
              Where Every Child's Potential Shines Bright
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 px-6 md:px-16 bg-[#fffaf4]">
        <div className="max-w-4xl mx-auto">
          {/* Owner's Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-heading text-green-700 mb-6">Meet Our Founder</h2>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Profile Image */}
                <div className="relative aspect-square max-w-sm mx-auto md:mx-0">
                  <img
                    src="/about/profile.png"
                    alt="Roshanak Davoodi - Founder of Shining Stars Daycare"
                    className="w-full h-full object-cover rounded-lg shadow-md"
                  />
                </div>
                
                {/* Founder's Bio */}
                <div>
                  <p className="text-[#2b2b2b] text-lg leading-relaxed mb-6">
                    With over 25 years of dedicated experience in education and childcare, Roshanak Davoodi brings a wealth of knowledge and passion to Shining Stars Daycare. Her journey began with a Bachelor's degree in Chemistry, which laid the foundation for her analytical and methodical approach to education.
                  </p>
                  <p className="text-[#2b2b2b] text-lg leading-relaxed">
                    Her extensive experience working with students with disabilities has equipped her with unique insights into child development and personalized learning approaches, making her exceptionally qualified to nurture and guide young minds.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-heading text-green-700 mb-6">Professional Journey</h2>
            <div className="space-y-8">
              {/* Current Role */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-semibold text-green-700 mb-2">Founder & Director</h3>
                <p className="text-gray-600 mb-4">Shining Stars Daycare • 2022 - Present</p>
                <ul className="list-disc list-inside text-[#2b2b2b] space-y-2">
                  <li>Creating a nurturing and stimulating environment for young learners</li>
                  <li>Developing comprehensive early childhood education programs</li>
                  <li>Ensuring the highest standards of safety and care</li>
                </ul>
              </div>

              {/* Bright Horizons */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-semibold text-green-700 mb-2">Preschool Teacher</h3>
                <p className="text-gray-600 mb-4">Bright Horizons • 2021 - 2022</p>
                <ul className="list-disc list-inside text-[#2b2b2b] space-y-2">
                  <li>Implemented developmentally appropriate curriculum and activities</li>
                  <li>Created positive learning environments promoting curiosity and independence</li>
                  <li>Adapted teaching strategies to meet individual needs</li>
                </ul>
              </div>

              {/* Special Education */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-semibold text-green-700 mb-2">Special Education Teacher</h3>
                <p className="text-gray-600 mb-4">Taghva School • 1995 - 2020</p>
                <ul className="list-disc list-inside text-[#2b2b2b] space-y-2">
                  <li>Designed and implemented individualized education plans (IEPs)</li>
                  <li>Utilized specialized teaching techniques for diverse learning styles</li>
                  <li>Collaborated with education professionals and support staff</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Qualifications & Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-heading text-green-700 mb-6">Qualifications & Expertise</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Education */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-semibold text-green-700 mb-4">Education</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-[#2b2b2b]">Bachelor's Degree in Chemistry</h4>
                    <p className="text-gray-600">Ferdowsi University of Mashhad</p>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-semibold text-green-700 mb-4">Key Skills</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-[#2b2b2b] mb-2">Professional Skills</h4>
                    <ul className="list-disc list-inside text-[#2b2b2b] space-y-1">
                      <li>Early Childhood Education</li>
                      <li>Special Education Techniques</li>
                      <li>Curriculum Development</li>
                      <li>Behavior Management</li>
                      <li>First Aid Certified</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2b2b2b] mb-2">Languages</h4>
                    <ul className="list-disc list-inside text-[#2b2b2b] space-y-1">
                      <li>Persian (Native)</li>
                      <li>English (Advanced)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-3xl font-heading text-green-700 mb-6">Contact Information</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-green-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-[#2b2b2b]">Address</h3>
                    <p className="text-gray-600">13402 Seattle Hill Road<br />Mill Creek, WA 98012</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-green-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-[#2b2b2b]">Phone</h3>
                    <p className="text-gray-600">(425) 625-3236</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-green-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-[#2b2b2b]">Email</h3>
                    <p className="text-gray-600">roshanak87.davoodi@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutUs; 