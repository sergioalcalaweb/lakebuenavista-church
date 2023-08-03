/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.infrastructureLogging = { debug: /PackFileCache/ }
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
