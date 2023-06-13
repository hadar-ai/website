/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    config.module.rules.push({
      test: /\.svg$/,
      include: path.resolve(__dirname, 'src/images'),
      loader: 'svg-react-loader'
    })
    return config
  },  
}

module.exports = nextConfig
