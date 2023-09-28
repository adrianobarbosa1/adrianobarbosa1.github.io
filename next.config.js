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
            hostname: 'data.terabox.com',
            port: '',
            pathname: '/thumbnail/**',
          },
        ],
      },
}

module.exports = nextConfig
