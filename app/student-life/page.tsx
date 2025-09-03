"use client";

import { motion } from "framer-motion";
import {
  Users,
  Trophy,
  Music,
  Palette,
  Camera,
  Leaf,
  Briefcase,
  Heart,
  BookOpen,
  Calculator,
  Computer,
  Microscope,
  Gamepad2,
  Drama,
  Crown,
} from "lucide-react";

export default function StudentLife() {
  const academicClubs = [
    {
      name: "Science Club",
      description: "Experiments, innovations, and science fair participation",
      icon: Microscope,
      color: "bg-green-50 text-green-700 border-green-200",
    },
    {
      name: "Mathematics Club",
      description: "Problem-solving competitions and mathematical games",
      icon: Calculator,
      color: "bg-blue-50 text-blue-700 border-blue-200",
    },
    {
      name: "Literary & Debating Society",
      description: "Public speaking, debates, and essay competitions",
      icon: BookOpen,
      color: "bg-purple-50 text-purple-700 border-purple-200",
    },
    {
      name: "Computer Club",
      description: "Programming, web design, and digital literacy",
      icon: Computer,
      color: "bg-indigo-50 text-indigo-700 border-indigo-200",
    },
    {
      name: "Quiz Club",
      description: "Inter-house and inter-school quiz competitions",
      icon: Trophy,
      color: "bg-yellow-50 text-yellow-700 border-yellow-200",
    },
  ];

  const culturalArts = [
    {
      name: "Drama Club",
      description: "School plays, storytelling, and theatrical performances",
      icon: Drama,
      color: "bg-red-50 text-red-700 border-red-200",
    },
    {
      name: "Music & Choir",
      description: "Vocal training, instrumental music, and concerts",
      icon: Music,
      color: "bg-pink-50 text-pink-700 border-pink-200",
    },
    {
      name: "Arts & Crafts",
      description: "Creative expression through various art forms",
      icon: Palette,
      color: "bg-orange-50 text-orange-700 border-orange-200",
    },
    {
      name: "Photography Club",
      description: "Visual storytelling and photography skills",
      icon: Camera,
      color: "bg-gray-50 text-gray-700 border-gray-200",
    },
    {
      name: "Dance Group",
      description: "Traditional and modern dance performances",
      icon: Users,
      color: "bg-teal-50 text-teal-700 border-teal-200",
    },
  ];

  const sportsActivities = [
    { name: "Football", description: "Boys and girls teams with regular training and matches" },
    { name: "Basketball", description: "Indoor basketball court with coaching programs" },
    { name: "Athletics", description: "Track and field events and sports day competitions" },
    { name: "Table Tennis", description: "Indoor sports facility with professional coaching" },
    { name: "Badminton", description: "Court facilities and regular tournaments" },
  ];

  const specialInterest = [
    {
      name: "Environmental Club",
      description: "Gardening, recycling, and environmental awareness",
      icon: Leaf,
      color: "bg-green-50 text-green-700 border-green-200",
    },
    {
      name: "Young Entrepreneurs",
      description: "Business skills and entrepreneurship development",
      icon: Briefcase,
      color: "bg-blue-50 text-blue-700 border-blue-200",
    },
    {
      name: "Community Service",
      description: "Outreach programs and social responsibility",
      icon: Heart,
      color: "bg-red-50 text-red-700 border-red-200",
    },
    {
      name: "Islamic Society",
      description: "Quranic studies, Islamic history, and spiritual development",
      icon: BookOpen,
      color: "bg-purple-50 text-purple-700 border-purple-200",
    },
  ];

  const houses = [
    {
      name: "Wisdom House",
      color: "Blue",
      value: "Knowledge and Intelligence",
      bgColor: "bg-blue-100",
      textColor: "text-blue-800",
      borderColor: "border-blue-300",
    },
    {
      name: "Courage House",
      color: "Red",
      value: "Bravery and Leadership",
      bgColor: "bg-red-100",
      textColor: "text-red-800",
      borderColor: "border-red-300",
    },
    {
      name: "Unity House",
      color: "Green",
      value: "Cooperation and Harmony",
      bgColor: "bg-green-100",
      textColor: "text-green-800",
      borderColor: "border-green-300",
    },
    {
      name: "Excellence House",
      color: "Gold",
      value: "Achievement and Success",
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-800",
      borderColor: "border-yellow-300",
    },
  ];

  const annualEvents = [
    {
      name: "Founders Day",
      description: "Celebrating the school's establishment and achievements",
      icon: Crown,
    },
    {
      name: "Sports Day",
      description: "Inter-house sports competitions and athletic displays",
      icon: Trophy,
    },
    {
      name: "Cultural Day",
      description: "Showcase of diverse Nigerian cultures and traditions",
      icon: Users,
    },
    {
      name: "Science Fair",
      description: "Student innovations and scientific projects exhibition",
      icon: Microscope,
    },
    {
      name: "Graduation Ceremony",
      description: "Celebrating academic achievements and milestones",
      icon: BookOpen,
    },
    {
      name: "Inter-house Competitions",
      description: "Academic, sports, and cultural contests",
      icon: Gamepad2,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Student <span className="text-purple-600">Life</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Beyond academics, we offer a vibrant student life filled with extracurricular activities, leadership opportunities, and memorable experiences that shape well-rounded individuals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Academic Clubs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Academic Clubs
            </h2>
            <p className="text-lg text-gray-600">
              Enhance learning through specialized academic clubs and competitions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {academicClubs.map((club, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-xl border-2 ${club.color} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-4">
                  <club.icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{club.name}</h3>
                <p className="text-sm opacity-80">{club.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural & Arts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cultural & Arts
            </h2>
            <p className="text-lg text-gray-600">
              Express creativity and cultural appreciation through various artistic endeavors
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {culturalArts.map((activity, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-xl border-2 ${activity.color} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-4">
                  <activity.icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{activity.name}</h3>
                <p className="text-sm opacity-80">{activity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sports & Recreation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sports & Recreation
            </h2>
            <p className="text-lg text-gray-600">
              Physical fitness and team spirit through various sporting activities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sportsActivities.map((sport, index) => (
              <motion.div
                key={index}
                className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-4">
                  <Trophy className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{sport.name}</h3>
                <p className="text-sm text-blue-700">{sport.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Interest Groups */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Special Interest Groups
            </h2>
            <p className="text-lg text-gray-600">
              Develop leadership skills and social responsibility through meaningful activities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialInterest.map((group, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-xl border-2 ${group.color} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-4">
                  <group.icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{group.name}</h3>
                <p className="text-sm opacity-80">{group.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* House System */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              House System
            </h2>
            <p className="text-lg text-gray-600">
              Students are divided into four houses, each with distinct colors and values
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {houses.map((house, index) => (
              <motion.div
                key={index}
                className={`${house.bgColor} ${house.textColor} ${house.borderColor} p-6 rounded-xl border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Crown className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{house.name}</h3>
                  <p className="text-sm font-medium mb-2">({house.color})</p>
                  <p className="text-sm opacity-80">{house.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* School Events */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              School Events & Traditions
            </h2>
            <p className="text-lg text-gray-600">
              Annual celebrations and traditions that bring our school community together
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {annualEvents.map((event, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <event.icon className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{event.name}</h3>
                <p className="text-gray-600">{event.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Leadership */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Student Leadership
            </h2>
            <p className="text-lg text-gray-600">
              Developing leadership skills through various student positions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="bg-blue-50 p-8 rounded-2xl border border-blue-200"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Class Monitors</h3>
              <p className="text-blue-800">
                Student assistants in classroom management who help maintain order, assist teachers, and serve as liaisons between students and faculty.
              </p>
            </motion.div>

            <motion.div
              className="bg-green-50 p-8 rounded-2xl border border-green-200"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-green-900 mb-6">House Captains</h3>
              <p className="text-green-800">
                Leaders of school houses who organize house activities, motivate house members, and represent their houses in school competitions and events.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join Our Vibrant School Community
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Experience the rich student life that makes Halal Impact Schools special
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Schedule a Visit
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}