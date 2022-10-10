/** @type {import('next').NextConfig} */
module.exports = {
  async headers() {
    return [
      {
        source: '/index',
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