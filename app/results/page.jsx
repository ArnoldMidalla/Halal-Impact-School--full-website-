"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PinInputForm from "@/app/components/results_page_components/PinInputForm";
import { fetchStudentResult } from "@/app/components/results_page_components/fetchStudentResult";
import { PDFDownloadLink } from "@react-pdf/renderer";
import ResultPdfDocument from "@/app/components/results_page_components/ResultPdfDocument";
import {
  User,
  GraduationCap,
  TrendingUp,
  Trophy,
  Download,
  RotateCcw,
  Search,
  FileText,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ResultPage() {
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePinSubmit = async (pin) => {
    setLoading(true);
    setError("");
    setResult(null);
    const errorMsg = "Invalid PIN or bad internet connection. Please try again";
    try {
      const data = await fetchStudentResult(pin);
      if (!data || data.length === 0) {
        setError(errorMsg);
      } else {
        setResult(data[0]);
      }
    } catch (err) {
      setError(errorMsg);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const buildPdfData = (result) => {
    const results = [];
    const subjectKeys = Object.keys(result).filter(
      (key) => key.startsWith("subject") && result[key]
    );

    subjectKeys.forEach((subjectKey) => {
      const index = subjectKey.replace("subject", "");
      results.push({
        subject: result[`subject${index}`],
        caScore: result[`ca_score${index}`],
        examScore: result[`exam_score${index}`],
        totalScore: result[`total_score${index}`],
        grade: result[`grade${index}`],
        average: result[`average${index}`],
      });
    });

    return {
      schoolInfo: {
        name: "Halal Impact Schools",
        logoUrl: "/logo.jpg",
        motto: "Knowledge, Discipline, and Character",
        address: "Impact Avenue, off Zitti Road, Tsaunin Kura, Kaduna",
        phone: "+234 803 704 0204",
        website: "www.halalimpactschool.com.ng",
        email: "halalimpactschools@gmail.com",
      },
      reportMeta: {
        title: "Student Examination Result Sheet",
        term: result.term || "Third Term",
        session: result.session || "2024/2025",
        class: result.class || "JSS 1",
        next_term_begins: "September 15, 2025",
        classPosition: result.class_position || "N/A",
        no_of_students: result.no_of_students || "N/A",
        averageScore: result.average || "N/A",
      },
      studentInfo: {
        studentId: result.student_id,
        studentName: result.student_name,
        passportPhotoUrl: result.passport_url || "/placeholder.jpg",
      },
      principalInfo: {
        name: "Dorcas Linus Midalla",
      },
      results: results,
      generatedDate: new Date().toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: false,
      }),
    };
  };

  const getGradeColor = (average) => {
    if (average >= 80) return "text-green-600 bg-green-50 border-green-200";
    if (average >= 70) return "text-blue-600 bg-blue-50 border-blue-200";
    if (average >= 60) return "text-yellow-600 bg-yellow-50 border-yellow-200";
    return "text-red-600 bg-red-50 border-red-200";
  };

  const getPositionSuffix = (position) => {
    const lastDigit = position % 10;
    const lastTwoDigits = position % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 13) return "th";
    if (lastDigit === 1) return "st";
    if (lastDigit === 2) return "nd";
    if (lastDigit === 3) return "rd";
    return "th";
  };

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
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center">
                <FileText className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Student <span className="text-blue-600">Results</span> Portal
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Enter your PIN to access your examination results securely
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {!result ? (
              <motion.div
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-12 text-center">
                  <Search className="w-16 h-16 text-white mx-auto mb-4" />
                  <h2 className="text-3xl font-bold text-white mb-2">
                    Result Checker
                  </h2>
                  <p className="text-blue-100">
                    Enter your unique PIN to view your results
                  </p>
                </div>

                {/* Form Section */}
                <div className="p-8 lg:p-12">
                  <PinInputForm onSubmit={handlePinSubmit} />

                  {loading && (
                    <motion.div
                      className="mt-8 text-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <div className="inline-flex items-center gap-3 bg-blue-50 text-blue-700 px-6 py-3 rounded-lg">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
                        <span className="font-medium">
                          Loading your results...
                        </span>
                      </div>
                    </motion.div>
                  )}

                  {error && (
                    <motion.div
                      className="mt-8 p-4 bg-red-50 border border-red-200 rounded-lg text-center"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                    >
                      <p className="text-red-700 font-medium">{error}</p>
                    </motion.div>
                  )}

                  {/* Instructions */}
                  <div className="mt-12 bg-gray-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Instructions:
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                        Enter your unique 6-digit PIN provided by the school
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                        Ensure you have a stable internet connection
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                        Contact the school office if you encounter any issues
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Student Info Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <motion.div
                    className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <User className="w-8 h-8 text-blue-600" />
                      <div>
                        <p className="text-sm font-medium text-gray-600">
                          Student Name
                        </p>
                        <p className="text-xl font-bold text-gray-900">
                          {result.student_name}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500">
                      ID: {result.student_id}
                    </p>
                  </motion.div>

                  <motion.div
                    className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-500"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="flex items-center gap-3">
                      <GraduationCap className="w-8 h-8 text-purple-600" />
                      <div>
                        <p className="text-sm font-medium text-gray-600">
                          Class
                        </p>
                        <p className="text-xl font-bold text-gray-900">
                          {result.class}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className={`p-6 rounded-xl shadow-lg border-l-4 border-orange-500 ${getGradeColor(
                      result.average
                    )}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="flex items-center gap-3">
                      <TrendingUp className="w-8 h-8 text-orange-600" />
                      <div>
                        <p className="text-sm font-medium opacity-80">
                          Average Score
                        </p>
                        <p className="text-xl font-bold">
                          {result.average.toFixed(1)}%
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="flex items-center gap-3">
                      <Trophy className="w-8 h-8 text-green-600" />
                      <div>
                        <p className="text-sm font-medium text-gray-600">
                          Class Position
                        </p>
                        <p className="text-xl font-bold text-gray-900">
                          {result.class_position}
                          {getPositionSuffix(result.class_position)} of{" "}
                          {result.no_of_students}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Action Buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <PDFDownloadLink
                    document={<ResultPdfDocument data={buildPdfData(result)} />}
                    fileName={`${result.student_name}-Result.pdf`}
                    className="inline-flex"
                  >
                    {({ loading }) => (
                      <Button
                        size="lg"
                        className="bg-blue-600 hover:bg-blue-700 text-white min-w-48"
                        disabled={loading}
                      >
                        {loading ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Generating PDF...
                          </>
                        ) : (
                          <>
                            <Download className="w-4 h-4 mr-2" />
                            Download Result
                          </>
                        )}
                      </Button>
                    )}
                  </PDFDownloadLink>

                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => setResult(null)}
                    className="border-blue-600 text-blue-600 hover:bg-blue-50 min-w-48"
                  >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Check Another Result
                  </Button>
                </motion.div>

                {/* Success Message */}
                <motion.div
                  className="bg-green-50 border border-green-200 rounded-xl p-6 text-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <Award className="w-12 h-12 text-green-600 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-green-900 mb-2">
                    Results Retrieved Successfully!
                  </h3>
                  <p className="text-green-700">
                    Your examination results have been loaded. You can download
                    the detailed report using the button above.
                  </p>
                </motion.div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
