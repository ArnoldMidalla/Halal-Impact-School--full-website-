"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Calendar,
  Users,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  CreditCard,
  GraduationCap,
  Heart,
  BookOpen,
} from "lucide-react";

export default function Admissions() {
  const applicationRequirements = [
    {
      level: "Creche & Pre-Nursery",
      requirements: [
        "Completed application form",
        "Birth certificate or age declaration",
        "Passport photographs (4 copies)",
        "Medical report from recognized hospital",
        "Immunization record",
      ],
      icon: Heart,
      color: "bg-pink-50 text-pink-700 border-pink-200",
    },
    {
      level: "Nursery 1 & 2",
      requirements: [
        "Completed application form",
        "Birth certificate",
        "Passport photographs (4 copies)",
        "Previous school report (if applicable)",
        "Medical report from recognized hospital",
      ],
      icon: Users,
      color: "bg-purple-50 text-purple-700 border-purple-200",
    },
    {
      level: "Basic 1-5 & JSS1-3",
      requirements: [
        "Completed application form",
        "Previous school reports (last 2 years)",
        "Transfer certificate",
        "Birth certificate",
        "Passport photographs (4 copies)",
        "Entrance examination",
      ],
      icon: BookOpen,
      color: "bg-blue-50 text-blue-700 border-blue-200",
    },
    {
      level: "SS1-3",
      requirements: [
        "Completed application form",
        "JSS3 certificate or equivalent",
        "Previous school reports",
        "Transfer certificate",
        "Birth certificate",
        "Entrance examination",
      ],
      icon: GraduationCap,
      color: "bg-green-50 text-green-700 border-green-200",
    },
  ];

  const admissionSteps = [
    {
      step: 1,
      title: "Purchase Application Form",
      description: "Visit the school to obtain application form",
      icon: FileText,
    },
    {
      step: 2,
      title: "Complete Application",
      description: "Fill all required information accurately",
      icon: Users,
    },
    {
      step: 3,
      title: "Submit Documents",
      description: "Return completed form with all required documents",
      icon: CheckCircle,
    },
    {
      step: 4,
      title: "Entrance Assessment",
      description: "Age-appropriate assessment for academic readiness",
      icon: BookOpen,
    },
    {
      step: 5,
      title: "Interview",
      description: "Parent and student interview with school administration",
      icon: Users,
    },
    {
      step: 6,
      title: "Admission Decision",
      description: "Notification of admission status within one week",
      icon: CheckCircle,
    },
    {
      step: 7,
      title: "Registration",
      description: "Complete registration process upon acceptance",
      icon: GraduationCap,
    },
  ];

  const feeCategories = [
    { category: "Tuition fees", description: "Core academic instruction and materials" },
    { category: "Development levy", description: "Infrastructure and facility improvements" },
    { category: "Sports and activities", description: "Extracurricular programs and equipment" },
    { category: "Uniform and books", description: "Required school materials and textbooks" },
    { category: "Feeding program", description: "Nutritious meals and snacks" },
    { category: "Medical insurance", description: "Health coverage and medical services" },
    { category: "Transportation (optional)", description: "School bus services" },
  ];

  const importantDates = [
    { event: "Admission Opens", date: "March 1, 2024", icon: Calendar },
    { event: "Entrance Examinations", date: "May - July 2024", icon: BookOpen },
    { event: "Registration Deadline", date: "August 15, 2024", icon: CheckCircle },
    { event: "Resumption Date", date: "September 9, 2024", icon: GraduationCap },
  ];

  const schoolTerms = [
    { term: "First Term", period: "September - December" },
    { term: "Second Term", period: "January - April" },
    { term: "Third Term", period: "May - August" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-green-600">Admissions</span> Process
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Join the Halal Impact Schools family and give your child the foundation for a bright future. Our admission process is designed to be straightforward and welcoming for all families.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Application Requirements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Application Requirements
            </h2>
            <p className="text-lg text-gray-600">
              Required documents vary by grade level to ensure appropriate preparation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {applicationRequirements.map((req, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-xl border-2 ${req.color} hover:shadow-lg transition-all duration-300`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <req.icon className="w-8 h-8" />
                  <h3 className="text-xl font-semibold">{req.level}</h3>
                </div>
                <ul className="space-y-2">
                  {req.requirements.map((requirement, reqIndex) => (
                    <li key={reqIndex} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>{requirement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Procedure */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Admission Procedure
            </h2>
            <p className="text-lg text-gray-600">
              Follow these simple steps to complete your child's admission
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {admissionSteps.map((step, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {step.step}
                </div>
                <div className="mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* School Fees Structure */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              School Fees Structure
            </h2>
            <p className="text-lg text-gray-600">
              Transparent and competitive fee structure with flexible payment options
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              className="bg-blue-50 p-8 rounded-2xl border border-blue-200"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                <CreditCard className="w-6 h-6" />
                Payment Terms
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Termly Payment</h4>
                  <p className="text-blue-800 text-sm">Standard rates, payable at beginning of each term</p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Installment Plans</h4>
                  <p className="text-blue-800 text-sm">Available for special circumstances with prior arrangement</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-green-50 p-8 rounded-2xl border border-green-200"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-green-900 mb-6">Fee Categories</h3>
              <div className="space-y-3">
                {feeCategories.map((fee, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-white rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-green-900">{fee.category}</h4>
                      <p className="text-green-700 text-sm">{fee.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-green-100 rounded-lg">
                <p className="text-green-800 text-sm italic">
                  *Contact admissions office for detailed fee structure
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Important Dates
            </h2>
            <p className="text-lg text-gray-600">
              2024/2025 Academic Session key dates and deadlines
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {importantDates.map((date, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <date.icon className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{date.event}</h3>
                <p className="text-orange-600 font-medium">{date.date}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="bg-white p-8 rounded-2xl shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">School Calendar</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {schoolTerms.map((term, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">{term.term}</h4>
                  <p className="text-gray-600">{term.period}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Admissions */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Contact Admissions
            </h2>
            <p className="text-xl text-blue-100">
              Get in touch with our admissions team for personalized assistance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="bg-white p-8 rounded-2xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Admissions Office</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">+234 803 704 0204</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">admissions@halalimpactschools.edu.ng</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                  <span className="text-gray-700">Impact Avenue, off Zitti Road, Tsaunin Kura, Kaduna</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-2xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Clock className="w-6 h-6" />
                Office Hours
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-900">Monday - Friday</span>
                  <span className="text-gray-700">8:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-900">Saturday</span>
                  <span className="text-gray-700">9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-900">Sunday</span>
                  <span className="text-gray-700">Closed</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Schedule a School Visit
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Download Application Form
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}