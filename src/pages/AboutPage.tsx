import React from 'react';
import { motion } from 'framer-motion';
import { 
  LightBulbIcon, 
  HeartIcon, 
  UsersIcon, 
  AcademicCapIcon,
  SparklesIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: <LightBulbIcon className="h-8 w-8" />,
      title: "Innovation",
      description: "Embracing cutting-edge teaching methods and technology to enhance learning experiences."
    },
    {
      icon: <HeartIcon className="h-8 w-8" />,
      title: "Emotional Intelligence",
      description: "Fostering self-awareness, empathy, and emotional growth alongside academic achievement."
    },
    {
      icon: <UsersIcon className="h-8 w-8" />,
      title: "Inclusivity",
      description: "Creating a welcoming environment where diversity is celebrated and everyone belongs."
    },
    {
      icon: <SparklesIcon className="h-8 w-8" />,
      title: "Celebration",
      description: "Recognizing and celebrating every milestone, big or small, in our students' journeys."
    },
    {
      icon: <AcademicCapIcon className="h-8 w-8" />,
      title: "Excellence",
      description: "Maintaining the highest standards in education while making learning accessible and enjoyable."
    },
    {
      icon: <GlobeAltIcon className="h-8 w-8" />,
      title: "Global Perspective",
      description: "Preparing students for a connected world through cultural awareness and language mastery."
    }
  ];

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                About Sha Bridge College
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                We are more than an educational institution, we are architects of transformation, 
                building bridges between where our students are and where they dream to be.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-blue-800 text-white p-6 rounded-2xl"
              >
                <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
                <p className="text-lg">
                  To be the leading institution that transforms lives through innovative education, 
                  emotional growth, and community empowerment.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Students collaborating"
                className="rounded-2xl shadow-2xl"
              />
              <motion.div
                animate={{ 
                  rotate: [0, 5, -5, 0],
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -bottom-6 -left-6 bg-yellow-400 text-blue-900 p-4 rounded-2xl shadow-lg"
              >
                <div className="text-2xl font-bold">2016</div>
                <div className="text-sm">Founded</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Mission</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              At Sha Bridge College, we empower students through transformative education that goes beyond 
              traditional learning. We cultivate emotional intelligence, celebrate individual achievements, 
              and build communities that support lifelong growth and success.
            </p>
            
            <div className="bg-gradient-to-r from-blue-800 to-blue-900 text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">What Makes Us Different</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div>
                  <h4 className="font-semibold mb-2">Personalized Learning</h4>
                  <p className="text-blue-100">Tailored programs that adapt to each student's unique learning style and pace.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Emotional Growth</h4>
                  <p className="text-blue-100">Integrated emotional intelligence development alongside academic achievement.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Community Focus</h4>
                  <p className="text-blue-100">Strong support networks that extend beyond the classroom into lifelong connections.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do at Sha Bridge College
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-blue-800 text-white rounded-full mb-4"
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Educational Philosophy</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="bg-blue-50 p-6 rounded-2xl">
                <h3 className="text-2xl font-bold text-blue-800 mb-4">Holistic Development</h3>
                <p className="text-gray-700">
                  We believe true education encompasses intellectual, emotional, and social growth. 
                  Our programs are designed to develop the whole person, not just academic skills.
                </p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-2xl">
                <h3 className="text-2xl font-bold text-yellow-600 mb-4">Practical Application</h3>
                <p className="text-gray-700">
                  Learning comes alive when it connects to real-world experiences. We emphasize 
                  practical skills and real-world applications in all our programs.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-2xl">
                <h3 className="text-2xl font-bold text-green-600 mb-4">Individual Attention</h3>
                <p className="text-gray-700">
                  Every student is unique. Our small class sizes and personalized approach ensure 
                  each student receives the attention and support they need to succeed.
                </p>
              </div>
              <div className="bg-purple-50 p-6 rounded-2xl">
                <h3 className="text-2xl font-bold text-purple-600 mb-4">Community Building</h3>
                <p className="text-gray-700">
                  Learning is enhanced in a supportive community. We foster connections between 
                  students, faculty, and the broader community to create lasting networks.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
