import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'flagsapi.com', port: '' }],
  },
};

export default nextConfig;
