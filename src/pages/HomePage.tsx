import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import ProgramCard from '../components/ProgramCard';
import { 
  GlobeAltIcon, 
  ChatBubbleLeftRightIcon, 
  UserGroupIcon,
  AcademicCapIcon,
  StarIcon,
  HeartIcon
} from '@heroicons/react/24/outline';

interface HomePageProps {
  onPageChange: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onPageChange }) => {
  const programs = [
    {
      title: "Japanese Proficiency (JLPT)",
      description: "Master Japanese from N5 to N1 levels with comprehensive training programs designed for success.",
      icon: <GlobeAltIcon className="h-12 w-12" />
    },
    {
      title: "English Proficiency Training",
      description: "Develop fluent English skills through immersive learning experiences and practical applications.",
      icon: <ChatBubbleLeftRightIcon className="h-12 w-12" />
    },
    {
      title: "Individual Language Coaching",
      description: "Personalized one-on-one sessions tailored to your specific learning goals and pace.",
      icon: <UserGroupIcon className="h-12 w-12" />
    },
    {
      title: "Professional Development",
      description: "Build essential workplace skills alongside language proficiency for career advancement.",
      icon: <AcademicCapIcon className="h-12 w-12" />
    }
  ];

  const testimonials = [
    {
      name: "Joseph Chen",
      program: "Japanese Proficiency N2",
      text: "Sha Bridge College transformed my understanding of Japanese culture and language. The personalized approach made all the difference.",
      image: "https://thafd.bing.com/th/id/OIP.QMlu7VX5Ga6m075ijsemhgHaLG?o=7&cb=thfc1rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      name: "Michael Rodriguez",
      program: "English Proficiency",
      text: "The supportive community and innovative teaching methods helped me achieve my career goals faster than I imagined.",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Mishani Tanaka",
      program: "Individual Coaching",
      text: "The one-on-one attention and emotional support made learning enjoyable and deeply meaningful.",
      image: "https://etimg.etb2bimg.com/thumb/msid-86005934,imgsize-22734,width-1200,height=765,overlay-ethospitality/restaurants/things-are-getting-back-to-normal-nikita-poojari.jpg"
    }
  ];

  return (
    <div className="min-h-screen">
      <Hero onPageChange={onPageChange} />
      
      {/* Programs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Transform Your Future with Our Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover diploma-level courses designed to empower your personal and professional growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => (
              <ProgramCard
                key={program.title}
                title={program.title}
                description={program.description}
                icon={program.icon}
                delay={index * 0.1}
                onLearnMore={() => onPageChange('programs')}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-blue-800 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Our Mission: Bridging Dreams to Reality
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                At Sha Bridge College, we believe education is more than knowledge transfer, it's about 
                transformation. Our innovative approach combines academic excellence with emotional intelligence, 
                creating graduates who don't just succeed professionally but contribute meaningfully to their communities.
              </p>
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">95%</div>
                  <div className="text-sm">Graduate Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">50+</div>
                  <div className="text-sm">Industry Partners</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">1000+</div>
                  <div className="text-sm">Lives Transformed</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Students celebrating achievement"
                className="rounded-2xl shadow-2xl"
              />
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 bg-yellow-400 text-blue-900 p-4 rounded-full"
              >
                <HeartIcon className="h-8 w-8" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              Stories of Transformation
            </h2>
            <p className="text-xl text-gray-600">
              Hear from our graduates who've bridged their dreams to reality
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-gray-600">{testimonial.program}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-6"
          >
            Ready to Start Your Transformation?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl mb-8"
          >
            Join hundreds of students who've discovered their potential at Sha Bridge College
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onPageChange('admissions')}
            className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-300 transition-colors duration-300"
          >
            Apply Today
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;