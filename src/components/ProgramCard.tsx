import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

interface ProgramCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
  onLearnMore: () => void;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ title, description, icon, delay = 0, onLearnMore }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 group"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="mb-4 text-blue-800"
      >
        {icon}
      </motion.div>

      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-800 transition-colors duration-300">
        {title}
      </h3>

      <p className="text-gray-600 mb-6 leading-relaxed">
        {description}
      </p>

      <motion.button
        whileHover={{ x: 5 }}
        whileTap={{ scale: 0.95 }}
        onClick={onLearnMore}
        className="flex items-center text-blue-800 font-semibold hover:text-blue-900 transition-colors duration-300"
      >
        Learn More
        <ArrowRightIcon className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
      </motion.button>
    </motion.div>
  );
};

export default ProgramCard;