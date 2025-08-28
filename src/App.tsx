import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProgramsPage from './pages/ProgramsPage';
import AdmissionsPage from './pages/AdmissionsPage';
import StudentLifePage from './pages/StudentLifePage';
import ContactPage from './pages/ContactPage';

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />

        <PageWrapper>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/admissions" element={<AdmissionsPage />} />
            <Route path="/student-life" element={<StudentLifePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </PageWrapper>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gray-900 text-white py-16"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Sha Bridge College</h3>
                <p className="text-gray-400 mb-4">
                  Building bridges to brighter futures through transformative education.
                </p>
                <p className="text-gray-400 text-sm">
                  © 2025 Sha Bridge College. All rights reserved.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <div className="space-y-2">
                  {[
                    { label: 'Home', path: '/' },
                    { label: 'About Us', path: '/about' },
                    { label: 'Programs', path: '/programs' },
                    { label: 'Admissions', path: '/admissions' },
                    { label: 'Student Life', path: '/student-life' },
                    { label: 'Contact', path: '/contact' },
                  ].map(({ label, path }) => (
                    <motion.a
                      key={label}
                      whileHover={{ x: 5 }}
                      href={path}
                      className="block text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {label}
                    </motion.a>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Programs</h4>
                <div className="space-y-2 text-gray-400">
                  <p>Japanese Proficiency (JLPT)</p>
                  <p>English Proficiency Training</p>
                  <p>Individual Language Coaching</p>
                  <p>Professional Development</p>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                <div className="space-y-2 text-gray-400">
                  <p>Sha Bridge College</p>
                  <p>400 Baseline Rd, Colombo 00900</p>
                  <p>Phone: +94 72 202 0106</p>
                  <p>Email: info@shabridgecollege.com</p>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-12 pt-8 border-t border-gray-800 text-center"
            >
              <p className="text-gray-400">
                Sha Bridge College is committed to providing quality education and fostering a diverse,
                inclusive learning environment for all students.
              </p>
            </motion.div>
          </div>
        </motion.footer>
      </div>
    </Router>
  );
}

export default App;
