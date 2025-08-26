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

  const steps = [
    {
      number: 1,
      title: "Submit Application",
      description: "Complete our online application form with your personal and educational details.",
      icon: <DocumentTextIcon className="h-8 w-8" />
    },
    {
      number: 2,
      title: "Document Review",
      description: "Our admissions team reviews your application and supporting documents.",
      icon: <CheckCircleIcon className="h-8 w-8" />
    },
    {
      number: 3,
      title: "Assessment & Interview",
      description: "Attend a language assessment and brief interview with our academic team.",
      icon: <AcademicCapIcon className="h-8 w-8" />
    },
    {
      number: 4,
      title: "Enrollment & Orientation",
      description: "Complete enrollment process and attend orientation to begin your journey.",
      icon: <CalendarIcon className="h-8 w-8" />
    }
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Application submitted successfully! We will contact you within 2 business days.');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      program: '',
      educationLevel: '',
      message: ''
    });
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
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Apply Now</h2>
          <form
            name="admission"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Hidden Inputs for Netlify */}
            <input type="hidden" name="form-name" value="admission" />
            <input type="text" name="bot-field" style={{ display: 'none' }} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="border p-3 rounded"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="border p-3 rounded"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="border p-3 rounded"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="border p-3 rounded"
              />
              <select
                name="program"
                value={formData.program}
                onChange={handleInputChange}
                required
                className="border p-3 rounded"
              >
                <option value="">Select Program</option>
                <option value="Japanese Proficiency">Japanese Proficiency (JLPT N1-N5)</option>
                <option value="English Proficiency">English Proficiency Training</option>
                <option value="Language Coaching">Individual Language Coaching</option>
                <option value="Professional Development">Professional Development Program</option>
              </select>
              <select
                name="educationLevel"
                value={formData.educationLevel}
                onChange={handleInputChange}
                required
                className="border p-3 rounded"
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
              className="border p-3 rounded w-full"
            />

            <button
              type="submit"
              className="bg-blue-800 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
            >
              Submit Application
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AdmissionsPage;
