'use client';

import { useState } from 'react';
import ApplicationForm from '@/components/ApplicationForm';
import FAQ from '@/components/FAQ';

export default function EnrollmentPage() {
  const [isApplicationFormOpen, setIsApplicationFormOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Enrollment & FAQs
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Join our nurturing environment where your child will grow, learn, and thrive.
            We're here to make the enrollment process smooth and transparent.
          </p>
          <button
            onClick={() => setIsApplicationFormOpen(true)}
            className="bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition shadow-lg hover:shadow-xl"
          >
            Start Enrollment Process
          </button>
        </div>
      </section>

      {/* Enrollment Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Enrollment Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-3">Submit Application</h3>
              <p className="text-gray-600">Complete our online application form with your child's information and your preferences.</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-3">We'll Call You</h3>
              <p className="text-gray-600">Our team will review your application and contact you to discuss next steps and schedule a tour.</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-3">Finalize Enrollment</h3>
              <p className="text-gray-600">Complete paperwork and prepare for your child's first day of learning and fun!</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Application Form Modal */}
      <ApplicationForm
        isOpen={isApplicationFormOpen}
        onClose={() => setIsApplicationFormOpen(false)}
      />
    </main>
  );
}
