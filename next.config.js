/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  output: 'export',
  images: { 
    /* see https://nextjs.org/docs/messages/export-image-api */
    unoptimized: true 
  },
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
