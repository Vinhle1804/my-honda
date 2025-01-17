import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.honda.com.vn',
      },
      {
        protocol: 'https',
        hostname: 'www.honda.com.vn',
      },
    ],
  },
}

export default nextConfig;
