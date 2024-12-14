import React from 'react';
import { motion } from 'framer-motion';
import { Target, Star } from 'lucide-react';

const MissionSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <Target className="w-16 h-16 text-green-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-600 leading-relaxed">
              TechKnots primary mission is to provide students with real-world engineering expertise 
              that will benefit them in their future endeavours. The outcome of our training goes 
              beyond certification - it's about developing practical skills that make a difference.
            </p>
            <div className="mt-8 flex justify-center">
              <Star className="w-8 h-8 text-yellow-400 animate-pulse" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;