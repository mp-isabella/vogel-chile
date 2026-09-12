import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  transpilePackages: ['@vogel/ui', '@vogel/utils', '@vogel/types'],
  experimental: {
    optimizePackageImports: ['@vogel/ui', 'lucide-react'],
  },
  serverExternalPackages: ['@sanity/client', 'next-sanity'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
}

export default nextConfig
