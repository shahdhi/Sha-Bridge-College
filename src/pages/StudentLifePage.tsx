import React from 'react';
import { motion } from 'framer-motion';
import { 
  AcademicCapIcon, 
  HeartIcon, 
  UserGroupIcon, 
  SparklesIcon,
  CalendarDaysIcon,
  TrophyIcon
} from '@heroicons/react/24/outline';

const StudentLifePage: React.FC = () => {
  const events = [
    {
      title: "Speak Up! Public Speaking Challenge",
      date: "Every month",
      description: "Students prepare and deliver short speeches on topics they care about—ranging from social issues to personal stories. Judges assess clarity, structure, and emotional impact.",
      image: "https://topcareer.id/wp-content/uploads/2020/03/public-speaking.jpg",
      category: "Confidence"
    },
    {
      title: "Language Partner Program",
      date: "Ongoing",
      description: "Connect with native speakers and fellow language learners for conversational practice and friendship.",
      image: "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      category: "Academic"
    },
    {
      title: "Career Development Workshop",
      date: "Every Friday",
      description: "Professional development sessions covering resume writing, interview skills, and industry insights.",
      image: "https://images.pexels.com/photos/3184434/pexels-photo-3184434.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      category: "Professional"
    },
    {
      title: "Graduation Ceremony",
      date: "June 20, 2024",
      description: "Celebrating our graduates' achievements with families, friends, and the entire Sha Bridge community.",
      image: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      category: "Milestone"
    }
  ];

  const testimonials = [
    {
      name: "Chathurika Fernando",
      program: "English Proficiency",
      quote: "The community at Sha Bridge is like a second family. The support and encouragement I received helped me not just learn English, but also gain confidence in myself.",
      image: "https://tse1.mm.bing.net/th/id/OIP.wJZCd6LZoWwQDCfaZIbuIQHaJQ?cb=thfc1&w=736&h=920&rs=1&pid=ImgDetMain&o=7&rm=3",
      achievement: "IELTS 8.0 Score"
    },
    {
      name: "Niroshan Rajendren",
      program: "Professional Development",
      quote: "The career workshops and networking events opened doors I never knew existed. I landed my dream job just two months after graduation.",
      image: "https://th.bing.com/th/id/R.d3ec5295fbeab2f903b7854529357898?rik=qndjLucPpWn3ow&pid=ImgRaw&r=0",
      achievement: "Promoted to Team Lead"
    },
    {
      name: "Elena Rodriguez",
      program: "Japanese Proficiency N2",
      quote: "The cultural immersion activities made learning Japanese so much more than just studying grammar. I felt connected to the language and culture.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      achievement: "JLPT N2 Certified"
    }
  ];

  const facilities = [
    {
      name: "Virtual Language Exchange Circles",
      description: "Students join weekly online meetups with language learners from other countries. Each session focuses on a theme travel, careers, storytelling and includes breakout rooms for paired practice.",
      icon: <AcademicCapIcon className="h-8 w-8" />
    },
    {
      name: "Fluency Through Podcasts",
      description: "Students subscribe to curated podcast playlists based on their proficiency level, then respond with short audio reflections or summaries.",
      icon: <UserGroupIcon className="h-8 w-8" />
    },
    {
      name: "Grammar & Vocabulary Bootcamps (Online)",
      description: "A series of bite-sized interactive lessons delivered via Google Classroom or Notion, with quizzes, flashcards, and mini-games.",
      icon: <SparklesIcon className="h-8 w-8" />
    },
    {
      name: "Digital Writing Studio",
      description: "Students submit essays, reflections, or creative pieces to an online writing hub. Tutors or peers provide structured feedback using rubrics.",
      icon: <TrophyIcon className="h-8 w-8" />
    }
  ];

  const achievements = [
    { number: "95%", label: "Job Placement Rate", icon: <TrophyIcon className="h-6 w-6" /> },
    { number: "4.9/5", label: "Student Satisfaction", icon: <HeartIcon className="h-6 w-6" /> },
    { number: "1000+", label: "Alumni Network", icon: <UserGroupIcon className="h-6 w-6" /> },
    { number: "50+", label: "Cultural Events/Year", icon: <SparklesIcon className="h-6 w-6" /> }
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
            Student Life at Sha Bridge
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto mb-8"
          >
            Experience a vibrant community where learning extends beyond the classroom and friendships last a lifetime
          </motion.p>
        </div>
      </section>

      {/* Achievements Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-blue-800 text-white rounded-full mb-4"
                >
                  {stat.icon}
                </motion.div>
                <div className="text-3xl font-bold text-blue-800 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Life Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Life on Campus</h2>
            <p className="text-xl text-gray-600">
              Discover the vibrant community that makes Sha Bridge College special
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="relative overflow-hidden"
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {event.category}
                    </span>
                  </div>
                </motion.div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <CalendarDaysIcon className="h-4 w-4 mr-2" />
                    {event.date}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-20 bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Student Voices</h2>
            <p className="text-xl text-blue-100">
              Hear from our students about their transformative experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-white/20"
                  />
                  <h3 className="text-xl font-bold">{testimonial.name}</h3>
                  <p className="text-blue-200">{testimonial.program}</p>
                  <div className="inline-block bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-sm font-medium mt-2">
                    {testimonial.achievement}
                  </div>
                </div>
                <blockquote className="text-center italic">
                  "{testimonial.quote}"
                </blockquote>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Facilities */}
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
              World-Class Facilities
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need for an exceptional learning experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-blue-800 text-white rounded-full mb-6"
                >
                  {facility.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{facility.name}</h3>
                <p className="text-gray-600 leading-relaxed">{facility.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">Making a Difference</h2>
              <p className="text-xl mb-6 leading-relaxed">
                Our students don't just graduate with certificates, they become ambassadors of positive change 
                in their communities, workplaces, and the world.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <HeartIcon className="h-6 w-6 mr-3 text-yellow-300" />
                  <span>Community service initiatives</span>
                </div>
                <div className="flex items-center">
                  <UserGroupIcon className="h-6 w-6 mr-3 text-yellow-300" />
                  <span>Mentorship programs</span>
                </div>
                <div className="flex items-center">
                  <SparklesIcon className="h-6 w-6 mr-3 text-yellow-300" />
                  <span>Cultural exchange projects</span>
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
                alt="Students making a difference"
                className="rounded-2xl shadow-2xl"
              />
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 bg-yellow-400 text-blue-900 p-4 rounded-2xl shadow-lg"
              >
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm">Hours of Community Service</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentLifePage;