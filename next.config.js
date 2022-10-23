/** @type {import('next').NextConfig} */

// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }
// module.exports = nextConfig

const withPWA = require('next-pwa')

const nextConfig = {
  dest: 'public',
}


module.exports = withPWA(nextConfig)