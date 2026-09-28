import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ⚠️ السماح بالـ Build حتى لو فيه أخطاء TypeScript
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ecommerce.routemisr.com',
        pathname: '/*/**',
      },
    ],
  },
};

export default nextConfig;