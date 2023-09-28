/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.pexels.com',
            port: '',
            pathname: '/photos/**',
          },
          {
            protocol: 'https',
            hostname: 'drive.google.com',
            port: '',
            pathname: '/file/**',
          },
        ],
      },
}

module.exports = nextConfig
