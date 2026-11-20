import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Chicagoland-Podcast-Studio",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
