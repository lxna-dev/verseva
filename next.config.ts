import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize images
  images: {
    domains: [
      "img.youtube.com", // Allow YouTube thumbnails
      "i.ytimg.com", // Alternative YouTube image domain
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

  // Optimize bundle size
  swcMinify: true,

  // Optimize for production builds
  productionBrowserSourceMaps: false,

  // Enable React strict mode for better development practices
  reactStrictMode: true,

  // Cache build outputs to speed up subsequent builds
  poweredByHeader: false,
};

export default nextConfig;
