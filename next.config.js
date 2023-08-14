/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  webpack(config) {
    config.infrastructureLogging = {
      level: "error",
    };
    return config;
  },
  images: {
    domains: [
      'https://i.ytimg.com',
      'yt3.ggpht.com',
      'i.ytimg.com',
    ]
  }
}

module.exports = nextConfig
