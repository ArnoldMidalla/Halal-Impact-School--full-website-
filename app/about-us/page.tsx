"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Eye,
  Target,
  Heart,
  Users,
  Award,
  BookOpen,
  GraduationCap,
  Shield,
  Star,
} from "lucide-react";

export default function About() {
  const values = [
    {
      icon: BookOpen,
      title: "Knowledge 📚",
      description:
        "We believe in the power of quality education to transform lives and communities. Our rigorous academic programs ensure students receive world-class learning experiences.",
    },
    {
      icon: Target,
      title: "Discipline 🎯",
      description:
        "We instill self-discipline, respect, and responsibility in all our students, preparing them to navigate life's challenges with integrity and purpose.",
    },
    {
      icon: Star,
      title: "Character 🌟",
      description:
        "Strong moral values form the foundation of our educational approach, shaping students into ethical leaders and compassionate human beings.",
    },
    {
      icon: Award,
      title: "Excellence 🏆",
      description:
        "We maintain the highest standards in all aspects of education, from teaching quality to student outcomes and facility management.",
    },
    {
      icon: GraduationCap,
      title: "Innovation 💡",
      description:
        "We embrace modern teaching methods and technology to enhance learning experiences and prepare students for the future.",
    },
    {
      icon: Users,
      title: "Community 🤝",
      description:
        "We foster a supportive, inclusive environment where students, parents, and staff work together toward common goals.",
    },
  ];

  const staff = [
    {
      name: "Dr. Sarah Johnson",
      position: "Principal",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
      description: "20+ years in educational leadership",
    },
    {
      name: "Prof. Michael Chen",
      position: "Academic Director",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
      description: "Expert in curriculum development",
    },
    {
      name: "Ms. Aisha Rahman",
      position: "Head of Student Affairs",
      image:
        "https://images.unsplash.com/photo-1543949806-2c9935e6aa78?q=80&w=400&auto=format&fit=crop",
      description: "Dedicated to student welfare and development",
    },
  ];

  const achievements = [
    { number: "15+", label: "Years of Excellence" },
    { number: "1000+", label: "Graduates" },
    { number: "50+", label: "Qualified Teachers" },
    { number: "98%", label: "Success Rate" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-blue-600">Halal Impact</span> Schools
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Halal Impact Schools stands as a beacon of educational excellence in Kaduna, Nigeria. For over 15 years, we have been committed to providing quality education that combines academic rigor with strong moral values. Our institution serves students from Creche through Senior Secondary School (SS3), creating a nurturing environment where young minds flourish and future leaders emerge.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Vision */}
            <motion.div
              className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 lg:p-12 border border-green-200"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-green-600 font-semibold text-sm uppercase tracking-wide">
                    Our
                  </p>
                  <h2 className="text-4xl font-bold text-green-900">Vision</h2>
                </div>
              </div>
              <p className="text-green-800 text-lg leading-relaxed">
                To be the leading educational institution in Northern Nigeria that nurtures every child to discover their unique potential and thrive in today's dynamic world, while maintaining the highest standards of academic excellence and moral integrity.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 lg:p-12 border border-blue-200"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
                    Our
                  </p>
                  <h2 className="text-4xl font-bold text-blue-900">Mission</h2>
                </div>
              </div>
              <p className="text-blue-800 text-lg leading-relaxed">
                To provide holistic education that seamlessly integrates academic excellence with character development, preparing students to become confident, disciplined, and responsible global citizens who contribute positively to their communities and the world at large.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do at Halal Impact Schools
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-blue-100">
              Celebrating our journey of educational excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {achievement.number}
                </div>
                <div className="text-blue-100 font-medium">
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Proprietress Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Proprietress
            </h2>
            <p className="text-lg text-gray-600">
              Visionary leadership dedicated to educational excellence
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="relative h-96 lg:h-full">
                <Image
                  src="/placeholder.jpg"
                  alt="Rev. Dorcas Kaida Midalla"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 lg:p-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  Rev. Dorcas Kaida Midalla
                </h3>
                <p className="text-xl text-blue-600 font-semibold mb-6">
                  Founder & Proprietress
                </p>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Rev. Dorcas Kaida Midalla is an accomplished educator, visionary leader, and devoted mother who founded Halal Impact Schools with a passion for transforming young lives through quality education. With over two decades of experience in education and child development, she brings a wealth of knowledge and unwavering commitment to academic excellence and character formation.
                  </p>
                  <p>
                    As the wife of Bishop Linus Kaida Midalla, Senior Pastor of Dominion Life Impact Church Worldwide, Rev. Dorcas combines her educational expertise with strong spiritual values, creating an institution that nurtures both the mind and character of every student. Together, they are blessed with six children, giving her firsthand experience in child-rearing and education.
                  </p>
                  <p>
                    Rev. Dorcas holds advanced degrees in Education and Child Psychology, and has been recognized for her contributions to educational development in Kaduna State. Under her leadership, Halal Impact Schools has grown from a small learning center to one of the most respected educational institutions in the region.
                  </p>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                  <p className="text-blue-800 italic font-medium">
                    "Every child is a gift with unlimited potential. Our role is to provide the nurturing environment, quality education, and moral guidance needed to help them discover and develop their unique talents while building strong character that will serve them throughout their lives."
                  </p>
                  <p className="text-blue-600 text-sm mt-2">- Rev. Dorcas Kaida Midalla</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Leadership Team
            </h2>
            <p className="text-lg text-gray-600">
              Dedicated professionals committed to educational excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {staff.map((member, index) => (
              <motion.div
                key={index}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-2">
                    {member.position}
                  </p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Join Our School Family Today
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Experience the difference of quality education rooted in strong
              values
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Schedule a Visit
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                Download Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
