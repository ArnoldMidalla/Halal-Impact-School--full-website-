"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
  Send,
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Users,
  Calendar,
} from "lucide-react";
import Slideshow from "@/app/components/slideshow";

export default function ContactPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: [
        "Impact Avenue, off Zitti Road",
        "Tsaunin Kura, Kaduna",
        "Nigeria",
      ],
      color: "text-blue-600",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: [
        "Main Office: +234 803 704 0204",
        "Admissions: +234 809 123 4567",
        "Emergency: +234 807 555 0123"
      ],
      color: "text-green-600",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: [
        "info@halalimpactschools.edu.ng",
        "admissions@halalimpactschools.edu.ng",
        "principal@halalimpactschools.edu.ng"
      ],
      color: "text-purple-600",
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Monday - Friday: 8:00 AM - 4:00 PM",
        "Saturday: 9:00 AM - 2:00 PM",
      ],
      color: "text-orange-600",
    },
  ];

  const quickActions = [
    {
      icon: Calendar,
      title: "Schedule a Visit",
      description: "Book a tour of our facilities",
      action: "Schedule Now",
    },
    {
      icon: Users,
      title: "Admissions Inquiry",
      description: "Learn about our admission process",
      action: "Learn More",
    },
    {
      icon: MessageCircle,
      title: "General Questions",
      description: "Get answers to common questions",
      action: "View FAQ",
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
              Get in <span className="text-blue-600">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              We'd love to hear from you! Whether you're a prospective parent, current family member, or community partner, we're here to answer your questions and provide information about our exceptional educational programs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${info.color
                    .replace("text-", "bg-")
                    .replace("-600", "-100")}`}
                >
                  <info.icon className={`w-6 h-6 ${info.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {info.title}
                </h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-8 lg:p-12"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Send us a Message
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and we&apos;ll get back to you within
                  24 hours.
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      First Name *
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      required
                      placeholder="Enter your first name"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Last Name *
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      required
                      placeholder="Enter your last name"
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Enter your email address"
                    className="w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="admissions">Admissions</option>
                    <option value="complaint">Complaint</option>
                    <option value="suggestion">Suggestion</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-method"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Preferred Contact Method
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="contactMethod"
                        value="phone"
                        className="mr-2"
                      />
                      Phone
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="contactMethod"
                        value="email"
                        className="mr-2"
                        defaultChecked
                      />
                      Email
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="contactMethod"
                        value="in-person"
                        className="mr-2"
                      />
                      In-person
                    </label>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Tell us more about your inquiry..."
                    rows={5}
                    className="w-full resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Send Message
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </motion.div>

            {/* Image and Quick Actions */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* School Image */}
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
                <Slideshow />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Visit Our Campus</h3>
                  <p className="text-white/90">
                    Experience our world-class facilities
                  </p>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Quick Actions
                </h3>
                {quickActions.map((action, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <action.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">
                          {action.title}
                        </h4>
                        <p className="text-gray-600 text-sm mb-3">
                          {action.description}
                        </p>
                        <span className="text-blue-600 font-medium text-sm hover:underline">
                          {action.action} →
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Landmarks & Directions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Directions & Landmarks
            </h2>
            <p className="text-lg text-gray-600">
              Easy to find with these nearby landmarks
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                landmark: "Dominion Life Impact Church",
                description: "Near our school location",
                icon: "⛪",
              },
              {
                landmark: "Tsaunin Kura Primary Health Center",
                description: "Close to our campus",
                icon: "🏥",
              },
              {
                landmark: "Impact Shopping Complex",
                description: "Opposite our school",
                icon: "🏪",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.landmark}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Find Us
            </h2>
            <p className="text-lg text-gray-600">
              Located in the heart of Kaduna, easily accessible from all parts
              of the city
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 font-medium">
                Interactive Map Coming Soon
              </p>
              <p className="text-gray-500 text-sm">
                Impact Avenue, off Zitti Road, Tsaunin Kura, Kaduna
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
