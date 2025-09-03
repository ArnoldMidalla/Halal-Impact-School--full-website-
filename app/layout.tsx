import type { Metadata } from "next";
import { DM_Sans, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";
import Footer from "./components/footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Halal Impact Schools - Igniting Excellence, Inspiring Futures",
  description:
    "Halal Impact Schools provides world-class education from Creche to SS3 in Kaduna, Nigeria. We combine academic excellence with strong moral values, nurturing confident, disciplined, and well-rounded learners ready to make a positive impact in the world.",
  keywords: [
    "Halal Impact Schools",
    "Kaduna schools",
    "Nigerian education",
    "Christian education",
    "private school Kaduna",
    "quality education Nigeria",
    "Creche to SS3",
    "academic excellence",
    "character development",
    "Schools in Kaduna",
  ],
  authors: [{ name: "Halal Impact Schools" }],
  creator: "Halal Impact Schools",
  publisher: "Halal Impact Schools",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://halalimpactschool.com.ng"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Halal Impact Schools - Igniting Excellence, Inspiring Futures",
    description:
      "World-class education from Creche to SS3 in Kaduna, Nigeria. Combining academic excellence with strong moral values for confident, disciplined learners.",
    url: "https://halalimpactschools.edu.ng",
    siteName: "Halal Impact Schools",
    images: [
      {
        url: "/Halal-Impact-School-Logo.png",
        width: 1200,
        height: 630,
        alt: "Halal Impact Schools Logo",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Halal Impact Schools - Igniting Excellence, Inspiring Futures",
    description:
      "World-class education from Creche to SS3 in Kaduna, Nigeria. Combining academic excellence with strong moral values.",
    images: ["/Halal-Impact-School-Logo.png"],
    creator: "@HalalImpactSch",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Halal-Impact-School-Logo.png" sizes="any" />
        <link rel="apple-touch-icon" href="/Halal-Impact-School-Logo.png" />
      </head>
      <body
        className={`${dmSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
