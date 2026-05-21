import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  transpilePackages: ['@vogel/ui', '@vogel/utils', '@vogel/types'],
  experimental: {
    optimizePackageImports: ['@vogel/ui', 'lucide-react'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

export default nextConfig
