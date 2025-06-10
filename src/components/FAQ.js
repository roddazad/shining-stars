'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "What are your operating hours?",
    answer: "We are open Monday through Friday from 7:00 AM to 6:00 PM. We are closed on weekends and major holidays."
  },
  {
    question: "What age groups do you accept?",
    answer: "We accept children from 6 weeks to 5 years old. We have different programs tailored to each age group's developmental needs."
  },
  {
    question: "What is your teacher-to-child ratio?",
    answer: "We maintain strict teacher-to-child ratios that meet or exceed state requirements: 1:4 for infants, 1:6 for toddlers, and 1:10 for preschoolers."
  },
  {
    question: "What is included in the tuition?",
    answer: "Tuition includes all meals (breakfast, lunch, and snacks), educational materials, and daily activities. We also provide regular progress reports and parent-teacher conferences."
  },
  {
    question: "Do you provide meals and snacks?",
    answer: "Yes, we provide nutritious meals and snacks throughout the day. Our menu is carefully planned to meet dietary requirements and accommodate food allergies and restrictions."
  },
  {
    question: "What is your sick child policy?",
    answer: "For the health and safety of all children, we ask that children stay home if they have a fever, are vomiting, or have contagious conditions. Children must be symptom-free for 24 hours before returning."
  },
  {
    question: "How do you handle discipline?",
    answer: "We use positive reinforcement and redirection techniques. Our approach focuses on teaching appropriate behavior and helping children develop self-regulation skills."
  },
  {
    question: "What qualifications do your teachers have?",
    answer: "All our teachers are certified in Early Childhood Education and have current CPR and First Aid certifications. They participate in ongoing professional development."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition"
            >
              <span className="font-semibold text-lg">{faq.question}</span>
              <span className="text-2xl text-gray-500">
                {openIndex === index ? '−' : '+'}
              </span>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 py-4 bg-gray-50">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
} 