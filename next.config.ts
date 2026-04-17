import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "r2-dev.drtrungnguyenvo.com",
      },
      {
        protocol: "https",
        hostname: "api-dev.drtrungnguyenvo.com",
      },
    ],
  },
};

export default nextConfig;
