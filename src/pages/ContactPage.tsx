import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  AcademicCapIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Your Google Apps Script Web App URL
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxTHin3spKIGMAl_Pz2lb-yGcYLhexX3RIMeaquZBkSZqC4fCBmaaVxtYchOsfbrSP5/exec';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all required fields');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Create URL encoded form data
      const formDataToSubmit = new URLSearchParams();
      formDataToSubmit.append('name', formData.name);
      formDataToSubmit.append('email', formData.email);
      formDataToSubmit.append('phone', formData.phone);
      formDataToSubmit.append('subject', formData.subject);
      formDataToSubmit.append('message', formData.message);
      
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formDataToSubmit.toString()
      });
      
      const result = await response.json();
      
      if (result.result === 'success') {
        setShowSuccessModal(true);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        alert('There was an error submitting the form. Please try again.');
        console.error('Submission error:', result.error);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <MapPinIcon className="h-6 w-6" />,
      title: "Visit Us",
      details: ["Sha Bridge College", "400 Baseline Rd, Colombo 00900" ],
      highlight: "Campus Tours Available"
    },
    {
      icon: <PhoneIcon className="h-6 w-6" />,
      title: "Call Us",
      details: ["+94 72 202 0106", "+94 81 158 0146", "Monday - Friday, 9AM - 6PM"],
      highlight: "Multilingual Support"
    },
    {
      icon: <EnvelopeIcon className="h-6 w-6" />,
      title: "Email Us",
      details: ["info@shabridgecollege.com", "admissions@shabridgecollege.com", "support@shabridgecollege.com"],
      highlight: "24-hour Response Time"
    },
    {
      icon: <ClockIcon className="h-6 w-6" />,
      title: "Office Hours",
      details: ["Monday - Friday: 9AM - 6PM", "Saturday: 10AM - 4PM", "Sunday: Closed"],
      highlight: "Extended Hours During Enrollment"
    }
  ];

  const departments = [
    {
      name: "Admissions & Enrollment",
      email: "admissions@shabridgecollege.com",
      phone: "+94 72 202 0106",
      description: "Application process, program information, and enrollment support"
    },
    {
      name: "Academic Affairs",
      email: "academic@shabridgecollege.com",
      phone: "+94 72 202 0106",
      description: "Curriculum questions, academic planning, and student success"
    },
    {
      name: "Student Services",
      email: "students@shabridgecollege.com",
      phone: "+94 72 202 0106",
      description: "Student life, accommodation, and support services"
    },
  ];

  const subjects = [
    "General Inquiry",
    "Program Information",
    "Admissions Process",
    "Financial Aid",
    "Campus Visit",
    "Technical Support",
    "Other"
  ];

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
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto mb-8"
          >
            We're here to help you begin your transformative journey. Reach out with any questions or to schedule a campus visit.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <div className="flex items-center">
              <ChatBubbleLeftRightIcon className="h-6 w-6 mr-2 text-yellow-400" />
              <span>Multilingual Support</span>
            </div>
            <div className="flex items-center">
              <AcademicCapIcon className="h-6 w-6 mr-2 text-yellow-400" />
              <span>Expert Guidance</span>
            </div>
            <div className="flex items-center">
              <ClockIcon className="h-6 w-6 mr-2 text-yellow-400" />
              <span>Quick Response</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-blue-800 text-white rounded-full mb-6"
                >
                  {info.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{info.title}</h3>
                <div className="space-y-2 mb-4">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">{detail}</p>
                  ))}
                </div>
                <div className="bg-blue-800 text-white px-3 py-2 rounded-full text-sm font-medium">
                  {info.highlight}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Departments */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Send us a Message</h2>
                <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you as soon as possible.</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="+94 12 345 6789"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select a subject</option>
                      {subjects.map((subject) => (
                        <option key={subject} value={subject}>
                          {subject}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-800 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-900 transition-colors duration-300 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Departments */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact by Department</h2>
              <div className="space-y-6">
                {departments.map((dept, index) => (
                  <motion.div
                    key={dept.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{dept.name}</h3>
                    <p className="text-gray-600 mb-4">{dept.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-700">
                        <EnvelopeIcon className="h-4 w-4 mr-2 text-blue-600" />
                        <a href={`mailto:${dept.email}`} className="hover:text-blue-600 transition-colors duration-200">
                          {dept.email}
                        </a>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <PhoneIcon className="h-4 w-4 mr-2 text-blue-600" />
                        <a href={`tel:${dept.phone}`} className="hover:text-blue-600 transition-colors duration-200">
                          {dept.phone}
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-blue-800 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-bold mb-3">What are your admission requirements?</h3>
                <p className="text-blue-100 mb-6">
                  We require a basic language assessment, and completed application. 
                  Specific requirements vary by program.
                </p>
                
                <h3 className="text-xl font-bold mb-3">Can I start my program at any time?</h3>
                <p className="text-blue-100">
                Most of our online programs offer rolling admissions, allowing you to begin at multiple points throughout the year. Check the academic calendar for specific start dates.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-3">Are there any hidden fees for online programs?</h3>
                <p className="text-blue-100 mb-6">
                No, all fees are transparently listed during enrollment. We prioritize affordability and clarity in our pricing.
                </p>
                
                <h3 className="text-xl font-bold mb-3">What support services do you provide?</h3>
                <p className="text-blue-100">
                  We provide comprehensive student support including tutoring, career services, 
                  accommodation assistance, and 24/7 student helpline.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-md text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Message sent successfully!
            </h2>
            <p className="text-gray-600 mb-6">
              We will contact you within 24 hours.
            </p>
            <button
              onClick={() => setShowSuccessModal(false)}
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Close
            </button>              
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactPage;
