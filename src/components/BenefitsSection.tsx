import React from 'react';
import { motion } from 'framer-motion';
import { 
  Presentation, 
  Users, 
  Trophy, 
  GraduationCap,
  Coins,
  Calendar
} from 'lucide-react';

const benefits = [
  {
    icon: Presentation,
    title: "Workshops",
    description: "Hands-on workshops covering various technical domains"
  },
  {
    icon: Users,
    title: "Guest Lectures & Seminars",
    description: "Expert sessions from industry professionals"
  },
  {
    icon: Trophy,
    title: "Project Training",
    description: "Comprehensive project guidance and competition opportunities"
  },
  {
    icon: GraduationCap,
    title: "Final Year Project Assistance",
    description: "Dedicated mentorship for final year projects"
  },
  {
    icon: Coins,
    title: "Funding Support",
    description: "Financial assistance for entrepreneurial projects"
  },
  {
    icon: Calendar,
    title: "Regular Events",
    description: "Continuous learning through various technical events"
  }
];

const BenefitsSection = () => {
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Additional Benefits</h2>
          <p className="text-xl text-gray-600">
            Exclusive advantages for our students through MoU partnerships
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Icon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
                    <p className="text-gray-600 mt-2">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;