import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  DocumentTextIcon,
  CalendarIcon,
  CheckCircleIcon,
  AcademicCapIcon,
  UserIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

interface AdmissionsPageProps {
  onPageChange: (page: string) => void;
}

const AdmissionsPage: React.FC<AdmissionsPageProps> = ({ onPageChange }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    program: '',
    educationLevel: '',
    message: ''
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formDataObj = new FormData(form);

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataObj as any).toString()
      });

      setShowSuccessModal(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        program: '',
        educationLevel: '',
        message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-800 to-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-6"
          >
            Start Your Journey Today
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto mb-8"
          >
            Join hundreds of students who have transformed their lives through our innovative diploma programs
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 text-lg"
          >
            <div className="flex items-center">
              <CheckCircleIcon className="h-6 w-6 text-green-400 mr-2" />
              <span>Simple Application Process</span>
            </div>
            <div className="flex items-center">
              <CheckCircleIcon className="h-6 w-6 text-green-400 mr-2" />
              <span>Rolling Admissions</span>
            </div>
            <div className="flex items-center">
              <CheckCircleIcon className="h-6 w-6 text-green-400 mr-2" />
              <span>Financial Aid Available</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-2 text-gray-900">Apply Now</h2>
          <p className="text-center text-gray-600 mb-8 text-lg">
            Take the first step towards your transformation
          </p>

          <form
            name="admission"
            method="POST"
            action="/"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded-lg p-6 space-y-6"
          >
            <input type="hidden" name="form-name" value="admission" />
            <input type="text" name="bot-field" style={{ display: 'none' }} />

            <div className="flex items-center border rounded p-3">
              <UserIcon className="h-5 w-5 text-gray-400 mr-3" />
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="w-full outline-none"
              />
            </div>

            <div className="flex items-center border rounded p-3">
              <UserIcon className="h-5 w-5 text-gray-400 mr-3" />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="w-full outline-none"
              />
            </div>

            <div className="flex items-center border rounded p-3">
              <EnvelopeIcon className="h-5 w-5 text-gray-400 mr-3" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full outline-none"
              />
            </div>

            <div className="flex items-center border rounded p-3">
              <PhoneIcon className="h-5 w-5 text-gray-400 mr-3" />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full outline-none"
              />
            </div>

            <div className="flex items-center border rounded p-3">
              <DocumentTextIcon className="h-5 w-5 text-gray-400 mr-3" />
              <select
                name="program"
                value={formData.program}
                onChange={handleInputChange}
                required
                className="w-full outline-none bg-transparent"
              >
                <option value="">Program of Interest</option>
                <option value="Japanese Proficiency">Japanese Proficiency (JLPT N1-N5)</option>
                <option value="English Proficiency">English Proficiency Training</option>
                <option value="Language Coaching">Individual Language Coaching</option>
                <option value="Professional Development">Professional Development Program</option>
              </select>
            </div>

            <div className="flex items-center border rounded p-3">
              <AcademicCapIcon className="h-5 w-5 text-gray-400 mr-3" />
              <select
                name="educationLevel"
                value={formData.educationLevel}
                onChange={handleInputChange}
                required
                className="w-full outline-none bg-transparent"
              >
                <option value="">Education Level</option>
                <option value="High School">High School</option>
                <option value="Undergraduate">Undergraduate</option>
                <option value="Graduate">Graduate</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <textarea
              name="message"
              placeholder="Tell us about your goals or questions"
              value={formData.message}
              onChange={handleInputChange}
              rows={5}
              className="border rounded p-3 w-full resize-none"
            />

            <button
              type="submit"
              className="bg-blue-800 text-white px-6 py-3 rounded w-full hover:bg-blue-700 transition"
            >
              Submit Application
            </button>
          </form>

          {/* Success Modal */}
          {showSuccessModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
              <div className="bg-white rounded-lg shadow-xl p-8 max-w-md text-center">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Application submitted successfully!
                </h2>
                <p className="text-gray-600 mb-6">
                  We will contact you within 2 business days.
                </p>
                <a
                  href="/"
                  className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                >
                  Return to homepage
                </a>              
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default AdmissionsPage;
