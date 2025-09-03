"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import {
  Users,
  Trophy,
  Award,
  Palette,
  Calendar,
  GraduationCap,
  Building,
  Camera,
  BookOpen,
  Music,
  Microscope,
  Heart,
} from "lucide-react";

export default function Gallery() {
  const [activeTab, setActiveTab] = useState(0);
  const galleryCategories = [
    {
      title: "School Life",
      description: "Daily classroom activities and learning sessions",
      icon: BookOpen,
      color: "bg-blue-50 text-blue-700 border-blue-200",
      images: [
        { src: "/placeholder.jpg", alt: "Students in classroom", caption: "Interactive learning session" },
        { src: "/placeholder.jpg", alt: "Teacher with students", caption: "Personalized attention" },
        { src: "/placeholder.jpg", alt: "Group project", caption: "Collaborative learning" },
        { src: "/placeholder.jpg", alt: "Morning assembly", caption: "Daily morning devotions" },
      ],
    },
    {
      title: "Sports & Recreation",
      description: "Inter-house sports competitions and athletic displays",
      icon: Trophy,
      color: "bg-green-50 text-green-700 border-green-200",
      images: [
        { src: "/placeholder.jpg", alt: "Football match", caption: "Inter-house football competition" },
        { src: "/placeholder.jpg", alt: "Sports day", caption: "Annual sports day celebration" },
        { src: "/placeholder.jpg", alt: "Basketball game", caption: "Students in action during basketball" },
        { src: "/placeholder.jpg", alt: "Victory celebration", caption: "Award ceremony moments" },
      ],
    },
    {
      title: "Academic Achievements",
      description: "Prize giving ceremonies and student recognitions",
      icon: Award,
      color: "bg-yellow-50 text-yellow-700 border-yellow-200",
      images: [
        { src: "/placeholder.jpg", alt: "Prize giving", caption: "Excellence awards ceremony" },
        { src: "/placeholder.jpg", alt: "Science fair", caption: "Student science exhibition" },
        { src: "/placeholder.jpg", alt: "Math competition", caption: "Mathematics competition winners" },
        { src: "/placeholder.jpg", alt: "Debate competition", caption: "Public speaking event" },
      ],
    },
    {
      title: "Cultural & Arts",
      description: "Cultural day celebrations and artistic performances",
      icon: Palette,
      color: "bg-purple-50 text-purple-700 border-purple-200",
      images: [
        { src: "/placeholder.jpg", alt: "Cultural day", caption: "Nigerian cultural celebration" },
        { src: "/placeholder.jpg", alt: "Dance performance", caption: "Traditional dance display" },
        { src: "/placeholder.jpg", alt: "Music concert", caption: "School choir performance" },
        { src: "/placeholder.jpg", alt: "Art exhibition", caption: "Student artwork showcase" },
      ],
    },
    {
      title: "Special Events",
      description: "Graduation ceremonies and special celebrations",
      icon: Calendar,
      color: "bg-red-50 text-red-700 border-red-200",
      images: [
        { src: "/placeholder.jpg", alt: "Graduation", caption: "Graduation ceremony 2024" },
        { src: "/placeholder.jpg", alt: "Founders day", caption: "Annual founders day celebration" },
        { src: "/placeholder.jpg", alt: "Guest speaker", caption: "Educational guest visit" },
        { src: "/placeholder.jpg", alt: "Field trip", caption: "Educational excursion" },
      ],
    },
    {
      title: "Facilities Showcase",
      description: "Modern classroom setups and learning facilities",
      icon: Building,
      color: "bg-indigo-50 text-indigo-700 border-indigo-200",
      images: [
        { src: "/placeholder.jpg", alt: "Modern classroom", caption: "State-of-the-art classroom" },
        { src: "/placeholder.jpg", alt: "Science lab", caption: "Fully equipped laboratory" },
        { src: "/placeholder.jpg", alt: "Computer lab", caption: "Modern computer facility" },
        { src: "/placeholder.jpg", alt: "Library", caption: "Well-stocked library" },
      ],
    },
  ];

  const featuredImages = [
    {
      src: "/placeholder.jpg",
      alt: "School campus overview",
      title: "Our Beautiful Campus",
      description: "A modern learning environment designed for excellence",
    },
    {
      src: "/placeholder.jpg",
      alt: "Students in action",
      title: "Active Learning",
      description: "Students engaged in hands-on educational activities",
    },
    {
      src: "/placeholder.jpg",
      alt: "Graduation ceremony",
      title: "Celebrating Success",
      description: "Proud moments of academic achievement",
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
              School <span className="text-purple-600">Gallery</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Explore the vibrant life at Halal Impact Schools through our photo gallery. From academic achievements to cultural celebrations, witness the moments that make our school community special.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Images */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Highlights
            </h2>
            <p className="text-lg text-gray-600">
              Capturing the essence of our educational journey
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredImages.map((image, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative h-80">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{image.title}</h3>
                    <p className="text-white/90 text-sm">{image.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabbed Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Photo Gallery
            </h2>
            <p className="text-lg text-gray-600">
              Browse through different aspects of school life
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {galleryCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${activeTab === index
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-purple-50 hover:text-purple-600 shadow-sm'
                  }`}
              >
                <category.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{category.title}</span>
                <span className="sm:hidden">{category.title.split(' ')[0]}</span>
              </button>
            ))}
          </motion.div>

          {/* Active Category Info */}
          <motion.div
            key={activeTab}
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-xl shadow-sm">
              {(() => {
                const IconComponent = galleryCategories[activeTab].icon;
                return <IconComponent className="w-6 h-6 text-purple-600" />;
              })()}
              <div className="text-left">
                <h3 className="text-xl font-bold text-gray-900">
                  {galleryCategories[activeTab].title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {galleryCategories[activeTab].description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            key={`grid-${activeTab}`}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {galleryCategories[activeTab].images.map((image, imageIndex) => (
              <motion.div
                key={imageIndex}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: imageIndex * 0.1, duration: 0.3 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="relative h-64 sm:h-72">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <p className="text-sm font-medium leading-tight">{image.caption}</p>
                  </div>

                  {/* Hover overlay with icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Camera className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Load More Button (for future expansion) */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <button className="px-8 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
              Load More Photos
            </button>
          </motion.div>
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <Camera className="w-16 h-16 text-white mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Want to See More?
              </h2>
              <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                Schedule a visit to experience our facilities firsthand and see what makes Halal Impact Schools the perfect choice for your child's education.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Schedule a Campus Tour
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                Contact Admissions
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Photo Submission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Share Your Memories
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Have photos from school events or activities? We'd love to feature them in our gallery. Send us your best shots and help us showcase the vibrant life at Halal Impact Schools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Submit Photos
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                Photo Guidelines
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}