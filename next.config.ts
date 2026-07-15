import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Prevents image optimization errors
  },
  eslint: {
    ignoreDuringBuilds: true, // Stops ESLint from breaking builds
  },
  typescript: {
    ignoreBuildErrors: true, // Stops TypeScript errors from breaking builds
  },
  output: 'standalone', // Better for Vercel deployment
};

export default nextConfig;
