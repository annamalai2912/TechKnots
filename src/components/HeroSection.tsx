import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-green-50 to-white">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-green-100 to-white" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block text-gray-900">Innovate.</span>
            <span className="block text-green-600">Create.</span>
            <span className="block text-gray-900">Transform.</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Bridging the gap between theory and practice in engineering education
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {/* Download Brochure Button */}
            <a
              href="src/components/TechKnots Academy LLP Brochure.pdf"
              download
              className="inline-flex items-center px-8 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors group"
            >
              Download Brochure
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            {/* Contact Us Button */}
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 border-2 border-green-600 text-green-600 rounded-full hover:bg-green-50 transition-colors"
            >
              Contact Us
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
