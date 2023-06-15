/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  output: 'export',
  experimental: {
    serverActions: true,
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    config.module.rules.push({
      test: /\.svg$/,
      include: path.resolve(__dirname, 'src/images'),
      loader: 'svg-react-loader'
    })

    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })

    return config
  },  
}

module.exports = nextConfig
