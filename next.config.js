/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  future: {
    webpack5: false,
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = nextConfig
