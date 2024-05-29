/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '_static',
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
    deviceSizes: [
      360, 414, 512, 640, 750, 828, 1080, 1200, 1536, 1920, 2048, 3840,
    ],
  },
}

module.exports = nextConfig
