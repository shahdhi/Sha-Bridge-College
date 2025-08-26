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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Simple 4-Step Application Process
            </h2>
            <p className="text-xl text-gray-600">
              We've made applying to Sha Bridge College as straightforward as possible
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center relative"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-flex items-center justify-center w-20 h-20 bg-blue-800 text-white rounded-full mb-6 relative z-10"
                >
                  <div className="absolute -top-2 -right-2 bg-yellow-400 text-blue-900 text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                    {step.number}
                  </div>
                  {step.icon}
                </motion.div>

                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                    className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-blue-200 transform -translate-y-1/2 origin-left"
                    style={{ left: 'calc(50% + 40px)', width: 'calc(100% - 80px)' }}
                  />
                )}

                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-2 text-gray-900">Apply Now</h2>
          <p className="text-center text-gray-600 mb-8 text-lg">
            Take the first step towards your transformation
          </p>

          <form
            name="admission"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
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
        </div>
      </section>
    </div>
  );
};

export default AdmissionsPage
