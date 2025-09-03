"use client";

import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  GraduationCap,
  Heart,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Academics", href: "/academics" },
    { name: "Admissions", href: "/admissions" },
    { name: "Contact", href: "/contact-us" },
  ];

  const academicLinks = [
    { name: "Academic Programs", href: "/academics" },
    { name: "Student Life", href: "/student-life" },
    { name: "Results Portal", href: "/results" },
    { name: "Admissions", href: "/admissions" },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      text: "Impact Avenue, off Zitti Road, Tsaunin Kura, Kaduna",
    },
    {
      icon: Phone,
      text: "+234 803 704 0204",
    },
    {
      icon: Mail,
      text: "info@halalimpactschools.edu.ng",
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* School Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Image
                src="/logo.jpg"
                alt="Halal Impact Schools"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <h3 className="text-xl font-bold">Halal Impact Schools</h3>
                <p className="text-gray-400 text-sm">Excellence in Education</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              A center of excellence committed to raising confident,
              disciplined, and well-rounded learners with strong moral values
              and academic excellence.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academic Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Academics</h4>
            <ul className="space-y-3">
              {academicLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <info.icon className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-sm leading-relaxed">
                    {info.text}
                  </span>
                </li>
              ))}
            </ul>

            {/* School Hours */}
            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <h5 className="font-semibold mb-2 flex items-center">
                <GraduationCap className="w-4 h-4 mr-2 text-blue-400" />
                School Hours
              </h5>
              <p className="text-gray-300 text-sm">
                Monday - Friday: 8:00 AM - 4:00 PM
              </p>
              <p className="text-gray-300 text-sm">
                Saturday: 9:00 AM - 2:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>
                © {currentYear} Halal Impact Schools. All rights reserved.
              </span>
            </div>
            <div className="flex items-center space-x-1 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>for education</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
