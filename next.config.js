/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  async headers() {
    return [
      {
        source: '/pages',
        headers: [
          {
            key: 'Content-Encoding',
            value: 'br',
          },
        ],
      },
    ]
  },
}