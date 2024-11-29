import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/docs',
        destination: 'http://127.0.0.1:8000/docs'
      },
      {
        source: '/:path*',
        destination: 'http://127.0.0.1:8000/:path*'
      }
    ];
  }
};

export default nextConfig;
