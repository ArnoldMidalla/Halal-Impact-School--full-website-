"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Slideshow from "./components/slideshow";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Users,
  Award,
  BookOpen,
  Target,
  Heart,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export default function Home() {
  const stats = [
    { number: "1000+", label: "Happy Students", icon: Users },
    { number: "50+", label: "Dedicated Teachers", icon: GraduationCap },
    { number: "15+", label: "Years of Excellence", icon: Award },
    { number: "98%", label: "Success Rate", icon: Target },
  ];

  const programs = [
    {
      title: "Early Years Foundation (Ages 2-5)",
      description:
        "Building strong foundations through play-based learning, social skills development, and early literacy and numeracy concepts. Includes Creche, Pre-Nursery, Nursery 1 & 2.",
      icon: Heart,
      color: "bg-pink-50 text-pink-700 border-pink-200",
    },
    {
      title: "Primary Education (Ages 6-11)",
      description:
        "Comprehensive primary education focusing on core subjects, critical thinking, and moral values. Covers Basic 1-5 with preparation for secondary education.",
      icon: BookOpen,
      color: "bg-blue-50 text-blue-700 border-blue-200",
    },
    {
      title: "Junior Secondary (Ages 12-15)",
      description:
        "Advanced learning with specialized subjects, leadership development, and preparation for senior secondary education. JSS1-3 programs.",
      icon: GraduationCap,
      color: "bg-green-50 text-green-700 border-green-200",
    },
    {
      title: "Senior Secondary (Ages 16-18)",
      description:
        "Specialized education preparing students for higher education and career paths. SS1-3 with comprehensive subject offerings.",
      icon: Award,
      color: "bg-orange-50 text-orange-700 border-orange-200",
    },
  ];

  const features = [
    "Qualified Teaching Staff - Experienced educators passionate about student success",
    "Modern Facilities - State-of-the-art classrooms and learning resources",
    "Holistic Curriculum - Balanced academic and character development programs",
    "Individual Attention - Small class sizes ensuring personalized learning",
    "Safe Environment - Secure, nurturing atmosphere for optimal growth",
    "Proven Track Record - Consistent academic excellence and student achievements",
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden ">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-16 h-16 bg-blue-200 rounded-full opacity-60"
          animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-20 h-20 bg-green-200 rounded-full opacity-60"
          animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-4">
                <motion.p
                  className="text-blue-600 font-semibold text-sm uppercase tracking-wide"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Knowledge, Discipline, and Character
                </motion.p>
                <motion.h1
                  className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Igniting Excellence,
                  <span className="text-blue-600"> Inspiring</span>
                  <br />
                  <span className="text-orange-600">Futures</span>
                </motion.h1>
                <motion.p
                  className="text-lg text-gray-600 max-w-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  At Halal Impact Schools, we provide a world-class educational experience that combines academic excellence with strong moral values. From Creche to SS3, we shape confident, disciplined, and well-rounded learners ready to make a positive impact in the world.
                </motion.p>
              </div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Link href="/contact-us" className="flex items-center gap-2">
                    Book a School Tour
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-orange-600 text-orange-600 hover:bg-orange-50"
                >
                  <Link href="/contact-us">Apply Now</Link>
                </Button>
              </motion.div>

              {/* Features List */}
              <motion.div
                className="grid grid-cols-2 gap-3 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                {features.slice(0, 4).map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Image Section */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative w-full h-[500px] rounded-2xl  shadow-2xl">
                <div className="rounded-lg overflow-hidden h-[500px]">
                  <Slideshow />
                </div>
                {/* Floating Stats Cards */}
                <motion.div
                  className="absolute -top-4 -left-4 bg-white p-4 rounded-xl shadow-lg border"
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-bold text-lg">1000+</p>
                      <p className="text-xs text-gray-600">Students</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg border"
                  animate={{ y: [0, 10, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                >
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="font-bold text-lg">Top 10</p>
                      <p className="text-xs text-gray-600">In Nigeria</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Educational Programs
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive programs designed to nurture every aspect of your
              child&apos;s development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => (
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

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Halal Impact Schools?
            </h2>
            <p className="text-lg text-gray-600">
              Discover what makes us the preferred choice for quality education
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Academic Excellence",
                description: "Our proven curriculum and teaching methods ensure students achieve their full potential in all subject areas.",
                icon: "🎓"
              },
              {
                title: "Character Development",
                description: "We instill strong moral values, integrity, and leadership skills that shape responsible global citizens.",
                icon: "⭐"
              },
              {
                title: "Individual Growth",
                description: "Every child receives personalized attention to discover and develop their unique talents and abilities.",
                icon: "🌱"
              },
              {
                title: "Modern Learning",
                description: "State-of-the-art facilities and innovative teaching methods create an engaging learning environment.",
                icon: "💡"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Parents Say About Us
            </h2>
            <p className="text-lg text-gray-600">
              Hear from our satisfied parents and students
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "Halal Impact Schools has transformed my children into confident, disciplined, and academically excellent students. The caring teachers and strong moral foundation have made all the difference.",
                author: "Mrs. Sarah Ahmed",
                role: "Parent"
              },
              {
                quote: "The school's commitment to both academic and character development is remarkable. My daughter has grown tremendously in confidence and leadership skills.",
                author: "Mr. John Okafor",
                role: "Parent"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="mb-6">
                  <div className="text-4xl text-blue-600 mb-4">"</div>
                  <p className="text-gray-700 italic text-lg leading-relaxed">
                    {testimonial.quote}
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-semibold text-lg">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
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
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Join Our School Community?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Give your child the best education with our proven track record of
              excellence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                <Link href="/contact-us">Apply Now</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                <Link href="/results">Check Results</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
//       <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
//           <li className="mb-2 tracking-[-.01em]">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
//               app/page.tsx
//             </code>
//             .
//           </li>
//           <li className="tracking-[-.01em]">
//             Save and see your changes instantly.
//           </li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }
