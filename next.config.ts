import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com", // Allow YouTube thumbnails
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com", // Alternative YouTube image domain
      },
    ],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
  },

  // Enable performance optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Enable gzip compression
  compress: true,

  // Optimize for production builds
  productionBrowserSourceMaps: false,

  // Enable React strict mode for better development practices
  reactStrictMode: true,

  // Cache build outputs to speed up subsequent builds
  poweredByHeader: false,

  // Optional: Add experimental features if needed
  // experimental: {
  //   turbo: {
  //     // Turbopack configuration
  //   },
  // },
};

export default nextConfig;
