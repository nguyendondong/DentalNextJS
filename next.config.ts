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
      {
        protocol: "https",
        hostname: "r2-stg.drtrungnguyenvo.com",
      },
      {
        protocol: "https",
        hostname: "api-stg.drtrungnguyenvo.com",
      },
      {
        protocol: "https",
        hostname: "r2.drtrungnguyenvo.com",
      },
      {
        protocol: "https",
        hostname: "api.drtrungnguyenvo.com",
      },
    ],
  },
};

export default nextConfig;

// Enable Cloudflare bindings during local `next dev` only
if (process.env.NODE_ENV === "development") {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { initOpenNextCloudflareForDev } = require("@opennextjs/cloudflare");
  initOpenNextCloudflareForDev();
}
