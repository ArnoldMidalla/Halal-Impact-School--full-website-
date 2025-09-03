"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Users,
  Award,
  Target,
  GraduationCap,
  Heart,
  Computer,
  Globe,
  Microscope,
  Calculator,
  Palette,
  Music,
} from "lucide-react";

export default function Academics() {
  const earlyYearsPrograms = [
    {
      title: "Creche (Age 1-2)",
      description: "Safe, nurturing environment for our youngest learners with basic care and early stimulation activities.",
      icon: Heart,
      color: "bg-pink-50 text-pink-700 border-pink-200",
    },
    {
      title: "Pre-Nursery (Age 2-3)",
      description: "Introduction to school environment, basic social skills development, sensory play and exploration, early language development.",
      icon: Users,
      color: "bg-purple-50 text-purple-700 border-purple-200",
    },
    {
      title: "Nursery 1 (Age 3-4)",
      description: "Pre-literacy and pre-numeracy skills, creative arts and crafts, basic Christian Religious Studies, physical development activities.",
      icon: Palette,
      color: "bg-blue-50 text-blue-700 border-blue-200",
    },
    {
      title: "Nursery 2 (Age 4-5)",
      description: "Letter and number recognition, beginning reading and writing, basic mathematical concepts, science exploration through play.",
      icon: BookOpen,
      color: "bg-green-50 text-green-700 border-green-200",
    },
  ];

  const primarySubjects = [
    { name: "English Language", icon: BookOpen },
    { name: "Mathematics", icon: Calculator },
    { name: "General Science", icon: Microscope },
    { name: "Social Studies", icon: Globe },
    { name: "Christian Religious Studies", icon: Heart },
    { name: "Computer Studies", icon: Computer },
    { name: "Physical and Health Education", icon: Users },
    { name: "Creative Arts", icon: Palette },
    { name: "Arabic Language", icon: BookOpen },
    { name: "French Language", icon: Globe },
  ];

  const secondarySubjects = [
    { name: "English Language", icon: BookOpen },
    { name: "Mathematics", icon: Calculator },
    { name: "Basic Science", icon: Microscope },
    { name: "Basic Technology", icon: Computer },
    { name: "Christian Religious Studies", icon: Heart },
    { name: "Arabic Language", icon: BookOpen },
    { name: "French Language", icon: Globe },
    { name: "Agricultural Science", icon: Users },
    { name: "Home Economics", icon: Heart },
    { name: "Fine Arts", icon: Palette },
    { name: "Music", icon: Music },
    { name: "Business Studies", icon: Target },
  ];

  const supportServices = [
    {
      title: "Academic Counseling",
      description: "Professional guidance to help students excel in their studies and make informed academic choices.",
      icon: Target,
    },
    {
      title: "Learning Support",
      description: "Additional support for students who need extra help in specific subjects or learning areas.",
      icon: Users,
    },
    {
      title: "Gifted & Talented Program",
      description: "Special programs to challenge and nurture exceptionally gifted students.",
      icon: Award,
    },
    {
      title: "Career Guidance",
      description: "Early career orientation to help students understand various career paths and make informed decisions.",
      icon: GraduationCap,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Academic <span className="text-blue-600">Programs</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Comprehensive educational programs designed to nurture academic excellence and character development from Creche to Senior Secondary School.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Early Years Foundation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Early Years Foundation Stage (Ages 1-5)
            </h2>
            <p className="text-lg text-gray-600">
              Building strong foundations through play-based learning and character development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {earlyYearsPrograms.map((program, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-xl border-2 ${program.color} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-4">
                  <program.icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{program.title}</h3>
                <p className="text-sm opacity-80">{program.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Primary Education */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Primary Education (Ages 6-11)
            </h2>
            <p className="text-lg text-gray-600">
              Basic 1-5: Comprehensive primary education focusing on core subjects and moral values
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Subjects</h3>
              <div className="grid grid-cols-2 gap-4">
                {primarySubjects.map((subject, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                    <subject.icon className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700 text-sm font-medium">{subject.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="bg-blue-50 p-8 rounded-2xl border border-blue-200"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Special Programs</h3>
              <ul className="space-y-3 text-blue-800">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  Reading Comprehension Enhancement
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  Mathematical Problem-Solving Skills
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  Science Fair Participation
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  Literary and Debating Society
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  Quranic Studies and Memorization
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Secondary Education */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Secondary Education (Ages 12-18)
            </h2>
            <p className="text-lg text-gray-600">
              JSS1-3 & SS1-3: Advanced learning with specialized subjects and leadership development
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              className="bg-green-50 p-8 rounded-2xl border border-green-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-green-900 mb-6">Junior Secondary (JSS1-3)</h3>
              <div className="grid grid-cols-2 gap-3">
                {secondarySubjects.slice(0, 8).map((subject, index) => (
                  <div key={index} className="flex items-center gap-2 p-2 bg-white rounded-lg">
                    <subject.icon className="w-4 h-4 text-green-600" />
                    <span className="text-green-800 text-sm">{subject.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="bg-orange-50 p-8 rounded-2xl border border-orange-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-orange-900 mb-6">Senior Secondary (SS1-3)</h3>
              <div className="space-y-3">
                <p className="text-orange-800 mb-4">
                  Specialized education preparing students for higher education and career paths with comprehensive subject offerings including:
                </p>
                <ul className="space-y-2 text-orange-800">
                  <li>• Science Track (Physics, Chemistry, Biology, Mathematics)</li>
                  <li>• Commercial Track (Accounting, Economics, Commerce)</li>
                  <li>• Arts Track (Literature, Government, History)</li>
                  <li>• Technical Track (Technical Drawing, Auto Mechanics)</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Curriculum Framework */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Curriculum Framework
            </h2>
            <p className="text-lg text-gray-600">
              Our comprehensive approach to education
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Nigerian Educational Curriculum",
                description: "We follow the approved Nigerian National Curriculum while incorporating innovative teaching methods and international best practices.",
                icon: "🇳🇬",
              },
              {
                title: "Christian Integration",
                description: "Christian values and teachings are seamlessly integrated into all aspects of learning, creating morally conscious students.",
                icon: "✝️",
              },
              {
                title: "21st Century Skills",
                description: "Focus on critical thinking, creativity, collaboration, and communication skills essential for future success.",
                icon: "💡",
              },
              {
                title: "Assessment & Evaluation",
                description: "Continuous assessment, mid-term and end-of-term examinations, practical assessments, and character evaluation.",
                icon: "📊",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Support Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Student Support Services
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive support to ensure every student succeeds
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportServices.map((service, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Explore Our Academic Programs?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us to learn more about our comprehensive educational offerings
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Schedule a Visit
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Download Curriculum Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}