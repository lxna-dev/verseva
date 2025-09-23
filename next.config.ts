import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "img.youtube.com", // Allow YouTube thumbnails
      "i.ytimg.com", // Alternative YouTube image domain
    ],
  },
};

export default nextConfig;
