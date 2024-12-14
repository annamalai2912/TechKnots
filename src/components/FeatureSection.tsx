import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Book, Users, Award, Rocket, Code, Database, Wrench } from 'lucide-react';
import FeatureCard from './FeatureCard';

const features = [
  {
    Icon: Cpu,
    title: "Practical Training",
    description: "Hands-on experience with real-world projects and industry-standard tools"
  },
  {
    Icon: Book,
    title: "Expert Guidance",
    description: "Learn from industry professionals with years of experience"
  },
  {
    Icon: Users,
    title: "IEEE Workshops",
    description: "Regular workshops and seminars in collaboration with IEEE"
  },
  {
    Icon: Award,
    title: "Project Success",
    description: "Track record of successful student projects in various domains"
  },
  {
    Icon: Rocket,
    title: "Innovation Hub",
    description: "Access to cutting-edge technology and innovation resources"
  },
  {
    Icon: Code,
    title: "Coding Excellence",
    description: "Master programming skills with practical applications"
  },
  {
    Icon: Database,
    title: "Industry Projects",
    description: "Work on real industry projects and build your portfolio"
  },
  {
    Icon: Wrench,
    title: "Technical Support",
    description: "Continuous support and guidance throughout your learning journey"
  }
];

const FeatureSection = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive training and support to help you excel in your engineering journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;