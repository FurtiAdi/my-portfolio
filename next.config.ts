import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/python-lexicon-course",
  assetPrefix: "/python-lexicon-course/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;