import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Award, BookOpen } from 'lucide-react';

const courseCategories = [
  {
    title: "Circuit & Hardware with Logical Software Programming",
    courses: [
      "IOT Fundamentals and Development",
      "PCB Designing and fabrication",
      "Drone technology using image processing",
      "Blynk mobile app development with cloud computing",
      "Electric vehicle and their advancements",
      "Smart Home with latest sensor modules",
      "RFID & NFC communication in real time"
    ]
  },
  {
    title: "Additional Skill Development Courses",
    courses: [
      "Fault analysis in home appliances",
      "Mobile and Laptop repair from basic to chip level"
    ]
  }
];

const creditStructures = [
  {
    hours: 15,
    credits: 1,
    features: [
      "Course syllabus for 15+ hours",
      "Guided mini project",
      "Project validation and certification"
    ]
  },
  {
    hours: 30,
    credits: 2,
    features: [
      "Course syllabus for 30+ hours",
      "Guided mini project",
      "Paper presentation training",
      "Special recognition certificate for competition winners"
    ]
  },
  {
    hours: 45,
    credits: 3,
    features: [
      "Course syllabus for 45+ hours",
      "Advanced level project guidance",
      "Project expo competition",
      "Special recognition and certification"
    ]
  }
];

const ValueAddedCoursesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <BookOpen className="w-16 h-16 text-green-600 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Value Added Courses</h2>
          <p className="text-xl text-gray-600">
            Enhance your employability with our specialized courses
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {courseCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{category.title}</h3>
              <ul className="space-y-4">
                {category.courses.map((course, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <span className="text-green-600 font-bold">•</span>
                    <span className="text-gray-700">{course}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {creditStructures.map((structure, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 shadow-lg border-2 border-green-100 hover:border-green-300 transition-colors"
            >
              <div className="flex items-center justify-center mb-6">
                <Clock className="w-12 h-12 text-green-600" />
              </div>
              <h4 className="text-xl font-bold text-center mb-4">
                {structure.hours} Hours - {structure.credits} Credit
              </h4>
              <ul className="space-y-3">
                {structure.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <Award className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueAddedCoursesSection;