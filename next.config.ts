import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {

    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "scontent-los2-1.xx.fbcdn.net",
        port: "",
        pathname: "**", // Allows any path on this domain
      },
      // Add other remote patterns for different Facebook image sources if necessary
    ],
  },
  // images: {
  //   domains: [
  //     "platform-lookaside.fbsbx.com", // Common domain for Facebook profile pictures
  //     // Add other specific Facebook image domains if needed
  //   ],
  // },
  // images: {
  //   remotePatterns: [new URL('https://www.facebook.com/photo')],
  // },
};

export default nextConfig;
