import React from 'react';
import { motion } from 'framer-motion';
import { 
  GlobeAltIcon, 
  ChatBubbleLeftRightIcon, 
  UserGroupIcon,
  AcademicCapIcon,
  CheckCircleIcon,
  ClockIcon,
  StarIcon
} from '@heroicons/react/24/outline';

interface ProgramsPageProps {
  onPageChange: (page: string) => void;
}

const ProgramsPage: React.FC<ProgramsPageProps> = ({ onPageChange }) => {
  const programs = [
    {
      title: "Japanese Proficiency (JLPT N1-N5)",
      description: "Comprehensive Japanese language training from beginner to advanced levels, preparing students for JLPT certification.",
      icon: <GlobeAltIcon className="h-16 w-16" />,
      duration: "6-24 months",
      level: "Beginner to Advanced",
      features: [
        "Structured curriculum for all JLPT levels (N5-N1)",
        "Cultural immersion activities",
        "Business Japanese modules",
        "Conversation practice sessions",
        "Mock exam preparation",
        "Study abroad preparation"
      ],
      outcomes: [
        "Pass JLPT certification exams",
        "Communicate effectively in Japanese",
        "Understand Japanese business culture",
        "Pursue higher education in Japan"
      ],
      image: "https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
      gradient: "from-red-500 to-pink-600"
    },
    {
      title: "English Proficiency Training",
      description: "Master English through immersive learning experiences designed for academic and professional success.",
      icon: <ChatBubbleLeftRightIcon className="h-16 w-16" />,
      duration: "3 months",
      level: "Beginner to Advanced",
      features: [
        "IELTS and TOEFL preparation",
        "Academic writing workshops",
        "Speaking training",
        "Business English communication",
        "Critical thinking development",
        "Digital literacy integration"
      ],
      outcomes: [
        "Achieve target IELTS/TOEFL scores",
        "Excel in academic environments",
        "Communicate confidently in professional settings",
        "Develop critical thinking skills"
      ],
      image: "https://149818895.v2.pressablecdn.com/wp-content/uploads/2016/01/Lithuanian-State-Scholarships-for-Language-and-Culture-Summer-Courses.png",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      title: "Individual Language Coaching",
      description: "Personalized one-on-one language coaching tailored to your specific goals and learning style.",
      icon: <UserGroupIcon className="h-16 w-16" />,
      duration: "Flexible",
      level: "All Levels",
      features: [
        "Customized learning plans",
        "Flexible scheduling options",
        "Expert native-speaking tutors",
        "Progress tracking and assessment",
        "Specialized focus areas",
        "Career-specific language training"
      ],
      outcomes: [
        "Achieve personalized language goals",
        "Rapid skill improvement",
        "Build confidence in communication",
        "Develop specialized vocabulary"
      ],
      image: "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      title: "Professional Development Program",
      description: "Integrate language learning with essential workplace skills for career advancement.",
      icon: <AcademicCapIcon className="h-16 w-16" />,
      duration: "6-12 months",
      level: "Intermediate+",
      features: [
        "Leadership communication skills",
        "Cross-cultural competency",
        "Project management basics",
        "Digital workplace tools",
        "Networking and relationship building",
        "Industry-specific training"
      ],
      outcomes: [
        "Advance in current career",
        "Transition to new industries",
        "Lead multicultural teams",
        "Build professional networks"
      ],
      image: "https://images.pexels.com/photos/3184434/pexels-photo-3184434.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
      gradient: "from-purple-500 to-indigo-600"
    }
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
            Our Diploma Programs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto mb-8"
          >
            Discover transformative education programs designed to empower your personal and professional growth
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="font-semibold">4 Specialized Programs</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="font-semibold">Flexible Duration</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="font-semibold">Industry-Recognized</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      src={program.image}
                      alt={program.title}
                      className="rounded-2xl shadow-2xl w-full h-80 object-cover"
                    />
                    <motion.div
                      animate={{ 
                        y: [0, -10, 0],
                        rotate: [0, 2, -2, 0]
                      }}
                      transition={{ 
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className={`absolute -top-4 -right-4 bg-gradient-to-r ${program.gradient} text-white p-4 rounded-2xl shadow-lg`}
                    >
                      {program.icon}
                    </motion.div>
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <motion.h2
                    whileHover={{ x: 5 }}
                    className="text-3xl font-bold text-gray-900 mb-4"
                  >
                    {program.title}
                  </motion.h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {program.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <div className="flex items-center mb-2">
                        <ClockIcon className="h-5 w-5 text-blue-600 mr-2" />
                        <span className="font-semibold text-gray-900">Duration</span>
                      </div>
                      <p className="text-gray-600">{program.duration}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <div className="flex items-center mb-2">
                        <StarIcon className="h-5 w-5 text-yellow-500 mr-2" />
                        <span className="font-semibold text-gray-900">Level</span>
                      </div>
                      <p className="text-gray-600">{program.level}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Program Features</h3>
                    <div className="grid grid-cols-1 gap-2">
                      {program.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onPageChange('admissions')}
                    className={`bg-gradient-to-r ${program.gradient} text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300`}
                  >
                    Learn More & Apply
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Programs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose Sha Bridge College Programs?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our innovative approach combines academic excellence with practical skills and emotional intelligence development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Industry-Relevant Curriculum",
                description: "Programs designed with input from industry professionals to ensure graduates meet current market demands.",
                icon: <AcademicCapIcon className="h-8 w-8" />
              },
              {
                title: "Small Class Sizes",
                description: "Maximum 15 students per class ensures personalized attention and meaningful interactions with instructors.",
                icon: <UserGroupIcon className="h-8 w-8" />
              },
              {
                title: "Flexible Learning Options",
                description: "Choose from full-time, part-time, evening, and weekend schedules to fit your lifestyle and commitments.",
                icon: <ClockIcon className="h-8 w-8" />
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-blue-800 text-white rounded-full mb-6"
                >
                  {benefit.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-6"
          >
            Ready to Transform Your Future?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl mb-8"
          >
            Take the first step towards your goals with our transformative diploma programs
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onPageChange('admissions')}
              className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-300 transition-colors duration-300"
            >
              Apply Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onPageChange('contact')}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300"
            >
              Schedule a Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProgramsPage;